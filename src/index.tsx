import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthContext";

import { ColorModeContextProvider } from "./context/ColorModeContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ColorModeContextProvider>
        <AuthProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </AuthProvider>
      </ColorModeContextProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
