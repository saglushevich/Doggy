import collars2 from "@assets/images/collars_2.webp";
import { Container } from "@layout";

import {
  Breed,
  Characteristic,
  Characteristics,
  Image,
  ImageWrapper,
  Wrapper,
} from "./styles";

function Dog() {
  return (
    <Wrapper>
      <Container>
        <ImageWrapper>
          <Image src={collars2} />
          <Breed>Siberian Husky</Breed>
        </ImageWrapper>
        <Characteristics>
          <Characteristic>Energy: 5</Characteristic>
          <Characteristic>Min life expectancy: 5</Characteristic>
          <Characteristic>Good with strangers: 5</Characteristic>
          <Characteristic>Good with other dogs: 5</Characteristic>
        </Characteristics>
      </Container>
    </Wrapper>
  );
}

export default Dog;
