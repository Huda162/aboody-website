// src/i18n.js (or lib/i18n.js)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from './en/en.json';
import translationsAR from './ar/ar.json';
import translationsHE from './he/he.json';

const resources = {
  en: { translation: translationsEN },
  ar: { translation: translationsAR },
  he: { translation: translationsHE }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    supportedLngs: ['ar', 'en', 'he'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
