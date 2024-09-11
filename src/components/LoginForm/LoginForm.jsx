import { Form, ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectorAuthError } from "../../redux/auth/selectors";
import toast from "react-hot-toast";
import { Button } from "@mui/material";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectorAuthError);

  const handleSubmit = (value, actions) => {
    dispatch(login(value))
      .unwrap()
      .then(() => {
        toast("Login success");
      })
      .catch(() => {
        toast("Email or Password is incorrect");
      });

    actions.resetForm();
  };

  const LoginValidationSchema = Yup.object().shape({
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
      validationSchema={LoginValidationSchema}
    >
      <Form className={css.form}>
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
        <Button className={css.submitBnt} variant="contained" type="submit">Log In</Button>

        {error && (
          <p className={css.errorText}>Oops, some error occured... {error}</p>
        )}
      </Form>
    </Formik>
  );
};

export default LoginForm;
