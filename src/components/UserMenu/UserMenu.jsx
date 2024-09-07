import { useSelector } from "react-redux";
import { selectorAuthUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const user = useSelector(selectorAuthUser);

  return (
    <div>
      <div>
        <p>Welcome, {user.name}</p>
        {/* <button type="button" onClick={() => dispatchEvent(logOut())}>
          Logout
        </button> */}
        <button type="button">Logout</button>
      </div>
    </div>
  );
};

export default UserMenu;
