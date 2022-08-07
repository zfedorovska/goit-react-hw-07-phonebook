import { useSelector } from 'react-redux';
import { getLoading } from '../redux/contacts/contacts-selectors';
import ContactForm from './PhoneBook/ContactForm';
import Filter from './PhoneBook/Filter';
import ContactList from './PhoneBook/ContactList';
import Spinner from '../components/PhoneBook/Spinner';
import s from '../components/PhoneBook/PhoneBook.module.css';

export default function App() {
  const loading = useSelector(getLoading);
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {loading && <Spinner />}
      <Filter />
      <ContactList />
    </div>
  );
}
