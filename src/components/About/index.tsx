import { useTranslation } from "react-i18next";
import Image from "next/image";

import dog from "@assets/images/about1.webp";
import cat from "@assets/images/about2.webp";
import { Container } from "@components/layout";
import PageHeader from "@components/UI/PageHeader";

import {
  Article,
  ArticleBlock,
  Articles,
  ImageContainer,
  ImageWrapper,
  Paragraph,
  Wrapper,
} from "./styles";

function About() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <PageHeader title={t("about")} subtitle={t("about subtitle")} />
        <Article>
          <ArticleBlock>
            <ImageWrapper>
              <ImageContainer>
                <Image src={dog} alt="dog grooming" fill quality={100} />
              </ImageContainer>
            </ImageWrapper>
            <Articles>
              <Paragraph>{t("about1")}</Paragraph>
              <Paragraph>{t("about2")}</Paragraph>
            </Articles>
          </ArticleBlock>

          <ArticleBlock>
            <Articles>
              <Paragraph>{t("about3")}</Paragraph>
              <Paragraph>{t("about4")}</Paragraph>
            </Articles>
            <ImageWrapper>
              <ImageContainer>
                <Image src={cat} alt="cat grooming" fill quality={100} />
              </ImageContainer>
            </ImageWrapper>
          </ArticleBlock>
        </Article>
      </Container>
    </Wrapper>
  );
}

export default About;
