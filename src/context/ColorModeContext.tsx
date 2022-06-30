import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState, useMemo, useContext } from "react";

interface IColorModeContext {
  toggleColorMode: () => void,
  mode: string,
}

interface IColorModeProviderProps {
  children: React.ReactNode,
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: "light",
});

export const ColorModeContextProvider = ({ children }: IColorModeProviderProps) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          // @ts-ignore
          mode,
          primary: {
            main: "#7a9dff",
          },
          secondary: {
            main: "#8c9ce6",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
