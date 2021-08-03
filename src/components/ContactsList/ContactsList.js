import { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { contactsOperations } from "../../redux/contacts"
import { filteredContacts } from "../../redux/contacts/contacts-selectors"

import ContactItem from "./ContactItem"

import s from "./ContactsList.module.css"

export default function ContactsList() {
  const contacts = useSelector(filteredContacts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch])

  const onDeleteClick = useCallback(
    (id) => {
      dispatch(contactsOperations.deleteContact(id))
    },
    [dispatch]
  )

  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => {
        return <ContactItem key={id} name={name} number={number} onDeleteClick={onDeleteClick} id={id} />
      })}
    </ul>
  )
}
