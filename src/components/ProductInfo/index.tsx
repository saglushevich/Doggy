import { SectionHeader } from "@styles";
import { Container } from "../../layout/Container";

import { Wrapper, Selection, Block, SelectionProduct, Input, InputIcon, Form } from "./styles";

function ProductInfo() {
    return (
        <Wrapper>
            <Container>
                <SectionHeader>INFO DOG</SectionHeader>
                <Block>
                    <Selection>
                        Current Selection: <SelectionProduct>Beds & Cushions</SelectionProduct>
                    </Selection>
                    <Form>
                        <Input placeholder="Search" />
                        <InputIcon />
                    </Form>
                </Block>
            </Container>
        </Wrapper>
    )
}

export default ProductInfo;