import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";

import { PageContainer } from "@components/layout";
import { Title } from "@styles";

const LazyContacts = lazy(() => import("@components/Contacts"));
const LazyContactsForm = lazy(() => import("@components/ContactsForm"));

function ContactsPage() {
  const { t } = useTranslation();

  return (
    <Suspense>
      <PageContainer>
        <Head>
          <Title>{t("contact us")}</Title>
        </Head>
        <LazyContacts />
        <LazyContactsForm />
      </PageContainer>
    </Suspense>
  );
}

export default ContactsPage;
