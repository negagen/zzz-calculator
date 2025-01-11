import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import ja from "./locales/ja.json";

const resources = {
  ja: {
    translation: ja,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ja",
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
