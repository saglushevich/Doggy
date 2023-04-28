import { useTranslation } from "react-i18next";

import dog from "@assets/images/about1.webp";
import cat from "@assets/images/about2.webp";
import PageHeader from "@components/UI/PageHeader";
import { Container } from "@layout";

import {
  Article,
  ArticleBlock,
  Articles,
  Image,
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
              <Image src={dog} />
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
              <Image src={cat} />
            </ImageWrapper>
          </ArticleBlock>
        </Article>
      </Container>
    </Wrapper>
  );
}

export default About;
