import { ErrorMessage, Form, FormikProvider } from "formik";

import { CONTACT_SCHEMA, CONTACT_TEMPLATE } from "@constants";
import { useContact } from "@hooks";
import { Container } from "@layout";

import {
  Button,
  FormMessage,
  Input,
  Inputs,
  InputWrapper,
  TextArea,
  Wrapper,
} from "./styles";

function ContactsForm() {
  const { formik, form, disabled, message } = useContact(
    CONTACT_SCHEMA,
    CONTACT_TEMPLATE as string
  );

  const {
    values: { name, surname, phone, email, usermessage },
    handleChange,
  } = formik;

  return (
    <Container>
      <Wrapper>
        <FormikProvider value={formik}>
          <Form ref={form}>
            <Inputs>
              <InputWrapper>
                <Input
                  placeholder="First Name"
                  name="name"
                  onChange={handleChange}
                  value={name}
                  type="text"
                />
                <ErrorMessage name="name">
                  {(msg) => <FormMessage>{msg}</FormMessage>}
                </ErrorMessage>
              </InputWrapper>
              <InputWrapper>
                <Input
                  placeholder="Last Name"
                  name="surname"
                  onChange={handleChange}
                  value={surname}
                  type="text"
                />
                <ErrorMessage name="surname">
                  {(msg) => <FormMessage>{msg}</FormMessage>}
                </ErrorMessage>
              </InputWrapper>
            </Inputs>
            <Inputs>
              <InputWrapper>
                <Input
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  type="text"
                />
                <ErrorMessage name="email">
                  {(msg) => <FormMessage>{msg}</FormMessage>}
                </ErrorMessage>
              </InputWrapper>
              <InputWrapper>
                <Input
                  placeholder="Phone number"
                  name="phone"
                  onChange={handleChange}
                  value={phone}
                  type="number"
                />
                <ErrorMessage name="phone">
                  {(msg) => <FormMessage>{msg}</FormMessage>}
                </ErrorMessage>
              </InputWrapper>
            </Inputs>
            <TextArea
              placeholder="Your message goes here ..."
              name="usermessage"
              onChange={handleChange}
              value={usermessage}
            />
            <ErrorMessage name="usermessage">
              {(msg) => <FormMessage>{msg}</FormMessage>}
            </ErrorMessage>
            <Button disabled={disabled}>Submit</Button>
            <FormMessage>{message}</FormMessage>
          </Form>
        </FormikProvider>
      </Wrapper>
    </Container>
  );
}

export default ContactsForm;
