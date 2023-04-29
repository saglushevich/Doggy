import Head from "next/head";

import Blog from "@components/Blog";
import { PageContainer } from "@layout";

function BlogPage() {
  return (
    <PageContainer>
      <Head>
        <title>Blog</title>
      </Head>
      <Blog />
    </PageContainer>
  );
}

export default BlogPage;
