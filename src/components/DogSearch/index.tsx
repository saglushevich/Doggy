import { useDeferredValue, useState } from "react";
import { useTranslation } from "react-i18next";

import { useQuery } from "@apollo/client";
import { GET_DOG } from "@apolloClient";
import { Container } from "@components/layout";
import { SectionHeader } from "@styles";
import { IDog } from "@types";

import {
  Block,
  Form,
  Input,
  InputIcon,
  SearchMessage,
  SearchResult,
  SearchResults,
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
    <SearchMessage>{t("loading")}</SearchMessage>
  );

  const errorStatus = error && defferedSearchValue && (
    <SearchMessage>{t("went wrong")}</SearchMessage>
  );

  const notFoundStatus =
    !data ||
    (!data.dog.length && <SearchMessage>{t("not found")}</SearchMessage>);

  const onSelectDog = (dog: IDog) => () => {
    selectDog(dog);
    setDogName(dog.name);
    setSearchValue("");
  };

  const dogsList = data?.dog.slice(0, 5).map((dog: IDog) => {
    const { name } = dog;
    return (
      <SearchResult onClick={onSelectDog(dog)} key={name}>
        {name}
      </SearchResult>
    );
  });

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
            <SearchResults>{dogsList}</SearchResults>
          </Form>
        </Block>
      </Container>
    </Wrapper>
  );
}

export default DogSearch;
