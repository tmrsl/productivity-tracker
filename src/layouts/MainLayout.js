import { Outlet } from "react-router-dom";
import { Box, Drawer, Toolbar, CssBaseline, Button } from "@mui/material";
import Navbar from "../components/styles/Navbar/Navbar";
import Sidebar from "../components/styles/Sidebar/Sidebar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { useAuth } from "../context/AuthContext";
import { useColorMode } from "../context/ColorModeContext";
import { useState } from "react";

const drawerWidth = 240;

export default function MainLayout() {
  const { logOut, currentUser } = useAuth();
  const { toggleColorMode, mode } = useColorMode();

  const [openMobileDrawer, setOpenMobileDraver] = useState(false);

  const logOutHandler = () => {
    logOut();
  };

  const handleDrawerToggle = () => {
    setOpenMobileDraver(!openMobileDrawer);
  };

  const colorModeHandler = () => {
    toggleColorMode();
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <Navbar currentUser={currentUser} onLogout={logOutHandler}></Navbar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          display: { xs: "none", md: "flex" },
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Sidebar mode={mode} onToggle={colorModeHandler} />
      </Drawer>
      <Drawer
        variant="temporary"
        open={openMobileDrawer}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          display: { xs: "flex", md: "none" },
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Sidebar mode={mode} onToggle={colorModeHandler} />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
          <Toolbar />
          <Button onClick={handleDrawerToggle}>
            Menu
            <KeyboardArrowRightIcon />
          </Button>
        </Box>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
