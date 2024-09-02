import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContact = useSelector(selectFilteredContacts);

  const onDeleteContact = (contactId) => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  return (
    <ul className={css.list}>
      {visibleContact.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
