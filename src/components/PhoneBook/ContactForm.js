import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoading } from '../../redux/contacts/contacts-selectors';
import * as operations from '../../redux/contacts/contacts-operations';
import s from './PhoneBook.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.addContact({ name, number }));
    reset();
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={s.contactForm} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            className={s.input}
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label}>
          Phone
          <input
            type="tel"
            name="number"
            className={s.input}
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" disabled={loading} className={s.submitButton}>
          Add contact
        </button>
      </form>
    </div>
  );
}
