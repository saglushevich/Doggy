import { SectionHeader } from "@styles";
import { Container } from "@layout";
import SpaService from "@components/SpaService";
import { SERVICES } from "@mocks";

import { Wrapper, Services } from "./styles";

function Spa() {

    const services = SERVICES.map(service => {
        const { id, title, description, price} = service;
        return <SpaService key={id} title={title} description={description} price={price} />
    });
    
    return (
        <Wrapper>
            <Container>
                <SectionHeader>Spa Services</SectionHeader>
                <Services>
                    {services}
                </Services>
            </Container>
        </Wrapper>
    )
}

export default Spa;