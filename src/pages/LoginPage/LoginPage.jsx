import LoginForm from "../../components/LoginForm/LoginForm";
import css from "../RegistrationPage/RegistrationPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.section}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
