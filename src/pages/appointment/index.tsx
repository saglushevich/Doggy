import Head from "next/head";
import { useTranslation } from "react-i18next";

import AppointmentBanner from "@components/AppointmentBanner";
import Booking from "@components/Booking";
import { PageContainer } from "@layout";

function AppointmentPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Head>
        <title>{t("book appointment")}</title>
      </Head>
      <AppointmentBanner />
      <Booking />
    </PageContainer>
  );
}

export default AppointmentPage;
