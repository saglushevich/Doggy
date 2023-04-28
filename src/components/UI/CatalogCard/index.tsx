import { ICatalogCard } from "@interfaces";

import {
  Category,
  Image,
  ImageWrapper,
  Info,
  Price,
  Title,
  Wrapper,
} from "./styles";

function CatalogCard({ image, title, category, price }: ICatalogCard) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
      <Info>
        <Title>{title}</Title>
        <Category>{category}</Category>
        <Price>{price}</Price>
      </Info>
    </Wrapper>
  );
}

export default CatalogCard;
