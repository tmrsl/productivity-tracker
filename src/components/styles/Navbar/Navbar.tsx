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
  onLogout: TLogOut,
}

export const Navbar = ({ currentUser, onLogout }: INavbarProps) => {
  return (
    <StyledNavbar>
      <StyledToolbar>
        <Logo />
        <MobileNavigation />
        <MobileLogo />
        <Navigation />
        <AccountSettings onLogout={onLogout} currentUser={currentUser} />
      </StyledToolbar>
    </StyledNavbar>
  );
};
