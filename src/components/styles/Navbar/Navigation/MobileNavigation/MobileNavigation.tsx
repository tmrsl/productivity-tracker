import React, { useState } from "react";
import { useRouter } from "next/router";

import { IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { MobileMenuBlock } from "./MobileNavigation.styled";
import {
  StyledCalendarMonthIcon,
  StyledListIcon,
  StyledViewIcon,
  StyledChartIcon,
} from "../../../Icons/Icons.styled";

export const MobileNavigation = () => {
  const [anchorElNav, setAnchorElNav] = useState<null>(null);
  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MobileMenuBlock>
      <IconButton onClick={handleOpenNavMenu}>
        <StyledViewIcon />
      </IconButton>
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
        <MenuItem onClick={() => router.push("/list")}>
          <ListItemIcon>
            <StyledListIcon />
          </ListItemIcon>
          List
        </MenuItem>
        <MenuItem onClick={() => router.push("/chart")}>
          <ListItemIcon>
            <StyledChartIcon />
          </ListItemIcon>
          Charts
        </MenuItem>
        <MenuItem onClick={() => router.push("/scheduler")}>
          <ListItemIcon>
            <StyledCalendarMonthIcon />
          </ListItemIcon>
          Calendar
        </MenuItem>
      </Menu>
    </MobileMenuBlock>
  );
};
