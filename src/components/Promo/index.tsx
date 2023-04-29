import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import { Button, Content, Subtitle, Title, Wrapper } from "./styles";

function Promo() {
  const router = useRouter();
  const { t } = useTranslation();

  const goToPage = () => {
    router.push("/appointment");
  };

  return (
    <Wrapper>
      <Content>
        <Title>{t("header")}</Title>
        <Subtitle>{t("book")}</Subtitle>
        <Button onClick={goToPage}>{t("book appointment")}</Button>
      </Content>
    </Wrapper>
  );
}

export default Promo;
