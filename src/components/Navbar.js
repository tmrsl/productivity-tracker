import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { StyledTooltip } from "./styles/UI/Tooltip.styled";
import { StyledAvatar, StyledListItemAvatar } from "./styles/UI/Avatar.styled";
import { StyledMenu, StyledMenuItem } from "./styles/UI/Menu.styled";
import { StyledDivider } from "./styles/UI/Divider.styled";
import { StyledHeader } from "./styles/UI/Header.styled";
import {
  StyledIconButton,
  StyledListItemIcon,
  LogoutIcon,
  EditProfileIcon,
  PersonAddIcon,
  SettingsIcon,
  LogoIcon,
  StyledMenuIcon,
} from "./styles/UI/Icons.styled";

import {
  StyledNavbar,
  StyledToolbar,
  RightBlock,
  LogoBlock,
  PagesBlock,
  StyledPageButton,
  MenuXsBlock,
  LogoXsBlock,
} from "./styles/Navbar.styled";

const pages = ["List", "Board", "Calendar"];

export default function Navbar(props) {
  const { currentUser } = useAuth();

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const goToHomePageHandler = () => {
    navigate("/");
  };

  const editProfileHandler = () => {
    navigate("/update-profile");
  };

  const onClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseHandler = () => {
    setAnchorEl(null);
  };

  return (
    <StyledNavbar>
      <StyledToolbar>
        <LogoBlock>
          <LogoIcon />
          <StyledHeader
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Productivity Tracker
          </StyledHeader>
        </LogoBlock>

        <MenuXsBlock>
          <StyledIconButton
            // aria-label="account of current user"
            // aria-controls="menu-appbar"
            // aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <StyledMenuIcon />
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
            {pages.map((page) => (
              <StyledMenuItem key={page} onClick={handleCloseNavMenu}>
                <StyledHeader textAlign="center">{page}</StyledHeader>
              </StyledMenuItem>
            ))}
          </StyledMenu>
        </MenuXsBlock>

        <LogoXsBlock>
          <StyledHeader
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              fontWeight: 600,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <StyledIconButton color="inherit">
              <LogoIcon />
            </StyledIconButton>
          </StyledHeader>
        </LogoXsBlock>

        <PagesBlock>
          {pages.map((page) => (
            <StyledPageButton key={page} onClick={handleCloseNavMenu}>
              {page}
            </StyledPageButton>
          ))}
        </PagesBlock>

        <RightBlock>
          <StyledHeader
            sx={{ display: { xs: "none", md: "block" }, fontWeight: 600 }}
            component="h5"
          >
            {currentUser.email}
          </StyledHeader>
          <StyledTooltip title="Account settings">
            <StyledIconButton onClick={onClickHandler}>
              <StyledAvatar>
                {currentUser.email.slice(0, 1).toUpperCase()}
              </StyledAvatar>
            </StyledIconButton>
          </StyledTooltip>
          <StyledMenu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={onCloseHandler}
            onClick={onCloseHandler}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <StyledMenuItem onClick={goToHomePageHandler}>
              <StyledListItemAvatar>
                <StyledAvatar>
                  {currentUser.email.slice(0, 1).toUpperCase()}
                </StyledAvatar>
              </StyledListItemAvatar>
              My account
            </StyledMenuItem>
            <StyledDivider />
            <StyledMenuItem>
              <StyledListItemIcon>
                <PersonAddIcon />
              </StyledListItemIcon>
              Add another account
            </StyledMenuItem>
            <StyledMenuItem onClick={editProfileHandler}>
              <StyledListItemIcon>
                <EditProfileIcon />
              </StyledListItemIcon>
              Update profile
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledListItemIcon>
                <SettingsIcon />
              </StyledListItemIcon>
              Settings
            </StyledMenuItem>
            <StyledMenuItem onClick={props.onLogout}>
              <StyledListItemIcon>
                <LogoutIcon />
              </StyledListItemIcon>
              Logout
            </StyledMenuItem>
          </StyledMenu>
        </RightBlock>
      </StyledToolbar>
    </StyledNavbar>
  );
}
