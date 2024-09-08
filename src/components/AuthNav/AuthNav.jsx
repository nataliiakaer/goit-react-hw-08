import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const activeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <nav className={css.container}>
      <NavLink to="/register" className={activeLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={activeLinkClass}>
        Log In
      </NavLink>
    </nav>
  );
};

export default AuthNav;
