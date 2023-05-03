import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import { PageContainer } from "@components/layout";
import { ROUTES } from "@constants";

import { Button, Text, Wrapper } from "./styles";

function NotFoundPage() {
  const { t } = useTranslation();

  const router = useRouter();

  const { home } = ROUTES;

  const goToPage = () => {
    router.push(home);
  };

  return (
    <PageContainer>
      <Head>
        <title>{t("page not found")}</title>
      </Head>
      <Wrapper>
        <Text>{t("page not found")}</Text>
        <Button onClick={goToPage}>{t("go start page")}</Button>
      </Wrapper>
    </PageContainer>
  );
}

export default NotFoundPage;
