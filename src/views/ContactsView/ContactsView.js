import { useSelector } from "react-redux"

import ContactForm from "../../components/ContactForm"
import ContactList from "../../components/ContactsList"
import Filter from "../../components/Filter"
import { getContactsLength } from "../../redux/contacts/contacts-selectors"

const ContactsView = () => {
  const contactsLength = useSelector(getContactsLength)
  return (
    <div>
      <h1>Add New Contacts</h1>
      <ContactForm />
      {contactsLength > 1 ? <Filter /> : <span></span>}
      <ContactList />
    </div>
  )
}

export default ContactsView
