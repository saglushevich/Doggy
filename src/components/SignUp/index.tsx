import { ErrorMessage, Form, FormikProvider } from "formik";
import { useTranslation } from "react-i18next";

import signUpDog from "@assets/images/singUp_dog.webp";
import { EMAIL_TEMPLATE, SUBSCRIBE_SCHEMA } from "@constants";
import { useContact } from "@hooks";

import {
  Content,
  FormMessage,
  Image,
  ImageWrapper,
  InnerWrapper,
  SignButton,
  SignDiscount,
  SignInput,
  SignText,
  SignTitle,
  Wrapper,
} from "./styles";

function SignUp() {
  const { t } = useTranslation();
  const { formik, form, disabled, message } = useContact(
    SUBSCRIBE_SCHEMA,
    EMAIL_TEMPLATE as string
  );

  return (
    <Wrapper>
      <InnerWrapper>
        <Content>
          <SignTitle>{t("sign up")}</SignTitle>
          <SignDiscount>{t("first treatment")}</SignDiscount>
          <FormikProvider value={formik}>
            <Form ref={form}>
              <SignInput
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="text"
              />
              <SignButton disabled={disabled} type="submit">
                {t("sing up button")}
              </SignButton>
            </Form>

            <ErrorMessage name="email">
              {(msg) => <FormMessage>{msg}</FormMessage>}
            </ErrorMessage>

            <FormMessage>{message}</FormMessage>
          </FormikProvider>

          <SignText>{t("completing rules")}</SignText>
        </Content>
        <ImageWrapper>
          <Image src={signUpDog} />
        </ImageWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

export default SignUp;
