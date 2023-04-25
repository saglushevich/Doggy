import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  type languages = {
    en: "en";
    ru: "ru";
  };

  return (i18n.language as keyof languages) || "en";
};
