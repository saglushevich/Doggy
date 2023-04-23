import { PageContainer } from "@layout";
import AppointmentBanner from "@components/AppointmentBanner";
import Booking from "@components/Booking";

function AppointmentPage() {
    return (
        <PageContainer>
            <AppointmentBanner />
            <Booking/>
        </PageContainer>
    );
}

export default AppointmentPage;