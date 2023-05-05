import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";

import { PageContainer } from "@components/layout";
import { Title } from "@styles";

const LazyAbout = lazy(() => import("@components/About"));

function AboutPage() {
  const { t } = useTranslation();

  return (
    <Suspense>
      <PageContainer>
        <Head>
          <Title>{t("about")}</Title>
        </Head>
        <LazyAbout />
      </PageContainer>
    </Suspense>
  );
}

export default AboutPage;
