import "react-i18next";
import ja from "../app/locales/ja.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "ja";
    resources: {
      ja: typeof ja;
    };
  }
}
