import { useTranslation } from "react-i18next";

import { Container } from "@components/layout";
import { DOG_DIELDS } from "@constants";
import { IDog } from "@types";

import {
  Characteristic,
  Characteristics,
  Image,
  ImageWrapper,
  InfoText,
  Wrapper,
} from "./styles";

function Dog({ dog }: { dog: IDog }) {
  const { t } = useTranslation();

  const { name, image_link } = dog;

  const fields = DOG_DIELDS.map(({ id, field }) => {
    const dogCharacteristic = dog[field as keyof typeof dog];

    return (
      <Characteristic key={id}>
        {t(field)} {dogCharacteristic}
      </Characteristic>
    );
  });

  return (
    <Wrapper>
      <Container>
        <ImageWrapper>
          <Image src={image_link} />
          <InfoText>{name}</InfoText>
        </ImageWrapper>
        <Characteristics>{fields}</Characteristics>
      </Container>
    </Wrapper>
  );
}

export default Dog;
