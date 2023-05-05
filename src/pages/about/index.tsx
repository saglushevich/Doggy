import { useTranslation } from "react-i18next";
import Head from "next/head";

import About from "@components/About";
import { PageContainer } from "@components/layout";
import { Title } from "@styles";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Head>
        <Title>{t("about")}</Title>
      </Head>
      <About />
    </PageContainer>
  );
}

export default AboutPage;
