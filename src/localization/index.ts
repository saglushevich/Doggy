import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ENG from "./languages/en.json";
import RUS from "./languages/ru.json";

const resources = {
  en: {
    translation: ENG,
  },
  ru: {
    translation: RUS,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
