export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export const defaultLang = 'pt' as const;

export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: Lang = lang) {
    return `/${l}${path}`;
  };
}
