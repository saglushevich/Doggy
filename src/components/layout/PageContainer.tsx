import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import Footer from "@components/Footer";
import Navigation from "@components/UI/Navigation";

import { Discount, Text } from "./styles";

export function PageContainer({ children }: { children: ReactNode }) {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <Discount>
        <Text>{t("discount")}</Text>
      </Discount>
      {children}
      <Footer />
    </>
  );
}
