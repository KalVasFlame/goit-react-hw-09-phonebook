import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { contactsOperations } from "../../redux/contacts"
import { getContacts } from "../../redux/contacts/contacts-selectors"
import { TextField, Button } from "@material-ui/core"

import s from "./ContactForm.module.css"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  const onChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case "name":
        setName(value)
        break
      case "number":
        setNumber(value)
        break
      default:
        console.warn(`Тип поля - ${name} не обрабатывается`)
    }
  }

  const resetState = () => {
    setName("")
    setNumber("")
  }

  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()
    contacts.some((item) => item.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(contactsOperations.addContact({ name, number }))
    resetState()
  }

  return (
    <form className={s.form} onSubmit={onFormSubmit}>
      <TextField
        name="name"
        type="text"
        label="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={name}
        onChange={onChange}
      />
      <TextField
        type="tel"
        name="number"
        label="Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        value={number}
        onChange={onChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Add contact
      </Button>
    </form>
  )
}
