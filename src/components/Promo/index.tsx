import { Container } from "@layout";

import { Wrapper, Content, Title, Subtitle, Button, Image } from "./styles";

function Promo() {
    return (
        <Wrapper>
            <Container>
                <Image>
                    <Content>
                        <Title>Your dog running amok in the dirt?</Title>
                        <Subtitle>Book your doggy spa day!</Subtitle>
                        <Button>Book Appointment</Button>
                    </Content>
                </Image>
            </Container>
        </Wrapper>
    )
}

export default Promo;