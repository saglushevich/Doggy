import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";

import { PageContainer } from "@components/layout";
import { Title } from "@styles";

const LazyBlog = lazy(() => import("@components/Blog"));

function BlogPage() {
  const { t } = useTranslation();

  return (
    <Suspense>
      <PageContainer>
        <Head>
          <Title>{t("blog")}</Title>
        </Head>
        <LazyBlog />
      </PageContainer>
    </Suspense>
  );
}

export default BlogPage;
