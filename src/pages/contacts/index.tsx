import Head from "next/head";
import { useTranslation } from "react-i18next";

import Contacts from "@components/Contacts";
import ContactsForm from "@components/ContactsForm";
import { PageContainer } from "@components/layout";
import { Title } from "@styles";

function ContactsPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Head>
        <Title>{t("contact us")}</Title>
      </Head>
      <Contacts />
      <ContactsForm />
    </PageContainer>
  );
}

export default ContactsPage;
