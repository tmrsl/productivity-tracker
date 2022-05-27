import React from "react";
import { useNavigate } from "react-router-dom";

import { StyledIconButton } from "../../../Button/Button.styled";
import {
  StyledBoardIcon,
  StyledCalendarMonthIcon,
  StyledListIcon,
  StyledViewIcon,
} from "../../../Icons/Icons.styled";
import { StyledListItemIcon } from "../../../List/List.styled";
import { StyledMenu, StyledMenuItem } from "../../../Menu/Menu.styled";
import { MobileMenuBlock } from "./MobileNavigation.styled";

export default function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MobileMenuBlock>
      <StyledIconButton
        // aria-label="account of current user"
        // aria-controls="menu-appbar"
        // aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <StyledViewIcon />
      </StyledIconButton>
      <StyledMenu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        <StyledMenuItem onClick={() => navigate("/list")}>
          <StyledListItemIcon>
            <StyledListIcon />
          </StyledListItemIcon>
          List
        </StyledMenuItem>
        <StyledMenuItem onClick={handleCloseNavMenu}>
          <StyledListItemIcon>
            <StyledBoardIcon />
          </StyledListItemIcon>
          Board
        </StyledMenuItem>
        <StyledMenuItem onClick={handleCloseNavMenu}>
          <StyledListItemIcon>
            <StyledCalendarMonthIcon />
          </StyledListItemIcon>
          Calendar
        </StyledMenuItem>
      </StyledMenu>
    </MobileMenuBlock>
  );
}
