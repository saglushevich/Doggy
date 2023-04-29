import Head from "next/head";

import Spa from "@components/Spa";
import { PageContainer } from "@layout";

function ServicesPage() {
  return (
    <PageContainer>
      <Head>
        <title>Our services</title>
      </Head>
      <Spa />
    </PageContainer>
  );
}

export default ServicesPage;
