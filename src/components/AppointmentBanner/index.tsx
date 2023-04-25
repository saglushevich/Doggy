import { useTranslation } from "react-i18next";

import { Container } from "@layout";

import { Title, Wrapper } from "./styles";

function AppointmentBanner() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <Title>{t("book visit")}</Title>
      </Container>
    </Wrapper>
  );
}

export default AppointmentBanner;
