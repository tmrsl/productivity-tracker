import React from "react";

import AccountSettings from "./AccountSettings/AccountSettings";
import Logo from "./Logo/Logo";
import MobileLogo from "./Logo/MobileLogo/MobileLogo";
import { StyledNavbar, StyledToolbar } from "./Navbar.styled";
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigation";
import Navigation from "./Navigation/Navigation";

export default function Navbar({ currentUser, onLogout }) {
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
}
