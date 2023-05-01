import Head from "next/head";
import { useTranslation } from "react-i18next";

import About from "@components/About";
import { PageContainer } from "@layout";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Head>
        <title>{t("about")}</title>
      </Head>
      <About />
    </PageContainer>
  );
}

export default AboutPage;
