import { useSelector } from "react-redux";
import { selectorAuthIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component, redirecTo = "/contacts" }) => {
  const isLoggedIn = useSelector(selectorAuthIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirecTo} replace />;
};

export default PrivateRoute;
