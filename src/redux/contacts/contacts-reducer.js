import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../contacts/contacts-operations';

const itemsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, { payload }) => {
    if (payload.name.includes('exists')) {
      return state;
    } else {
      return [...state, payload];
    }
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    console.log(payload);
    return (state = state.filter(({ id }) => id !== payload.id));
  },
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading,
});
