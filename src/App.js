import { Routes, Route, Navigate } from "react-router-dom";
import Album from "./components/styles/Album/Album";
import Calendar from "./components/styles/Calendar/Calendar";
import Chart from "./components/styles/Chart/Chart";
import AlbumProvider from "./context/AlbumContext";
import { useAuth } from "./context/AuthContext";
import UserActivitiesProvider from "./context/UserActivitiesContext";

import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import ActivitiesList from "./views/ActivitiesList";
import ForgotPassword from "./views/ForgotPassword";
import Home from "./views/Home";
import Main from "./views/Main";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import UpdateProfile from "./views/UpdateProfile";

function App() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      {!currentUser && (
        <>
          <Route element={<AuthLayout />}>
            <Route path="start" element={<Main />} />
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
                <AlbumProvider>
                  <MainLayout />
                </AlbumProvider>
              </UserActivitiesProvider>
            }
          >
            <Route exact path="/" element={<Home />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/list" element={<ActivitiesList />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/album" element={<Album />} />
          </Route>
        </>
      )}
      <Route path="*" element={<Navigate to={currentUser ? "/" : "start"} />} />
    </Routes>
  );
}

export default App;
