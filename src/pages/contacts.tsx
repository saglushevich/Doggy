import { PageContainer } from "@layout";
import Contacts from "@components/Contacts";
import ContactsForm from "@components/ContactsForm";

function ContactsPage() {
    return (
        <PageContainer>
            <Contacts />
            <ContactsForm />
        </PageContainer>
    );
}

export default ContactsPage;