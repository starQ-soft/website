import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type LanguageCode = 'ja-jp' | 'en-us' | 'zh-cn';

const STORAGE_KEY = 'starq-lang';
const DEFAULT_LANG: LanguageCode = 'ja-jp';

const isLanguageCode = (value: string | null): value is LanguageCode =>
  value === 'ja-jp' || value === 'en-us' || value === 'zh-cn';

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<LanguageCode>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isLanguageCode(stored) ? stored : DEFAULT_LANG;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

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
