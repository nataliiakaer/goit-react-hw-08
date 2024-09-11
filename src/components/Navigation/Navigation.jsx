import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { selectorAuthIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const activeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectorAuthIsLoggedIn);

  return (
    <nav className={css.navLinks} >
      <NavLink to="/" className={activeLinkClass}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={activeLinkClass}>
          Contacts{" "}
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
