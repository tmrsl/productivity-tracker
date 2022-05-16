import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useAuth } from "../context/AuthContext";

export default function MainLayout() {
  const { logOut } = useAuth();

  const logOutHandler = () => {
    logOut();
  };

  return (
    <div style={{ background: "red" }}>
      <Navbar onLogout={logOutHandler}></Navbar>
      <Outlet />
    </div>
  );
}
