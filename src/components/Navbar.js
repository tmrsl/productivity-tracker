import React from "react";
import { useAuth } from "../context/AuthContext";

import { StyledHeader } from "../components/styles/Header.styled";

import {
  StyledNavbar,
  StyledToolbar,
  RightBlock,
  LogoutIcon,
  PersonAddIcon,
  SettingsIcon,
  StyledTooltip,
  StyledMenu,
  StyledMenuItem,
  StyledListItemIcon,
  StyledAvatar,
  StyledDivider,
  StyledIconButton,
} from "./styles/Navbar.styled";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const { currentUser } = useAuth();

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const onEditProfileHandler = () => {
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
        <StyledHeader component="h6">
          <strong>Welcome to Activity Tracker</strong>
        </StyledHeader>
        <RightBlock>
          <StyledHeader component="h6">{currentUser.email}</StyledHeader>
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
            <StyledMenuItem onClick={onEditProfileHandler}>
              <StyledAvatar>
                {currentUser.email.slice(0, 1).toUpperCase()}
              </StyledAvatar>
              Update Profile
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledAvatar>
                {currentUser.email.slice(0, 1).toUpperCase()}
              </StyledAvatar>
              My account
            </StyledMenuItem>
            <StyledDivider />
            <StyledMenuItem>
              <StyledListItemIcon>
                <PersonAddIcon />
              </StyledListItemIcon>
              Add another account
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
