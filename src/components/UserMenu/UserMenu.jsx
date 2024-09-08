import { useDispatch, useSelector } from "react-redux";
import { selectorAuthUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectorAuthUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div>
        <p>Welcome, {user.name}</p>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
