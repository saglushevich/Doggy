import { lazy, ReactNode, Suspense } from "react";
import { useTranslation } from "react-i18next";

import Navigation from "@components/UI/Navigation";

import { Discount, Text } from "./styles";

const LazyFooter = lazy(() => import("@components/Footer"));

export function PageContainer({ children }: { children: ReactNode }) {
  const { t } = useTranslation();

  return (
    <Suspense>
      <Navigation />
      <Discount>
        <Text>{t("discount")}</Text>
      </Discount>
      {children}
      <LazyFooter />
    </Suspense>
  );
}
