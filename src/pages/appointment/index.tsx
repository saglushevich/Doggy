import Head from "next/head";
import { useTranslation } from "react-i18next";

import Booking from "@components/Booking";
import { Container, PageContainer } from "@components/layout";

import { HeadTitle, Title, Wrapper } from "./styles";

function AppointmentPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Head>
        <HeadTitle>{t("book appointment")}</HeadTitle>
      </Head>
      <Wrapper>
        <Container>
          <Title>{t("book visit")}</Title>
        </Container>
      </Wrapper>
      <Booking />
    </PageContainer>
  );
}

export default AppointmentPage;
