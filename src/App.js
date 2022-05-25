import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import ForgotPassword from "./views/ForgotPassword";
import MainLayout from "./layouts/MainLayout";

import { useAuth } from "./context/AuthContext";
import UpdateProfile from "./views/UpdateProfile";

function App() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      {!currentUser && (
        <>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </>
      )}
      {currentUser && (
        <>
          <Route element={<MainLayout />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
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
