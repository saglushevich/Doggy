import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";

import { PageContainer } from "@components/layout";
import { Title } from "@styles";

const LazySpa = lazy(() => import("@components/Spa"));

function ServicesPage() {
  const { t } = useTranslation();

  return (
    <Suspense>
      <PageContainer>
        <Head>
          <Title>{t("spa services")}</Title>
        </Head>
        <LazySpa />
      </PageContainer>
    </Suspense>
  );
}

export default ServicesPage;
