import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

import { MAP_KEY, MAP_LINK } from "@constants";
import { COORDINATES } from "@mocks";

import {
  Br,
  Info,
  InfoBlock,
  Map,
  MapWrapper,
  Text,
  Title,
  Wrapper,
} from "./styles";

function Location() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  mapboxgl.accessToken = MAP_KEY as string;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: MAP_LINK,
      center: [-100, 20],
      zoom: 6.5,
    });

    COORDINATES.map((place) =>
      new mapboxgl.Marker().setLngLat(place as [number, number]).addTo(map)
    );

    return () => map.remove();
  }, []);

  return (
    <Wrapper>
      <MapWrapper>
        <Map ref={mapContainerRef} />
      </MapWrapper>
      <Info>
        <InfoBlock>
          <Title>Our Address:</Title>
          <Text>
            Luxe Animal Spa <Br />
            80 Smithe St <Br />
            Vancouver, BC <Br />
            V6B 1M7 <Br />
          </Text>
        </InfoBlock>
        <InfoBlock>
          <Title>Hours of Operation:</Title>
          <Text>
            Sunday - Closed
            <Br />
            Monday 10 a.m.-5:30 p.m.
            <Br />
            Tuesday 10 a.m.-5:30 p.m.
            <Br />
            Wednesday 10 a.m.-5:30 p.m.
            <Br />
            Thursday 10 a.m.-5:30 p.m.
            <Br />
            Friday 10 a.m.-5:30 p.m.
            <Br />
            Saturday 10 a.m.-5:30 p.m.
            <Br />
          </Text>
        </InfoBlock>
      </Info>
    </Wrapper>
  );
}

export default Location;
