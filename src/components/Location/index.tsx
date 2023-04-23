import collars from "@assets/images/collars_1.webp";

import { Wrapper, Map, MapWrapper, Info, InfoBlock, Title, Text, Br } from "./styles";

function Location() {
    return (
        <Wrapper>
            <MapWrapper>
                <Map src={collars}/>
            </MapWrapper>
            <Info>
                <InfoBlock>
                    <Title>Our Address:</Title>
                    <Text>
                        Luxe Animal Spa <Br />
                        80 Smithe St <Br />
                        Vancouver, BC  <Br />
                        V6B 1M7 <Br />
                    </Text>
                </InfoBlock>
                <InfoBlock>
                    <Title>Hours of Operation:</Title>
                    <Text>
                        Sunday - Closed<Br />
                        Monday 10 a.m.-5:30 p.m.<Br />
                        Tuesday 10 a.m.-5:30 p.m.<Br />
                        Wednesday 10 a.m.-5:30 p.m.<Br />
                        Thursday 10 a.m.-5:30 p.m.<Br />
                        Friday 10 a.m.-5:30 p.m.<Br />
                        Saturday 10 a.m.-5:30 p.m.<Br />
                    </Text>
                </InfoBlock>
            </Info>
        </Wrapper>
    )
}

export default Location;