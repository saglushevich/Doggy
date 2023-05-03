import Head from "next/head";
import { useTranslation } from "react-i18next";

import { PageContainer } from "@components/layout";
import Spa from "@components/Spa";

function ServicesPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Head>
        <title>{t("spa services")}</title>
      </Head>
      <Spa />
    </PageContainer>
  );
}

export default ServicesPage;
