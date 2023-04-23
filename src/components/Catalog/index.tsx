import { Container } from "@layout";
import { SectionTitle } from "@styles";
import { ICatalog } from "@interfaces";
import CatalogCard from "@components/CatalogCard";

import { Wrapper, Cards, Button } from "./styles";

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
    )
}

export default Catalog;