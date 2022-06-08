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
import Main from "./views/Main";
import Chart from "./components/styles/Chart/Chart";
import Album from "./components/styles/Album/Album";
import AlbumProvider from "./context/AlbumContext";

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
