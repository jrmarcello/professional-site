import { ui } from './ui';
import { defaultLang, type Lang } from './languages';

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getAlternateLanguage(lang: Lang): Lang {
  return lang === 'pt' ? 'en' : 'pt';
}

export function getLanguageLabel(lang: Lang): string {
  return lang === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN';
}
