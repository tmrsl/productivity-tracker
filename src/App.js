import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import ForgotPassword from "./views/ForgotPassword";
import MainLayout from "./layouts/MainLayout";

import { useAuth } from "./context/AuthContext";
import UpdateProfile from "./views/UpdateProfile";
import AuthLayout from "./layouts/AuthLayout";
import Calendar from "./components/styles/Calendar/Calendar";
import ActivitiesList from "./components/styles/Activities/ActivitiesList/ActivitiesList";
import UserActivitiesProvider from "./context/UserActivitiesContext";

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
