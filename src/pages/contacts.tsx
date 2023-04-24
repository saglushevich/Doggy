import Contacts from "@components/Contacts";
import ContactsForm from "@components/ContactsForm";
import { PageContainer } from "@layout";

function ContactsPage() {
  return (
    <PageContainer>
      <Contacts />
      <ContactsForm />
    </PageContainer>
  );
}

export default ContactsPage;
