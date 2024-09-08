import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { selectorAuthIsRefreshing } from "../redux/auth/selectors";
import { refreshUser } from "../redux/auth/operations";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistrationForm = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectorAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <p>Refreshing user, please wait</p>;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
