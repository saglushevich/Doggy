import { useState } from "react";

import { Container } from "@components/layout";
import CatalogCard from "@components/UI/CatalogCard";
import { SectionTitle } from "@styles";

import { Button, Cards, Wrapper } from "./styles";
import { ICatalog } from "./types";

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
    setCardsAmount((prevCardsAmount) => prevCardsAmount + 3);
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
