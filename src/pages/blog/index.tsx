import Head from "next/head";
import { useTranslation } from "react-i18next";

import Blog from "@components/Blog";
import { PageContainer } from "@components/layout";

function BlogPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Head>
        <title>{t("blog")}</title>
      </Head>
      <Blog />
    </PageContainer>
  );
}

export default BlogPage;
