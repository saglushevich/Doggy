import { useDeferredValue, useState } from "react";
import { useTranslation } from "react-i18next";

import { useQuery } from "@apollo/client";
import { GET_DOG } from "@apolloClient";
import { Container } from "@components/layout";
import { SectionHeader } from "@styles";

import {
  Block,
  Form,
  Input,
  InputIcon,
  SearchResult,
  Selection,
  SelectionProduct,
  Wrapper,
} from "./styles";
import { ISearch } from "./types";

function DogSearch({ selectDog }: ISearch) {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");
  const [dogName, setDogName] = useState("");
  const defferedSearchValue = useDeferredValue(searchValue);

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const { data, loading, error } = useQuery(GET_DOG, {
    variables: { breed: defferedSearchValue },
  });

  const loadingStatus = loading && defferedSearchValue && (
    <SearchResult>{t("loading")}</SearchResult>
  );

  const errorStatus = error && defferedSearchValue && (
    <SearchResult>{t("went wrong")}</SearchResult>
  );

  const notFoundStatus =
    !data || (!data.dog && <SearchResult>{t("not found")}</SearchResult>);

  const onSelectDog = () => {
    selectDog(data.dog);
    setDogName(data.dog.name);
    setSearchValue("");
  };

  return (
    <Wrapper>
      <Container>
        <SectionHeader>{t("info")}</SectionHeader>
        <Block>
          <Selection>
            {t("selection")}
            <SelectionProduct>{dogName || t("not selected")}</SelectionProduct>
          </Selection>
          <Form>
            <Input
              onChange={onChangeSearchValue}
              type="text"
              value={searchValue}
              placeholder={t("search") as string}
            />
            <InputIcon />
            {loadingStatus}
            {notFoundStatus}
            {errorStatus}
            {data?.dog && (
              <SearchResult onClick={onSelectDog}>{data.dog.name}</SearchResult>
            )}
          </Form>
        </Block>
      </Container>
    </Wrapper>
  );
}

export default DogSearch;
