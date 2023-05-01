import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import { ROUTES } from "@constants";

import { Button, Text, Wrapper } from "./styles";

function NotFound() {
  const { t } = useTranslation();
  const router = useRouter();

  const { home } = ROUTES;

  const goToPage = () => {
    router.push(home);
  };

  return (
    <Wrapper>
      <Text>{t("page not found")}</Text>
      <Button onClick={goToPage}>{t("go start page")}</Button>
    </Wrapper>
  );
}

export default NotFound;
