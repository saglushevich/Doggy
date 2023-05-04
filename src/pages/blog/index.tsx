import Head from "next/head";
import { useTranslation } from "react-i18next";

import Blog from "@components/Blog";
import { PageContainer } from "@components/layout";
import { Title } from "@styles";

function BlogPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Head>
        <Title>{t("blog")}</Title>
      </Head>
      <Blog />
    </PageContainer>
  );
}

export default BlogPage;
