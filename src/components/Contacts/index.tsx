import { useTranslation } from "react-i18next";

import { Container } from "@components/layout";
import { SectionHeader } from "@styles";

import { EmailLink, Text, Wrapper } from "./styles";

function Contacts() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <SectionHeader>{t("contact")}</SectionHeader>
        <Text>
          {t("service inquiries")}
          <EmailLink href="mailto:customerservice@luxeanimalspa.ca">
            customerservice@luxeanimalspa.ca.
          </EmailLink>
          {t("spa inquiries")}
        </Text>
      </Container>
    </Wrapper>
  );
}

export default Contacts;
