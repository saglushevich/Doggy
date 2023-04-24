import SpaService from "@components/SpaService";
import { Container } from "@layout";
import { SERVICES } from "@mocks";
import { SectionHeader } from "@styles";

import { Services, Wrapper } from "./styles";

function Spa() {
  const services = SERVICES.map((service) => {
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
        <SectionHeader>Spa Services</SectionHeader>
        <Services>{services}</Services>
      </Container>
    </Wrapper>
  );
}

export default Spa;
