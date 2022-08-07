import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import s from './PhoneBook.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));
  return (
    <div className={s.filter}>
      <label className={s.label}>
        Filter by name
        <input
          type="text"
          className={s.input}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
