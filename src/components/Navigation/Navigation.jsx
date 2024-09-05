import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const activeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={activeLinkClass}>
        Home
      </NavLink>
      <NavLink to="/register" className={activeLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={activeLinkClass}>
        Log In
      </NavLink>
      <NavLink to="/contacts" className={activeLinkClass}>
        Contacts{" "}
      </NavLink>
    </nav>
  );
};

export default Navigation;
