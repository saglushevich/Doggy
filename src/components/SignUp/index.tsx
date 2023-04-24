import signUpDog from "@assets/images/singUp_dog.webp";

import {
  Content,
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
  return (
    <Wrapper>
      <InnerWrapper>
        <Content>
          <SignTitle>Sign Up to Bark Newsletter</SignTitle>
          <SignDiscount>Get 10% Off Your First Spa Treatment </SignDiscount>
          <SignInput placeholder="Email" />
          <SignButton>Sign Up</SignButton>
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
