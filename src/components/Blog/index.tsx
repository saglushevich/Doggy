import { useTranslation } from "react-i18next";
import Image from "next/image";

import dog1 from "@assets/images/blog1.webp";
import dog2 from "@assets/images/blog2.webp";
import { Container } from "@components/layout";
import PageHeader from "@components/UI/PageHeader";

import {
  Article,
  ArticleBlock,
  ArticleTitle,
  ImageContainer,
  ImageWrapper,
  Paragraph,
  ParagraphEnd,
  Wrapper,
} from "./styles";

function Blog() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <PageHeader title={t("article")} subtitle={t("article subtitle")} />
        <Article>
          <ArticleTitle>{t("article title")}</ArticleTitle>
          <ArticleBlock>
            <ImageWrapper>
              <ImageContainer>
                <Image src={dog1} alt="playing dog" fill />
              </ImageContainer>
            </ImageWrapper>
            <Paragraph>{t("paragraph1")}</Paragraph>
          </ArticleBlock>
          <ArticleBlock>
            <Paragraph>
              {t("paragraph2")}
              <ParagraphEnd>{t("love you")}</ParagraphEnd>
            </Paragraph>
            <ImageWrapper>
              <ImageContainer>
                <Image src={dog2} alt="dog in feathers" fill />
              </ImageContainer>
            </ImageWrapper>
          </ArticleBlock>
        </Article>
      </Container>
    </Wrapper>
  );
}

export default Blog;
