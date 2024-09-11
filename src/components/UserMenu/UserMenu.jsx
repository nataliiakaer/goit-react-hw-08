import { useDispatch, useSelector } from "react-redux";
import { selectorAuthUser } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import { logout } from "../../redux/auth/operations";
import { Button } from "@mui/material";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectorAuthUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Welcome, {user.name}</p>
      <Link to="/">
        <Button variant="contained" type="button" onClick={onLogout}>
          Logout
        </Button>
      </Link>
    </div>
  );
};

export default UserMenu;
