import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";

// import Catalog from "@components/Catalog";
import { PageContainer } from "@components/layout";
// import Promo from "@components/Promo";
// import Trending from "@components/Trending";
// import SignUp from "@components/UI/SignUp";
import { CARRY_ONS, COLLARS } from "@mocks";
import { Title } from "@styles";

const LazyCatalog = lazy(() => import("@components/Catalog"));
const LazyPromo = lazy(() => import("@components/Promo"));
const LazyTrending = lazy(() => import("@components/Trending"));
const LazySignUp = lazy(() => import("@components/UI/SignUp"));

function Homepage() {
  const { t } = useTranslation();
  return (
    <Suspense>
      <PageContainer>
        <Head>
          <Title>{t("home")}</Title>
        </Head>
        <LazyPromo />
        <LazyTrending>
          <LazySignUp />
        </LazyTrending>
        <LazyCatalog
          title={t("collars")}
          buttonText={t("more collars")}
          products={COLLARS}
        />
        <LazyCatalog
          title={t("carry Ons")}
          buttonText={t("more carry Ons")}
          products={CARRY_ONS}
        />
      </PageContainer>
    </Suspense>
  );
}

export default Homepage;
