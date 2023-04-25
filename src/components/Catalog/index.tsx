import CatalogCard from "@components/CatalogCard";
import { ICatalog } from "@interfaces";
import { Container } from "@layout";
import { SectionTitle } from "@styles";

import { Button, Cards, Wrapper } from "./styles";

function Catalog({ title, buttonText }: ICatalog) {
  return (
    <Wrapper>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <Cards>
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
        </Cards>
        <Button>{buttonText}</Button>
      </Container>
    </Wrapper>
  );
}

export default Catalog;
