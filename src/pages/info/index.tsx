import { useDeferredValue, useState } from "react";

import Dog from "@components/Dog";
import DogSearch from "@components/DogSearch";
import { PageContainer } from "@layout";

function InfoPage() {
  const [searchValue, setSearchValue] = useState("");
  const defferedSearchValue = useDeferredValue(searchValue);

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <PageContainer>
      <DogSearch
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
      />
      {defferedSearchValue && <Dog breed={defferedSearchValue} />}
    </PageContainer>
  );
}

export default InfoPage;
