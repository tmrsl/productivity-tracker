import React from "react";
import { useNavigate } from "react-router-dom";

import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import { MobileMenuBlock } from "./MobileNavigation.styled";
import { StyledIconButton } from "../../../Button/Button.styled";
import {
  StyledCalendarMonthIcon,
  StyledListIcon,
  StyledViewIcon,
  StyledChartIcon,
} from "../../../Icons/Icons.styled";

export const MobileNavigation = () => {
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
      <Menu
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
        <MenuItem onClick={() => navigate("/list")}>
          <ListItemIcon>
            <StyledListIcon />
          </ListItemIcon>
          List
        </MenuItem>
        <MenuItem onClick={() => navigate("/chart")}>
          <ListItemIcon>
            <StyledChartIcon />
          </ListItemIcon>
          Charts
        </MenuItem>
        <MenuItem onClick={() => navigate("/calendar")}>
          <ListItemIcon>
            <StyledCalendarMonthIcon />
          </ListItemIcon>
          Calendar
        </MenuItem>
      </Menu>
    </MobileMenuBlock>
  );
};
