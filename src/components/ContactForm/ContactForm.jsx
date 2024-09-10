import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { Fab, IconButton, Tooltip } from "@mui/material";
import { IoMdAdd } from "react-icons/io";

const INITIAL_VALUES = { contactName: "", contactNumber: "" };

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = (newContact) => {
    const thunk = addContact(newContact);
    dispatch(thunk)
      .unwrap()
      .then(() => {
        toast("Contact added successfully");
      });
  };

  const handleSubmit = (values, actions) => {
    const contactNew = {
      name: values.contactName,
      number: values.contactNumber,
    };
    onAddContact(contactNew);
    actions.resetForm();
  };

  const numberRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

  const ContactValidationSchema = Yup.object().shape({
    contactName: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    contactNumber: Yup.string()
      .matches(numberRegExp, "Phone number in the format xxx-xx-xx")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label}>
            <span>Name</span>
            <Field type="text" name="contactName" required />
            <ErrorMessage
              className={css.errorText}
              name="contactName"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field type="tel" name="contactNumber" required />
            <ErrorMessage
              className={css.errorText}
              name="contactNumber"
              component="span"
            />
          </label>
        </div>
        <Tooltip title="Add contact" className={css.submitBnt}>
          <IconButton type="submit">
            <Fab size="small" color="primary" aria-label="add">
              <IoMdAdd />
            </Fab>
          </IconButton>
        </Tooltip>
      </Form>
    </Formik>
  );
};

export default ContactForm;
