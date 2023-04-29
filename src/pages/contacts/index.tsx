import Head from "next/head";

import Contacts from "@components/Contacts";
import ContactsForm from "@components/ContactsForm";
import { PageContainer } from "@layout";

function ContactsPage() {
  return (
    <PageContainer>
      <Head>
        <title>Our contacts</title>
      </Head>
      <Contacts />
      <ContactsForm />
    </PageContainer>
  );
}

export default ContactsPage;
