import { Routes, Route, Navigate } from "react-router-dom";
import UserActivitiesProvider from "./context/UserActivitiesContext";
import { useAuth } from "./context/AuthContext";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import ForgotPassword from "./views/ForgotPassword";
import UpdateProfile from "./views/UpdateProfile";
import Calendar from "./components/styles/Calendar/Calendar";
import ActivitiesList from "./views/ActivitiesList";

function App() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      {!currentUser && (
        <>
          <Route element={<AuthLayout />}>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </>
      )}
      {currentUser && (
        <>
          <Route
            element={
              <UserActivitiesProvider>
                <MainLayout />
              </UserActivitiesProvider>
            }
          >
            <Route exact path="/" element={<Home />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/list" element={<ActivitiesList />} />
            <Route path="/calendar" element={<Calendar />} />
          </Route>
        </>
      )}
      <Route
        path="*"
        element={<Navigate to={currentUser ? "/" : "sign-in"} />}
      />
    </Routes>
  );
}

export default App;
