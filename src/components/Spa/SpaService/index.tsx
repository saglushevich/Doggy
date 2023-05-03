import { Description, Price, Title, Wrapper } from "./styles";
import { ISpaService } from "./types";

function SpaService({ title, price, description }: ISpaService) {
  return (
    <Wrapper>
      <Title>
        {title}
        <Price>{price}</Price>
      </Title>
      <Description>{description}</Description>
    </Wrapper>
  );
}

export default SpaService;
