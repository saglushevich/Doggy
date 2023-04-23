import collars1 from "@assets/images/collars_1.webp";

import { Wrapper, ImageWrapper, Image, Info, Title, Category, Price } from "./styles";

function CatalogCard() {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={collars1}/>
            </ImageWrapper>
            <Info>
                <Title>Leather Dog Collars with Gold Name Tag</Title>
                <Category>Luxe Animal Spa</Category>
                <Price>CA $325.00</Price>
            </Info>
        </Wrapper>
    )
}

export default CatalogCard;
