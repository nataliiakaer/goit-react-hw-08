import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import { useSelector } from "react-redux";
import { selectorAuthIsRefreshing } from "../redux/auth/selectors";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistrationForm = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

const App = () => {
  const isRefreshing = useSelector(selectorAuthIsRefreshing);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
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
