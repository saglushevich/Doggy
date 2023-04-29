import Head from "next/head";

import AppointmentBanner from "@components/AppointmentBanner";
import Booking from "@components/Booking";
import { PageContainer } from "@layout";

function AppointmentPage() {
  return (
    <PageContainer>
      <Head>
        <title>Book an appointment</title>
      </Head>
      <AppointmentBanner />
      <Booking />
    </PageContainer>
  );
}

export default AppointmentPage;
