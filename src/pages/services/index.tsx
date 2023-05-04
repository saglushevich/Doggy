import Head from "next/head";
import { useTranslation } from "react-i18next";

import { PageContainer } from "@components/layout";
import Spa from "@components/Spa";
import { Title } from "@styles";

function ServicesPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Head>
        <Title>{t("spa services")}</Title>
      </Head>
      <Spa />
    </PageContainer>
  );
}

export default ServicesPage;
