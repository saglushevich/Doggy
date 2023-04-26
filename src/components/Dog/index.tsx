import { useTranslation } from "react-i18next";

// import { useQuery } from "@apollo/client";
import collars2 from "@assets/images/collars_2.webp";
import { IDog } from "@interfaces";
import { Container } from "@layout";

import {
  Breed,
  Characteristic,
  Characteristics,
  Image,
  ImageWrapper,
  Wrapper,
} from "./styles";

function Dog({ selectedDog }: IDog) {
  const { t } = useTranslation();

  // const { data, loading, error } = useQuery(GET_DOG_INFO);

  // console.log(data, loading, error);

  const { name, energy } = selectedDog;
  return (
    <Wrapper>
      <Container>
        <ImageWrapper>
          <Image src={collars2} />
          <Breed>{name}</Breed>
        </ImageWrapper>
        <Characteristics>
          <Characteristic>
            {t("energy")} {energy}
          </Characteristic>
          <Characteristic>{t("life expectancy")} 5</Characteristic>
          <Characteristic>{t("strangers")} 5</Characteristic>
          <Characteristic>{t("other dogs")} 5</Characteristic>
        </Characteristics>
      </Container>
    </Wrapper>
  );
}

export default Dog;
