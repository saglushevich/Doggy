import Head from "next/head";
import { useTranslation } from "react-i18next";

import Contacts from "@components/Contacts";
import ContactsForm from "@components/ContactsForm";
import { PageContainer } from "@components/layout";

function ContactsPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Head>
        <title>{t("contact us")}</title>
      </Head>
      <Contacts />
      <ContactsForm />
    </PageContainer>
  );
}

export default ContactsPage;
