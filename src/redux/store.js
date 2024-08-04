import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";
import contactsSlice from "./contacts/contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filtersSlice,
  },
});
