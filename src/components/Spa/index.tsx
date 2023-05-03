import { useTranslation } from "react-i18next";

import { Container } from "@components/layout";
import { useLanguage } from "@hooks";
import { SERVICES } from "@mocks";
import { SectionHeader } from "@styles";

import SpaService from "./SpaService";
import { Services, Wrapper } from "./styles";

function Spa() {
  const { t } = useTranslation();
  const lang = useLanguage();

  const services = SERVICES[lang].map(({ id, title, description, price }) => (
    <SpaService
      key={id}
      title={title}
      description={description}
      price={price}
    />
  ));

  return (
    <Wrapper>
      <Container>
        <SectionHeader>{t("spa services")}</SectionHeader>
        <Services>{services}</Services>
      </Container>
    </Wrapper>
  );
}

export default Spa;
