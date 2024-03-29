import { useTranslation } from "react-i18next";
import Head from "next/head";
import { useRouter } from "next/router";

import { PageContainer } from "@components/layout";
import { ROUTES } from "@constants";
import { Title } from "@styles";

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
        <Title>{t("page not found")}</Title>
      </Head>
      <Wrapper>
        <Text>{t("page not found")}</Text>
        <Button onClick={goToPage}>{t("go start page")}</Button>
      </Wrapper>
    </PageContainer>
  );
}

export default NotFoundPage;
