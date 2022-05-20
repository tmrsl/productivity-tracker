import { Outlet } from "react-router-dom";
import { Box, Drawer, Toolbar, CssBaseline, Button } from "@mui/material";
import Navbar from "../components/styles/Navbar/Navbar";
import Sidebar from "../components/styles/Sidebar/Sidebar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function MainLayout() {
  const drawerWidth = 240;
  const { logOut, currentUser } = useAuth();

  const [openMobileDrawer, setOpenMobileDraver] = useState(false);

  const logOutHandler = () => {
    logOut();
  };

  const handleDrawerToggle = () => {
    setOpenMobileDraver(!openMobileDrawer);
  };

  return (
    <Box sx={{ display: "flex" }}>
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
        <Sidebar />
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
        <Sidebar />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
          <Toolbar />
          <Button onClick={handleDrawerToggle}>
            <KeyboardArrowRightIcon />
          </Button>
        </Box>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
