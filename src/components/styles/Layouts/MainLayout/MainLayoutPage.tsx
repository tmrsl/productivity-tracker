import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { User } from "firebase/auth";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Toolbar, CssBaseline, Button } from "@mui/material";
import {
  PermanentDrawer,
  StyledMainBox,
  StyledMenuBox,
  StyledOutletBox,
  TemporaryDrawer,
} from "./MainLayout.styled";
import { Navbar } from "../../Navbar/Navbar";
import { SideBar } from "../../Sidebar/Sidebar";
import { TLogOut } from "../../../../context/AuthContext";
import { IActivityItem } from "../../../../context/UserActivitiesContext";

interface IMainLayoutProps {
  logOut: TLogOut,
  currentUser: User,
  activities: IActivityItem[],
  toggleColorMode: () => void,
  mode: string,
}

export const MainLayoutPage = ({
  logOut,
  currentUser,
  activities,
  toggleColorMode,
  mode,
}: IMainLayoutProps) => {
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

      <StyledMenuBox component="main">
        <StyledMenuBox>
          <Toolbar />
          <Button onClick={handleDrawerToggle}>
            Menu
            <KeyboardArrowRightIcon />
          </Button>
        </StyledMenuBox>
        <Toolbar />
        <StyledOutletBox>
          <Outlet />
        </StyledOutletBox>
      </StyledMenuBox>
    </StyledMainBox>
  );
};
