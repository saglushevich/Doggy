/* eslint-disable camelcase */
import { useTranslation } from "react-i18next";

import { useQuery } from "@apollo/client";
import { GET_DOG } from "@apolloClient";
import { Container } from "@layout";

import {
  Characteristic,
  Characteristics,
  Image,
  ImageWrapper,
  InfoText,
  Wrapper,
} from "./styles";

function Dog({ breed }: { breed: string }) {
  const { t } = useTranslation();

  const { data, loading, error } = useQuery(GET_DOG, {
    variables: { breed },
  });

  if (loading) {
    return <InfoText>{t("loading")}</InfoText>;
  }

  if (!data || !data.dog) {
    return <InfoText>{t("not found")}</InfoText>;
  }

  if (error) {
    return <InfoText>{t("went wrong")}</InfoText>;
  }

  const {
    name,
    image_link,
    energy,
    good_with_strangers,
    good_with_other_dogs,
    max_life_expectancy,
  } = data.dog;

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
