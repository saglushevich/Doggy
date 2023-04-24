import CatalogCard from "@components/CatalogCard";
import { ICatalog } from "@interfaces";
import { Container } from "@layout";
import { SectionTitle } from "@styles";

import { Button, Cards, Wrapper } from "./styles";

function Catalog({ title }: ICatalog) {
  return (
    <Wrapper>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <Cards>
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
        </Cards>
        <Button>See More Dog Collars</Button>
      </Container>
    </Wrapper>
  );
}

export default Catalog;
