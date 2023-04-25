import { useTranslation } from "react-i18next";

import SpaService from "@components/SpaService";
import { useLanguage } from "@hooks";
import { Container } from "@layout";
import { SERVICES } from "@mocks";
import { SectionHeader } from "@styles";

import { Services, Wrapper } from "./styles";

function Spa() {
  const { t } = useTranslation();
  const lang = useLanguage();

  const services = SERVICES[lang].map((service) => {
    const { id, title, description, price } = service;
    return (
      <SpaService
        key={id}
        title={title}
        description={description}
        price={price}
      />
    );
  });

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
