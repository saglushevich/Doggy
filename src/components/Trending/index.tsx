import dog from "@assets/images/trending_dog.webp";

import { SectionTitle } from "@styles";
import { Container } from "@layout";

import { Wrapper, Content, ImageWrapper, Image, PackageInfo, PackageName, PackagePrice, PackageDescription, PackageButton } from "./styles";

function Trending({ children }: {children: any}) {
    return (
        <Container>
            <Wrapper>
                <SectionTitle>Trending Spa Package</SectionTitle>
                <Content>
                    <ImageWrapper>
                        <Image src={dog}/>
                    </ImageWrapper>
                    <PackageInfo>
                        <PackageName>Doggy Facial and Fur Cleanse Treatment</PackageName>
                        <PackagePrice>$269</PackagePrice>
                        <PackageDescription>
                            Dogs receive a facial with our vegan, cruelty free face products and cleansing of any dirt left hiding in their beautiful fur
                            (comes with a take home face products and animal treats).
                        </PackageDescription>
                        <PackageButton>
                            See More Spa Packages
                        </PackageButton>
                    </PackageInfo>
                </Content>
            </Wrapper>
            {children}
        </Container>
    )
}

export default Trending;