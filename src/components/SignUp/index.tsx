import { ErrorMessage, Form, FormikProvider } from "formik";

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
  const { formik, form, disabled, message } = useContact(
    SUBSCRIBE_SCHEMA,
    EMAIL_TEMPLATE as string
  );

  return (
    <Wrapper>
      <InnerWrapper>
        <Content>
          <SignTitle>Sign Up to Bark Newsletter</SignTitle>
          <SignDiscount>Get 10% Off Your First Spa Treatment </SignDiscount>
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
                Sign Up
              </SignButton>
            </Form>

            <ErrorMessage name="email">
              {(msg) => <FormMessage>{msg}</FormMessage>}
            </ErrorMessage>

            <FormMessage>{message}</FormMessage>
          </FormikProvider>
          <SignText>
            *By completing this form you are signing up to receive our emails
            and can unsubscribe at any time.
          </SignText>
        </Content>
        <ImageWrapper>
          <Image src={signUpDog} />
        </ImageWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

export default SignUp;
