import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useQuery } from "@apollo/client";
import { GET_DOG } from "@apolloClient";
import { Container } from "@components/layout";
import { useDebounce } from "@hooks";
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
  const [searchValue, setSearchValue] = useState("");
  const [dogName, setDogName] = useState("");
  const debouncedValue = useDebounce(searchValue, 400);
  const { t } = useTranslation();

  const { data, loading, error } = useQuery(GET_DOG, {
    variables: { breed: debouncedValue },
  });

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSelectDog = (dog: IDog) => () => {
    selectDog(dog);
    setDogName(dog.name);
    setSearchValue("");
  };

  const reg = new RegExp(`^${debouncedValue.toLowerCase()}`);

  const foundDogs = data?.dog.filter((item: IDog) =>
    reg.test(item.name.toLowerCase())
  );

  const dogsList = foundDogs?.slice(0, 5).map((dog: IDog) => {
    const { name } = dog;
    return (
      <SearchResult onClick={onSelectDog(dog)} key={name}>
        {name}
      </SearchResult>
    );
  });

  const notFoundStatus =
    !data ||
    (!foundDogs.length && <SearchMessage>{t("not found")}</SearchMessage>);

  const loadingStatus = loading && debouncedValue && (
    <SearchMessage>{t("loading")}</SearchMessage>
  );

  const errorStatus = error && debouncedValue && (
    <SearchMessage>{t("went wrong")}</SearchMessage>
  );

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
