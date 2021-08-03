import React from "react"
import { useDispatch, useSelector } from "react-redux"
import * as contactsActions from "../../redux/contacts/contacts-actions"
import { getFilter } from "../../redux/contacts/contacts-selectors"
import { TextField } from "@material-ui/core"

export default function Filter() {
  const dispatch = useDispatch()

  const value = useSelector(getFilter)

  const changeFilterInput = (e) => dispatch(contactsActions.changeFilter(e.target.value))

  return (
    <TextField
      type="text"
      name="filter"
      label="Filter by name"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
      value={value}
      onChange={changeFilterInput}
    />
  )
}
