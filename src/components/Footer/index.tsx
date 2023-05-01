import { ErrorMessage, FormikProvider } from "formik";
import { useTranslation } from "react-i18next";

import { ROUTES, SUBSCRIBE_SCHEMA, SUBSCRIBE_TEMPLATE } from "@constants";
import { useContact } from "@hooks";
import { Container } from "@layout";
import { SOCIAL } from "@mocks";

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
  const { t } = useTranslation();
  const { formik, form, disabled, message } = useContact(
    SUBSCRIBE_SCHEMA,
    SUBSCRIBE_TEMPLATE as string
  );

  const { blog, home, about, contacts } = ROUTES;

  const socialNetworks = SOCIAL.map(({ id, image, link }) => (
    <Social key={id} href={link} image={image} />
  ));

  return (
    <Wrapper>
      <InnerWrapper>
        <Container>
          <Content>
            <Block>
              <Title>{t("customer service")}</Title>
              <FooterLink href={blog}>{t("blog")}</FooterLink>
              <FooterLink href={home}>{t("cancellations")}</FooterLink>
              <FooterLink href={home}>{t("track")}</FooterLink>
              <FooterLink href={home}>{t("annual day")}</FooterLink>
              <FooterLink href={home}>{t("payment options")}</FooterLink>
            </Block>
            <Block>
              <Title>{t("subscribe")}</Title>

              <FormikProvider value={formik}>
                <FooterForm ref={form}>
                  <Input
                    placeholder="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="text"
                  />
                  <Button disabled={disabled}>{t("submit")}</Button>
                </FooterForm>
                <ErrorMessage name="email">
                  {(msg) => <FormMessage>{t(msg)}</FormMessage>}
                </ErrorMessage>
                <FormMessage>{message}</FormMessage>
              </FormikProvider>

              <Title>{t("connect")}</Title>
              <SocialNetworks>{socialNetworks}</SocialNetworks>
            </Block>
            <Block>
              <Title>{t("navigation")}</Title>
              <FooterLink href={home}>{t("home")}</FooterLink>
              <FooterLink href={about}>{t("about")}</FooterLink>
              <FooterLink href={contacts}>{t("contact us")}</FooterLink>
              <FooterLink href={home}>{t("FAQs")}</FooterLink>
              <FooterLink href={home}>{t("help")}</FooterLink>
            </Block>
          </Content>
        </Container>
      </InnerWrapper>

      <Privacy>
        <PrivacyBlock>
          <PrivacyInfo>{t("policy")}</PrivacyInfo>
          <PrivacyInfo>{t("settings")}</PrivacyInfo>
        </PrivacyBlock>
        <PrivacyInfo>{t("copyright")}</PrivacyInfo>
        <PrivacyBlock>
          <PrivacyInfo>{t("terms")}</PrivacyInfo>
          <PrivacyInfo>{t("privacy")}</PrivacyInfo>
          <PrivacyInfo>{t("security")}</PrivacyInfo>
        </PrivacyBlock>
      </Privacy>
    </Wrapper>
  );
}

export default Footer;
