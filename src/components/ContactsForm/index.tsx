import { Container } from "../../layout/Container";
import { Button, Form, Input, Inputs, TextArea } from "./styles";

function ContactsForm() {
  return (
    <Container>
      <Form>
        <Inputs>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </Inputs>
        <Inputs>
          <Input placeholder="Email" />
          <Input placeholder="Phone number" />
        </Inputs>
        <TextArea placeholder="Your message goes here ..." />
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}

export default ContactsForm;
