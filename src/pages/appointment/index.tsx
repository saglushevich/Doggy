import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";

import { Container, PageContainer } from "@components/layout";

import { HeadTitle, Title, Wrapper } from "./styles";

const LazyBooking = lazy(() => import("@components/Booking"));

function AppointmentPage() {
  const { t } = useTranslation();

  return (
    <Suspense>
      <PageContainer>
        <Head>
          <HeadTitle>{t("book appointment")}</HeadTitle>
        </Head>
        <Wrapper>
          <Container>
            <Title>{t("book visit")}</Title>
          </Container>
        </Wrapper>
        <LazyBooking />
      </PageContainer>
    </Suspense>
  );
}

export default AppointmentPage;
