import { createSelector } from "@reduxjs/toolkit"

export const getLoading = (state) => state.contacts.loading
export const getContacts = (state) => state.contacts.items
export const getFilter = (state) => state.contacts.filter
export const getContactsLength = (state) => state.contacts.items.length

export const filteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase()

  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
})
