import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectValueFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, filter) =>
    contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    })
);