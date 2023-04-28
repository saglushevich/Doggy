import { useState } from "react";

import CatalogCard from "@components/UI/CatalogCard";
import { ICatalog } from "@interfaces";
import { Container } from "@layout";
import { SectionTitle } from "@styles";

import { Button, Cards, Wrapper } from "./styles";

function Catalog({ title, buttonText, products }: ICatalog) {
  const [cardsAmount, setCardsAmount] = useState(3);

  const catalogCards = products.slice(0, cardsAmount).map((product) => {
    const { id, image, title, category, price } = product;

    return (
      <CatalogCard
        key={id}
        title={title}
        category={category}
        price={price}
        image={image}
      />
    );
  });

  const onLoadCards = () => {
    setCardsAmount((cardsAmount) => cardsAmount + 3);
  };

  return (
    <Wrapper>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <Cards>{catalogCards}</Cards>
        <Button onClick={onLoadCards} disabled={products.length <= cardsAmount}>
          {buttonText}
        </Button>
      </Container>
    </Wrapper>
  );
}

export default Catalog;
