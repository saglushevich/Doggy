import { Container } from "@layout";
import PageHeader from "@components/PageHeader";
import dog from "@assets/images/about1.webp";
import cat from "@assets/images/about2.webp";

import { Wrapper, Article, Articles, ImageWrapper, Image, Paragraph, ArticleBlock } from "./styles";

function About() {
    return (
        <Wrapper>
            <Container>
                <PageHeader title="About Us" subtitle="Our Owners Love Dogs and Cats Only"/>
                <Article>
                    <ArticleBlock>
                        <ImageWrapper>
                            <Image src={dog} />
                        </ImageWrapper>
                        <Articles>
                            <Paragraph>
                                Here at Luxe Animal Spa we aim to provide you
                                with the best service possible for both you and 
                                your pet! We pride ourselves in offering a true 
                                first-class experience.  
                            </Paragraph>
                            <Paragraph>
                                Our grooming equipment is top quality.  We use
                                only the most trusted brands in the industry
                                which provides a beautiful, calming, and safe
                                salon experience for your pets. 
                            </Paragraph>
                        </Articles>
                    </ArticleBlock>

                    <ArticleBlock>
                        <Articles>
                            <Paragraph>
                                All animals deserve a special spa pampering
                                treatment, but mostly cats and dogs. Luxe Animal
                                Spa offers the best spa treatments to leave your 
                                pets feeling amazing!
                            </Paragraph>
                            <Paragraph>
                                We are the first in Canada to offer spa treatments
                                for cats and dogs. This is unheard of in many
                                places so come, bring your amazing cat or dog and
                                let us make their spa experience something they
                                will never forget!
                            </Paragraph>
                        </Articles>
                        <ImageWrapper>
                            <Image src={cat} />
                        </ImageWrapper>
                    </ArticleBlock>
                </Article>
            </Container>
        </Wrapper>
    )
}

export default About;