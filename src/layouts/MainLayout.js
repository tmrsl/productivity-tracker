import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Drawer, Toolbar, CssBaseline, Button } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/styles/Navbar/Navbar";
import Sidebar from "../components/styles/Sidebar/Sidebar";

import { useAuth } from "../context/AuthContext";
import { useColorMode } from "../context/ColorModeContext";
import { useActivities } from "../context/UserActivitiesContext";

const drawerWidth = 240;

export default function MainLayout() {
  const { logOut, currentUser } = useAuth();
  const { activities } = useActivities();
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
          ["& .MuiDrawer-paper"]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Sidebar
          mode={mode}
          onToggle={colorModeHandler}
          activities={activities}
        />
      </Drawer>
      <Drawer
        variant="temporary"
        open={openMobileDrawer}
        onClick={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          display: { xs: "flex", md: "none" },
          flexShrink: 0,
          ["& .MuiDrawer-paper"]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Sidebar
          mode={mode}
          onToggle={colorModeHandler}
          activities={activities}
        />
      </Drawer>

      <Box
        component="main"
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <Box
          sx={{
            display: { xs: "inline-block", md: "none" },
            position: "absolute",
          }}
        >
          <Toolbar />
          <Button onClick={handleDrawerToggle}>
            Menu
            <KeyboardArrowRightIcon />
          </Button>
        </Box>
        <Toolbar />
        <Box
          sx={{
            scrollBehavior: "auto",
            overflow: "auto",
            padding: 2,
            height: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
