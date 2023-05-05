import { useTranslation } from "react-i18next";
import { ErrorMessage, Form, FormikProvider } from "formik";

import { Container } from "@components/layout";
import { CONTACT_SCHEMA, CONTACT_TEMPLATE } from "@constants";
import { useContact } from "@hooks";

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
  const { t } = useTranslation();
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
                  placeholder={t("name") as string}
                  name="name"
                  onChange={handleChange}
                  value={name}
                  type="text"
                />
                <ErrorMessage name="name">
                  {(msg) => <FormMessage>{t(msg)}</FormMessage>}
                </ErrorMessage>
              </InputWrapper>
              <InputWrapper>
                <Input
                  placeholder={t("surname") as string}
                  name="surname"
                  onChange={handleChange}
                  value={surname}
                  type="text"
                />
                <ErrorMessage name="surname">
                  {(msg) => <FormMessage>{t(msg)}</FormMessage>}
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
                  {(msg) => <FormMessage>{t(msg)}</FormMessage>}
                </ErrorMessage>
              </InputWrapper>
              <InputWrapper>
                <Input
                  placeholder={t("phone") as string}
                  name="phone"
                  onChange={handleChange}
                  value={phone}
                  type="number"
                />
                <ErrorMessage name="phone">
                  {(msg) => <FormMessage>{t(msg)}</FormMessage>}
                </ErrorMessage>
              </InputWrapper>
            </Inputs>
            <TextArea
              placeholder={t("message") as string}
              name="usermessage"
              onChange={handleChange}
              value={usermessage}
            />
            <ErrorMessage name="usermessage">
              {(msg) => <FormMessage>{t(msg)}</FormMessage>}
            </ErrorMessage>
            <Button disabled={disabled} type="submit">
              {t("submit")}
            </Button>
            <FormMessage>{message}</FormMessage>
          </Form>
        </FormikProvider>
      </Wrapper>
    </Container>
  );
}

export default ContactsForm;
