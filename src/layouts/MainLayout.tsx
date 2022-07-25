import React, { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Toolbar, CssBaseline, Button, Box } from "@mui/material";
import {
  PermanentDrawer,
  StyledMainBox,
  StyledMenuBox,
  StyledOutletBox,
  TemporaryDrawer,
} from "./MainLayout.styled";
import { SideBar } from "../components/styles/Sidebar/Sidebar";
import { useAuth } from "../context/AuthContext";
import { useActivities } from "../context/UserActivitiesContext";
import { useColorMode } from "../context/ColorModeContext";
import { Navbar } from "../components/styles/Navbar/Navbar";

const MainLayout = (props) => {

  const { logOut, currentUser } = useAuth();
  const { activities } = useActivities();
  const { toggleColorMode, mode } = useColorMode();


  const [openMobileDrawer, setOpenMobileDraver] = useState(false);

  const handleDrawerToggle = () => {
    setOpenMobileDraver(!openMobileDrawer);
  };

  return (
    <StyledMainBox>
      <CssBaseline />
      <Navbar currentUser={currentUser} logOut={logOut}></Navbar>

      <PermanentDrawer variant="permanent">
        <Toolbar />
        <SideBar
          mode={mode}
          toggleColorMode={toggleColorMode}
          activities={activities}
        />
      </PermanentDrawer>
      <TemporaryDrawer
        variant="temporary"
        open={openMobileDrawer}
        onClick={handleDrawerToggle}
      >
        <Toolbar />
        <SideBar
          mode={mode}
          toggleColorMode={toggleColorMode}
          activities={activities}
        />
      </TemporaryDrawer>

      <Box sx={{ width: "100%" }} component="main">
        <StyledMenuBox>
          <Toolbar />
          <Button onClick={handleDrawerToggle}>
            Menu
            <KeyboardArrowRightIcon />
          </Button>
        </StyledMenuBox>
        <Toolbar />
        <StyledOutletBox>
          {props.children}
        </StyledOutletBox>
      </Box>
    </StyledMainBox>
  );
};

export default MainLayout;
