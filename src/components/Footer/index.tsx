import { ErrorMessage, FormikProvider } from "formik";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Container } from "@components/layout";
import { SUBSCRIBE_SCHEMA, SUBSCRIBE_TEMPLATE } from "@constants";
import { useContact } from "@hooks";
import { FOOTER_LINKS, PRIVACY, SOCIAL } from "@mocks";

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

  const { policy, copyright, terms } = PRIVACY;

  const socialNetworks = useMemo(
    () =>
      SOCIAL.map(({ id, image, link }) => (
        <Social key={id} target="_black" href={link} image={image} />
      )),
    []
  );

  const customerService = useMemo(
    () =>
      FOOTER_LINKS.customerService.map(({ id, link, title }) => (
        <FooterLink key={id} href={link}>
          {t(title)}
        </FooterLink>
      )),
    [t]
  );

  const navigation = useMemo(
    () =>
      FOOTER_LINKS.navigation.map(({ id, link, title }) => (
        <FooterLink key={id} href={link}>
          {t(title)}
        </FooterLink>
      )),
    [t]
  );

  const policyElements = useMemo(
    () =>
      policy.map(({ id, title }) => (
        <PrivacyInfo key={id}>{t(title)}</PrivacyInfo>
      )),
    [t, policy]
  );

  const termsElements = useMemo(
    () =>
      terms.map(({ id, title }) => (
        <PrivacyInfo key={id}>{t(title)}</PrivacyInfo>
      )),
    [t, terms]
  );

  return (
    <Wrapper>
      <InnerWrapper>
        <Container>
          <Content>
            <Block>
              <Title>{t("customer service")}</Title>
              {customerService}
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
              {navigation}
            </Block>
          </Content>
        </Container>
      </InnerWrapper>

      <Privacy>
        <PrivacyBlock>{policyElements}</PrivacyBlock>
        <PrivacyInfo>{t(copyright)}</PrivacyInfo>
        <PrivacyBlock>{termsElements}</PrivacyBlock>
      </Privacy>
    </Wrapper>
  );
}

export default Footer;
