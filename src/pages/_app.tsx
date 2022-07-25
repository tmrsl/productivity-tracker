import React from "react";

import "../firebase";
import "../index.css";

import AuthProvider from "../context/AuthContext";
import ColorModeContextProvider from "../context/ColorModeContext";

export default function App({ Component, pageProps }) {
  return (
    <ColorModeContextProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ColorModeContextProvider>
  );
}
