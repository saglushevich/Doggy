import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Dog from "@components/Dog";
import DogSearch from "@components/DogSearch";
import { PageContainer } from "@components/layout";
import { Title } from "@styles";
import { IDog } from "@types";

function InfoPage() {
  const { t } = useTranslation();
  const [selectedDog, setSelectedDog] = useState<IDog>();

  const selectDog = (dog: IDog) => {
    setSelectedDog(dog);
  };

  return (
    <PageContainer>
      <Head>
        <Title>{t("dog information")}</Title>
      </Head>
      <DogSearch selectDog={selectDog} />
      {selectedDog && <Dog dog={selectedDog} />}
    </PageContainer>
  );
}

export default InfoPage;
