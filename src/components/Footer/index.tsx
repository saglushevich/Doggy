import { ErrorMessage, FormikProvider } from "formik";

import facebook from "@assets/icons/Facebook.svg";
import instagram from "@assets/icons/Instagram.svg";
import pinterest from "@assets/icons/Pinterest.svg";
import snapchat from "@assets/icons/Snapchat.svg";
import twitter from "@assets/icons/Twitter.svg";
import { EMAIL_TEMPLATE, SUBSCRIBE_SCHEMA } from "@constants";
import { useContact } from "@hooks";
import { Container } from "@layout";

import {
  Block,
  Button,
  Content,
  FooterForm,
  FooterLink,
  FormMessage,
  InnerWrapper,
  Input,
  Privacy,
  PrivacyBlock,
  PrivacyInfo,
  Social,
  SocialNetworks,
  Title,
  Wrapper,
} from "./styles";

function Footer() {
  const { formik, form, disabled, message } = useContact(
    SUBSCRIBE_SCHEMA,
    EMAIL_TEMPLATE as string
  );

  return (
    <Wrapper>
      <InnerWrapper>
        <Container>
          <Content>
            <Block>
              <Title>Customer Service</Title>
              <FooterLink>Blog</FooterLink>
              <FooterLink>Cancellations</FooterLink>
              <FooterLink>Track Your Animal</FooterLink>
              <FooterLink>Luxe's Annual Spa Day 2021</FooterLink>
              <FooterLink>Payment Options</FooterLink>
            </Block>
            <Block>
              <Title>Subscribe to our Newsletter</Title>

              <FormikProvider value={formik}>
                <FooterForm ref={form}>
                  <Input
                    placeholder="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="text"
                  />
                  <Button disabled={disabled}>Submit</Button>
                </FooterForm>
                <ErrorMessage name="email">
                  {(msg) => <FormMessage>{msg}</FormMessage>}
                </ErrorMessage>
                <FormMessage>{message}</FormMessage>
              </FormikProvider>

              <Title>Connect With Us On Social Media</Title>
              <SocialNetworks>
                <Social src={instagram} />
                <Social src={facebook} />
                <Social src={pinterest} />
                <Social src={twitter} />
                <Social src={snapchat} />
              </SocialNetworks>
            </Block>
            <Block>
              <Title>Navigation</Title>
              <FooterLink>Home</FooterLink>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Contact Us</FooterLink>
              <FooterLink>FAQs</FooterLink>
              <FooterLink>Help with navigation</FooterLink>
            </Block>
          </Content>
        </Container>
      </InnerWrapper>

      <Privacy>
        <PrivacyBlock>
          <PrivacyInfo>Cookie Policy</PrivacyInfo>
          <PrivacyInfo>Cookies Settings</PrivacyInfo>
        </PrivacyBlock>
        <PrivacyInfo>
          Copyright 2021 Luxe Animal Spa, LLC. All rights reserved.
        </PrivacyInfo>
        <PrivacyBlock>
          <PrivacyInfo>Terms</PrivacyInfo>
          <PrivacyInfo>Privacy</PrivacyInfo>
          <PrivacyInfo>Security</PrivacyInfo>
        </PrivacyBlock>
      </Privacy>
    </Wrapper>
  );
}

export default Footer;
