import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
          <Title>{t("address")}</Title>
          <Text>
            Luxe Animal Spa <Br />
            80 Smithe St <Br />
            Vancouver, BC <Br />
            V6B 1M7 <Br />
          </Text>
        </InfoBlock>
        <InfoBlock>
          <Title>{t("hours")}</Title>
          <Text>
            {t("sunday")} - {t("closed")}
            <Br />
            {t("monday")} 10 a.m.-5:30 p.m.
            <Br />
            {t("tuesday")} 10 a.m.-5:30 p.m.
            <Br />
            {t("wednesday")} 10 a.m.-5:30 p.m.
            <Br />
            {t("thursday")} 10 a.m.-5:30 p.m.
            <Br />
            {t("friday")} 10 a.m.-5:30 p.m.
            <Br />
            {t("saturday")} 10 a.m.-5:30 p.m.
            <Br />
          </Text>
        </InfoBlock>
      </Info>
    </Wrapper>
  );
}

export default Location;
