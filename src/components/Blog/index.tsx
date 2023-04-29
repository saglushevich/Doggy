import { useTranslation } from "react-i18next";

import dog1 from "@assets/images/blog1.webp";
import dog2 from "@assets/images/blog2.webp";
import PageHeader from "@components/UI/PageHeader";
import { Container } from "@layout";

import {
  Article,
  ArticleBlock,
  ArticleTitle,
  Image,
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
              <Image src={dog1} />
            </ImageWrapper>
            <Paragraph>{t("paragraph1")}</Paragraph>
          </ArticleBlock>
          <ArticleBlock>
            <Paragraph>
              {t("paragraph2")}
              <ParagraphEnd>{t("love you")}</ParagraphEnd>
            </Paragraph>
            <ImageWrapper>
              <Image src={dog2} />
            </ImageWrapper>
          </ArticleBlock>
        </Article>
      </Container>
    </Wrapper>
  );
}

export default Blog;
