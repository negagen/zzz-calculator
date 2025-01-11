import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// import { i18nextPlugin } from "translation-check";

import ja from "./locales/ja.json";
import en from "./locales/en.json";

const resources = {
  ja: {
    translation: ja,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  // .use(i18nextPlugin)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
