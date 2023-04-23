import { ISpaService } from "@interfaces";

import { Wrapper, Title, Price, Description } from "./styles";

function SpaService({title, price, description}: ISpaService) {
    return (
        <Wrapper>
            <Title>{title}<Price>{price}</Price></Title>
            <Description>{description}</Description>
        </Wrapper>
    )
}

export default SpaService;