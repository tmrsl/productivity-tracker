import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
// import MainTheme from "./theme";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { ColorModeContextProvider } from "./context/ColorModeContext";
import UserActivitiesProvider from "./context/UserActivitiesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ColorModeContextProvider>
        <AuthProvider>
          <UserActivitiesProvider>
            <HashRouter>
              <App />
            </HashRouter>
          </UserActivitiesProvider>
        </AuthProvider>
      </ColorModeContextProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
