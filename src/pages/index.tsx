import Head from "next/head";
import { useTranslation } from "react-i18next";

import Catalog from "@components/Catalog";
import Promo from "@components/Promo";
import Trending from "@components/Trending";
import SignUp from "@components/UI/SignUp";
import { CARRY_ONS, COLLARS } from "@mocks";

import { PageContainer } from "../layout/PageContainer";

function Homepage() {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <Head>
        <title>{t("home")}</title>
      </Head>
      <Promo />
      <Trending>
        <SignUp />
      </Trending>
      <Catalog
        title={t("collars")}
        buttonText={t("more collars")}
        products={COLLARS}
      />
      <Catalog
        title={t("carry Ons")}
        buttonText={t("more carry Ons")}
        products={CARRY_ONS}
      />
    </PageContainer>
  );
}

export default Homepage;
