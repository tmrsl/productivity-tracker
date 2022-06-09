import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState, useMemo, useContext } from "react";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#7a9dff",
          },
          secondary: {
            main: "#8c9ce6",
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
