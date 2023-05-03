import { useTranslation } from "react-i18next";

import { Container } from "@components/layout";
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

  const {
    name,
    image_link,
    energy,
    good_with_strangers,
    good_with_other_dogs,
    max_life_expectancy,
  } = dog;

  return (
    <Wrapper>
      <Container>
        <ImageWrapper>
          <Image src={image_link} />
          <InfoText>{name}</InfoText>
        </ImageWrapper>
        <Characteristics>
          <Characteristic>
            {t("energy")} {energy}
          </Characteristic>
          <Characteristic>
            {t("life expectancy")} {max_life_expectancy}
          </Characteristic>
          <Characteristic>
            {t("strangers")} {good_with_strangers}
          </Characteristic>
          <Characteristic>
            {t("other dogs")} {good_with_other_dogs}
          </Characteristic>
        </Characteristics>
      </Container>
    </Wrapper>
  );
}

export default Dog;
