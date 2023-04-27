import { useTranslation } from "react-i18next";

import { ISearch } from "@interfaces";
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

function DogSearch({ searchValue, onChangeSearchValue }: ISearch) {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <SectionHeader>{t("info")}</SectionHeader>
        <Block>
          <Selection>
            {t("selection")}
            <SelectionProduct>{searchValue || "Не выбрано"}</SelectionProduct>
          </Selection>
          <Form>
            <Input
              onChange={onChangeSearchValue}
              type="text"
              value={searchValue}
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
