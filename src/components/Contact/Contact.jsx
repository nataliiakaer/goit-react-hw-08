import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <IoPerson />
          {name}
        </li>
        <li className={css.item}>
          <BsFillTelephoneFill />
          {number}
        </li>
      </ul>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
