import React from "react";
import { useNavigate } from "react-router-dom";

import { MobileMenuBlock } from "./MobileNavigation.styled";
import { StyledIconButton } from "../../../Button/Button.styled";
import {
  StyledCalendarMonthIcon,
  StyledListIcon,
  StyledViewIcon,
  StyledChartIcon,
} from "../../../Icons/Icons.styled";
import { StyledListItemIcon } from "../../../List/List.styled";
import { StyledMenu, StyledMenuItem } from "../../../Menu/Menu.styled";

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
      <StyledIconButton onClick={handleOpenNavMenu}>
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
        onClick={handleCloseNavMenu}
      >
        <StyledMenuItem onClick={() => navigate("/list")}>
          <StyledListItemIcon>
            <StyledListIcon />
          </StyledListItemIcon>
          List
        </StyledMenuItem>
        <StyledMenuItem onClick={() => navigate("/chart")}>
          <StyledListItemIcon>
            <StyledChartIcon />
          </StyledListItemIcon>
          Charts
        </StyledMenuItem>
        <StyledMenuItem onClick={() => navigate("/calendar")}>
          <StyledListItemIcon>
            <StyledCalendarMonthIcon />
          </StyledListItemIcon>
          Calendar
        </StyledMenuItem>
      </StyledMenu>
    </MobileMenuBlock>
  );
}
