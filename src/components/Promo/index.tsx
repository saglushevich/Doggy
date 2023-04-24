import { Container } from "@layout";

import { Button, Content, Image, Subtitle, Title, Wrapper } from "./styles";

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
  );
}

export default Promo;
