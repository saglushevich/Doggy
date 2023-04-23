import { Container } from "@layout";
import Calendar from "@components/Calendar";
import Payment from "@components/Payment";
import Location from "@components/Location";

import { 
    Wrapper, Selection, Title, Form, Inputs, Input, 
    Requests, Cancelling, Button
} from "./styles";

function Booking() {
    return (
        <Container>
            <Wrapper>
                <Selection>
                    <Title>Enter your information here</Title>
                    <Form>
                        <Inputs>
                            <Input placeholder="First name"/>
                            <Input placeholder="Last name"/>
                        </Inputs>
                        <Inputs>
                            <Input placeholder="Email"/>
                            <Input placeholder="Phone number"/>
                        </Inputs>
                        <Calendar />
                        <Requests placeholder="Any special requests for your pet(s)..."/>
                        <Payment />
                        <Cancelling>
                            Please be advised cancelling within 24 hours of your scheduled appointment will result in a cancellation fee of $300.00.
                        </Cancelling>
                        <Button>Book Appointment</Button>
                    </Form>
                </Selection>
                <Location />
            </Wrapper>
        </Container>
    )
}

export default Booking;