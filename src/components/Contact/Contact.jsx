import { BsPersonFill } from 'react-icons/bs';
import { HiPhone } from 'react-icons/hi2';
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <p>
          <BsPersonFill className={css.myIcon} size="20" />
          {name}
        </p>
        <p>
          <HiPhone className={css.myIcon} size="20" />
          {number}
        </p>
      </div>

      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
