import React from "react";

import { StyledNavbar, StyledToolbar } from "./Navbar.styled";
import Logo from "./Logo/Logo";
import MobileLogo from "./Logo/MobileLogo/MobileLogo";
import Navigation from "./Navigation/Navigation";
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigation";
import AccountSettings from "./AccountSettings/AccountSettings";

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
