import { lazy, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";

import DogSearch from "@components/DogSearch";
import { PageContainer } from "@components/layout";
import { Title } from "@styles";
import { IDog } from "@types";

const LazyDog = lazy(() => import("@components/Dog"));

function InfoPage() {
  const { t } = useTranslation();
  const [selectedDog, setSelectedDog] = useState<IDog>();

  const selectDog = (dog: IDog) => {
    setSelectedDog(dog);
  };

  return (
    <Suspense>
      <PageContainer>
        <Head>
          <Title>{t("dog information")}</Title>
        </Head>
        <DogSearch selectDog={selectDog} />
        {selectedDog && <LazyDog dog={selectedDog} />}
      </PageContainer>
    </Suspense>
  );
}

export default InfoPage;
