import { memo, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import mapboxgl from "mapbox-gl";

import { MAP_KEY, MAP_LINK } from "@constants";
import { COORDINATES, SCHEDULE } from "@mocks";

import {
  Br,
  Info,
  InfoBlock,
  Map,
  MapWrapper,
  Operation,
  OperationWrapper,
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

  const schedule = SCHEDULE.map(({ id, day, time }) => (
    <Operation key={id}>
      {t(day)} - {t(time)}
      <Br />
    </Operation>
  ));

  return (
    <Wrapper>
      <MapWrapper>
        <Map ref={mapContainerRef} />
      </MapWrapper>
      <Info>
        <InfoBlock>
          <Title>{t("address")}</Title>
          <Operation>
            {t("Luxe Animal Spa")} <Br />
            {t("room")} <Br />
            {t("region")} <Br />
            V6B 1M7 <Br />
          </Operation>
        </InfoBlock>
        <InfoBlock>
          <Title>{t("hours")}</Title>
          <OperationWrapper>{schedule}</OperationWrapper>
        </InfoBlock>
      </Info>
    </Wrapper>
  );
}

export default memo(Location);
