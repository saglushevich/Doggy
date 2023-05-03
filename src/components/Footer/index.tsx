import { ErrorMessage, FormikProvider } from "formik";
import { useTranslation } from "react-i18next";

import { Container } from "@components/layout";
import { SUBSCRIBE_SCHEMA, SUBSCRIBE_TEMPLATE } from "@constants";
import { useContact } from "@hooks";
import { FOOTER_LINKS, SOCIAL } from "@mocks";

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

  const socialNetworks = SOCIAL.map(({ id, image, link }) => (
    <Social key={id} target="_black" href={link} image={image} />
  ));

  const customerService = FOOTER_LINKS.customerService.map(
    ({ id, link, title }) => (
      <FooterLink key={id} href={link}>
        {t(title)}
      </FooterLink>
    )
  );

  const navigation = FOOTER_LINKS.navigation.map(({ id, link, title }) => (
    <FooterLink key={id} href={link}>
      {t(title)}
    </FooterLink>
  ));

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
