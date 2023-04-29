import Head from "next/head";

import About from "@components/About";
import { PageContainer } from "@layout";

function AboutPage() {
  return (
    <PageContainer>
      <Head>
        <title>About us</title>
      </Head>
      <About />
    </PageContainer>
  );
}

export default AboutPage;
