import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Fab, IconButton, Tooltip } from "@mui/material";
import { MdDelete } from "react-icons/md";

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
      <button type="button" onClick={() => onDeleteContact(id)}>
        <Tooltip title="Delete">
          <IconButton>
            <Fab size="small" color="default" aria-label="add">
              <MdDelete />
            </Fab>
          </IconButton>
        </Tooltip>
      </button>
    </>
  );
};

export default Contact;
