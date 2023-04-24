import { Container } from "@layout";
import { SectionHeader } from "@styles";

import { EmailLink, Text, Wrapper } from "./styles";

function Contacts() {
  return (
    <Wrapper>
      <Container>
        <SectionHeader>Contact</SectionHeader>
        <Text>
          For customer service inquiries, please email us at&nbsp;
          <EmailLink href="mailto:customerservice@luxeanimalspa.ca">
            customerservice@luxeanimalspa.ca.
          </EmailLink>
          &nbsp; For spa inquiries, please include your animal's name for faster
          service. For your protection, please do not include your credit card
          or banking information details in your email.
        </Text>
      </Container>
    </Wrapper>
  );
}

export default Contacts;
