import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import s from './PhoneBook.module.css';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul className={s.contactList}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id}>
            <p className={s.contactItem}>
              {name}: {phone}{' '}
              <button
                className={s.removeButton}
                onClick={() => dispatch(deleteContact(id))}
              >
                Remove
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
