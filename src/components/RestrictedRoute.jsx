import { useSelector } from "react-redux";
import { selectorAuthIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component, redirecTo = "/" }) => {
  const isLoggedIn = useSelector(selectorAuthIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirecTo} replace /> : component;
};

export default RestrictedRoute;
