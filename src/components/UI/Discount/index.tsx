import { useTranslation } from "react-i18next";

import { Text, Wrapper } from "./styles";

function Discount() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Text>{t("discount")}</Text>
    </Wrapper>
  );
}

export default Discount;
