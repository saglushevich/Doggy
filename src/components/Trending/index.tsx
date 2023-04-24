import { ReactNode } from "react";

import dog from "@assets/images/trending_dog.webp";
import { Container } from "@layout";
import { SectionTitle } from "@styles";

import {
  Content,
  Image,
  ImageWrapper,
  PackageButton,
  PackageDescription,
  PackageInfo,
  PackageName,
  PackagePrice,
  Wrapper,
} from "./styles";

function Trending({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>Trending Spa Package</SectionTitle>
        <Content>
          <ImageWrapper>
            <Image src={dog} />
          </ImageWrapper>
          <PackageInfo>
            <PackageName>Doggy Facial and Fur Cleanse Treatment</PackageName>
            <PackagePrice>$269</PackagePrice>
            <PackageDescription>
              Dogs receive a facial with our vegan, cruelty free face products
              and cleansing of any dirt left hiding in their beautiful fur
              (comes with a take home face products and animal treats).
            </PackageDescription>
            <PackageButton>See More Spa Packages</PackageButton>
          </PackageInfo>
        </Content>
      </Wrapper>
      {children}
    </Container>
  );
}

export default Trending;
