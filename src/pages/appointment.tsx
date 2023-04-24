import AppointmentBanner from "@components/AppointmentBanner";
import Booking from "@components/Booking";
import { PageContainer } from "@layout";

function AppointmentPage() {
  return (
    <PageContainer>
      <AppointmentBanner />
      <Booking />
    </PageContainer>
  );
}

export default AppointmentPage;
