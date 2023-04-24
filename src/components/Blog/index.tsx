import dog1 from "@assets/images/blog1.webp";
import dog2 from "@assets/images/blog2.webp";
import PageHeader from "@components/PageHeader";
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
  return (
    <Wrapper>
      <Container>
        <PageHeader
          title="The Bark Chronicles"
          subtitle="Where To Read All About The Bark!"
        />
        <Article>
          <ArticleTitle>
            Rex, The Dog Who Never Stops Playing ... Ever
          </ArticleTitle>
          <ArticleBlock>
            <ImageWrapper>
              <Image src={dog1} />
            </ImageWrapper>
            <Paragraph>
              Sometimes it is difficult to get dogs interested in the toys you
              buy for them. .. Luckily for Rex, everything he sees is a
              potential toy for him! Never let him around your valuables or any
              socks. He will steal them and you will never see them again...
            </Paragraph>
          </ArticleBlock>
          <ArticleBlock>
            <Paragraph>
              One day, we started noticing Rex was ripping apart all of our
              sheets when he was bored except for this blanket over here. Rex
              decided to spare this ugly white blanket that my grandmother gave
              me from her war days. We never threw it away because we felt bad.
              Seeing Rex sleep on this blanket made us happy. At least someone
              was using this blanket, even if we had to rebuy brand new sheets
              because we have such an amazing dog.
              <ParagraphEnd>We love you Rex.</ParagraphEnd>
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
