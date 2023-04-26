import { useDeferredValue, useState } from "react";
import { useTranslation } from "react-i18next";

import { Container } from "@layout";
import { SectionHeader } from "@styles";

import {
  Block,
  Form,
  Input,
  InputIcon,
  Selection,
  SelectionProduct,
  Wrapper,
} from "./styles";

function DogSearch() {
  const [searchValue, setSearchValue] = useState("");
  // const defferedSearchValue = useDeferredValue(searchValue);
  const { t } = useTranslation();

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Wrapper>
      <Container>
        <SectionHeader>{t("info")}</SectionHeader>
        <Block>
          <Selection>
            {t("selection")}:{" "}
            <SelectionProduct>Beds & Cushions</SelectionProduct>
          </Selection>
          <Form>
            <Input
              onChange={onChangeSearchValue}
              type="text"
              placeholder={t("search") as string}
            />
            <InputIcon />
          </Form>
        </Block>
      </Container>
    </Wrapper>
  );
}

export default DogSearch;
