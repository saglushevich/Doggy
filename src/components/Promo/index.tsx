import { useTranslation } from "react-i18next";

import { Container } from "@layout";

import { Button, Content, Subtitle, Title, Wrapper } from "./styles";

function Promo() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>{t("header")}</Title>
          <Subtitle>{t("book")}</Subtitle>
          <Button>{t("book appointment")}</Button>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Promo;
