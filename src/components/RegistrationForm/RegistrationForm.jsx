import { Form, ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUserApi } from "../../redux/auth/operations";
import { selectorAuthError } from "../../redux/auth/selectors";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectorAuthError);

  const handleSubmit = (value, actions) => {
    dispatch(registerUserApi(value));
    console.log(value);

    actions.resetForm();
  };

  const RegisterValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short")
      .max(100, "Too long")
      .required("Required"),
    email: Yup.string()
      .email("Incorrect email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be more than 8 characters")
      .max(100, "Too long")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Username</span>
          <Field type="text" name="name" />
          <ErrorMessage
            className={css.errorText}
            name="name"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span>Email</span>
          <Field type="text" name="email" />
          <ErrorMessage
            className={css.errorText}
            name="email"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span>Password</span>
          <Field type="password" name="password" />
          <ErrorMessage
            className={css.errorText}
            name="password"
            component="span"
          />
        </label>
        <button className={css.submitBnt} type="submit">
          Register
        </button>
        {error && <p>Oops, some error... ${error}</p>}
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
