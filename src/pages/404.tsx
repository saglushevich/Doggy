import Head from "next/head";
import { useTranslation } from "react-i18next";

import NotFound from "@components/NotFound";

import { PageContainer } from "../layout/PageContainer";

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Head>
        <title>{t("page not found")}</title>
      </Head>
      <NotFound />
    </PageContainer>
  );
}

export default NotFoundPage;
