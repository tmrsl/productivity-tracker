import React from "react";

import { User } from "firebase/auth";
import { AccountSettings } from "./AccountSettings/AccountSettings";
import { Logo } from "./Logo/Logo";
import { MobileLogo } from "./Logo/MobileLogo/MobileLogo";
import { StyledNavbar, StyledToolbar } from "./Navbar.styled";
import { MobileNavigation } from "./Navigation/MobileNavigation/MobileNavigation";
import { Navigation } from "./Navigation/Navigation";
import { TLogOut } from "../../../context/AuthContext";

interface INavbarProps {
  currentUser: User,
  logOut: TLogOut,
}

export const Navbar = ({ currentUser, logOut }: INavbarProps) => {
  return (
    <StyledNavbar>
      <StyledToolbar>
        <Logo />
        <MobileNavigation />
        <MobileLogo />
        <Navigation />
        <AccountSettings onLogout={logOut} currentUser={currentUser} />
      </StyledToolbar>
    </StyledNavbar>
  );
};
