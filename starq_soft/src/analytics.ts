type Gtag = (
  command: 'event',
  eventName: string,
  eventParameters: Record<string, string>,
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export const trackSteamStoreClick = (
  linkUrl: string,
  buttonPosition: string,
) => {
  window.gtag?.('event', 'steam_store_click', {
    link_url: linkUrl,
    button_position: buttonPosition,
  });
};

export const trackLanguageSelect = (
  languageCode: string,
  languageName: string,
  previousLanguage: string,
) => {
  window.gtag?.('event', 'language_select', {
    language_code: languageCode,
    language_name: languageName,
    previous_language: previousLanguage,
    button_position: 'navigation_language_selector',
  });
};
