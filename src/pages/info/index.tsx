import Head from "next/head";
import { useDeferredValue, useState } from "react";
import { useTranslation } from "react-i18next";

import Dog from "@components/Dog";
import DogSearch from "@components/DogSearch";
import { PageContainer } from "@components/layout";

function InfoPage() {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");
  const defferedSearchValue = useDeferredValue(searchValue);

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <PageContainer>
      <Head>
        <title>{t("dog information")}</title>
      </Head>
      <DogSearch
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
      />
      {defferedSearchValue && <Dog breed={defferedSearchValue} />}
    </PageContainer>
  );
}

export default InfoPage;
