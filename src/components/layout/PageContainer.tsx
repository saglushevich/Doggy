import { lazy, ReactNode, Suspense } from "react";
import { useTranslation } from "react-i18next";

import Footer from "@components/Footer";

import { Discount, Text } from "./styles";

const Navigation = lazy(() => import("@components/UI/Navigation"));

export function PageContainer({ children }: { children: ReactNode }) {
  const { t } = useTranslation();

  return (
    <Suspense>
      <Navigation />
      <Discount>
        <Text>{t("discount")}</Text>
      </Discount>
      {children}
      <Footer />
    </Suspense>
  );
}
