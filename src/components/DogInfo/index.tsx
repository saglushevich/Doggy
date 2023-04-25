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

function DogInfo() {
  const { t } = useTranslation();

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
            <Input placeholder={t("search") as string} />
            <InputIcon />
          </Form>
        </Block>
      </Container>
    </Wrapper>
  );
}

export default DogInfo;
