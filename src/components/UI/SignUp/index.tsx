import { useTranslation } from "react-i18next";
import { ErrorMessage, Form, FormikProvider } from "formik";
import Image from "next/image";

import signUpDog from "@assets/images/singUp_dog.webp";
import { SUBSCRIBE_SCHEMA, SUBSCRIBE_TEMPLATE } from "@constants";
import { useContact } from "@hooks";

import {
  Content,
  FormMessage,
  ImageContainer,
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
    SUBSCRIBE_TEMPLATE as string
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
              {(msg) => <FormMessage>{t(msg)}</FormMessage>}
            </ErrorMessage>

            <FormMessage>{message}</FormMessage>
          </FormikProvider>

          <SignText>{t("completing rules")}</SignText>
        </Content>
        <ImageWrapper>
          <ImageContainer>
            <Image
              src={signUpDog}
              alt="dog and cat on the grass"
              fill
              quality={100}
            />
          </ImageContainer>
        </ImageWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

export default SignUp;
