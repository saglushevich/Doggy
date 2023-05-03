import Image from "next/image";

import { ICatalogCard } from "@types";

import {
  Category,
  ImageContainer,
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
        <ImageContainer>
          <Image src={image} alt={`${title} image`} fill quality={100} />
        </ImageContainer>
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
