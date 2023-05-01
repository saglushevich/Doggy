import Head from "next/head";
import { useTranslation } from "react-i18next";

import Spa from "@components/Spa";
import { PageContainer } from "@layout";

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
