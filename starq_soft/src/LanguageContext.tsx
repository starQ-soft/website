import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

export type LanguageCode =
  | 'ja-jp'
  | 'en-us'
  | 'zh-cn'
  | 'zh-tw'
  | 'ko-kr'
  | 'es-es'
  | 'ru-ru'
  | 'vi-vn'
  | 'fr-fr'
  | 'it-it'
  | 'de-de'
  | 'th-th'
  | 'ms-my';

const STORAGE_KEY = 'starq-lang';
const DEFAULT_LANG: LanguageCode = 'zh-cn';
const IP_COUNTRY_ENDPOINT = 'https://api.country.is/';

const LANGUAGE_CODES: LanguageCode[] = [
  'ja-jp',
  'en-us',
  'zh-cn',
  'zh-tw',
  'ko-kr',
  'es-es',
  'ru-ru',
  'vi-vn',
  'fr-fr',
  'it-it',
  'de-de',
  'th-th',
  'ms-my',
];

const isLanguageCode = (value: string | null): value is LanguageCode =>
  value !== null && (LANGUAGE_CODES as string[]).includes(value);

const getStoredLanguage = (): LanguageCode | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isLanguageCode(stored) ? stored : null;
  } catch {
    return null;
  }
};

const storeLanguage = (language: LanguageCode) => {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // The app still works when storage is unavailable or blocked.
  }
};

const COUNTRY_LANGUAGES: Partial<Record<string, LanguageCode>> = {
  JP: 'ja-jp',
  CN: 'zh-cn',
  TW: 'zh-tw',
  HK: 'zh-tw',
  MO: 'zh-tw',
  KR: 'ko-kr',
  KP: 'ko-kr',
  ES: 'es-es',
  MX: 'es-es',
  AR: 'es-es',
  CO: 'es-es',
  CL: 'es-es',
  PE: 'es-es',
  VE: 'es-es',
  EC: 'es-es',
  GT: 'es-es',
  CU: 'es-es',
  BO: 'es-es',
  DO: 'es-es',
  HN: 'es-es',
  PY: 'es-es',
  SV: 'es-es',
  NI: 'es-es',
  CR: 'es-es',
  PA: 'es-es',
  UY: 'es-es',
  RU: 'ru-ru',
  BY: 'ru-ru',
  VN: 'vi-vn',
  FR: 'fr-fr',
  IT: 'it-it',
  DE: 'de-de',
  AT: 'de-de',
  CH: 'de-de',
  TH: 'th-th',
  MY: 'ms-my',
};

const inferLanguageFromCountry = (country: string): LanguageCode =>
  COUNTRY_LANGUAGES[country.toUpperCase()] ?? 'en-us';

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const storedLanguage = useRef(getStoredLanguage());
  const userSelectedLanguage = useRef(false);
  const [lang, setLangState] = useState<LanguageCode>(storedLanguage.current ?? DEFAULT_LANG);

  const setLang = useCallback((language: LanguageCode) => {
    userSelectedLanguage.current = true;
    setLangState(language);
    storeLanguage(language);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'zh-tw' ? 'zh-Hant' : lang;
  }, [lang]);

  useEffect(() => {
    if (storedLanguage.current) return;

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 4000);

    const detectLanguage = async () => {
      let detectedLanguage = DEFAULT_LANG;

      try {
        const response = await fetch(IP_COUNTRY_ENDPOINT, {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error(`Country lookup failed: ${response.status}`);

        const data = await response.json() as { country?: unknown };
        if (typeof data.country !== 'string' || !data.country) {
          throw new Error('Country lookup returned no country code');
        }
        detectedLanguage = inferLanguageFromCountry(data.country);
      } catch {
        detectedLanguage = DEFAULT_LANG;
      } finally {
        window.clearTimeout(timeout);
      }

      if (controller.signal.aborted || userSelectedLanguage.current) return;
      setLangState(detectedLanguage);
      storeLanguage(detectedLanguage);
    };

    void detectLanguage();
    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
