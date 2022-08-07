import { Oval } from 'react-loader-spinner';
import s from './PhoneBook.module.css';

export default function Loader() {
  return (
    <div className={s.spinnerContainer}>
      <Oval height="50" width="50" color="green" ariaLabel="loading" />
    </div>
  );
}
