import { useTranslation } from "react-i18next";

import { Container } from "@components/layout";
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
import { ISearch } from "./types";

function DogSearch({ searchValue, onChangeSearchValue }: ISearch) {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <SectionHeader>{t("info")}</SectionHeader>
        <Block>
          <Selection>
            {t("selection")}
            <SelectionProduct>
              {searchValue || t("not selected")}
            </SelectionProduct>
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
