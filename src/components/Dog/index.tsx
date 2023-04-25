import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <ImageWrapper>
          <Image src={collars2} />
          <Breed>Siberian Husky</Breed>
        </ImageWrapper>
        <Characteristics>
          <Characteristic>{t("energy")} 5</Characteristic>
          <Characteristic>{t("life expectancy")} 5</Characteristic>
          <Characteristic>{t("strangers")} 5</Characteristic>
          <Characteristic>{t("other dogs")} 5</Characteristic>
        </Characteristics>
      </Container>
    </Wrapper>
  );
}

export default Dog;
