import React from "react";
import { useNavigate } from "react-router-dom";

import { StyledAvatar, StyledListItemAvatar } from "../../Avatar/Avatar.styled";
import { StyledDivider } from "../../Divider/Divider.styled";
import { StyledMenu, StyledMenuItem } from "../../Menu/Menu.styled";
import { StyledTypography } from "../../Typography/Typography.styled";
import { StyledTooltip } from "../../Tooltip/Tooltip.styled";
import {
  EditProfileIcon,
  LogoutIcon,
  PersonAddIcon,
  SettingsIcon,
} from "../../Icons/Icons.styled";
import { AccountSettingsBlock } from "./AccountSettings.styled";
import { StyledListItemIcon } from "../../List/List.styled";
import { StyledIconButton } from "../../Button/Button.styled";

export default function AccountSettings({ currentUser, onLogout }) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

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
    <AccountSettingsBlock>
      <StyledTypography
        sx={{
          color: "text.secondary",
          display: { xs: "none", md: "block" },
          fontWeight: 600,
        }}
        component="h5"
      >
        {currentUser.email}
      </StyledTypography>
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
        <StyledMenuItem onClick={onLogout}>
          <StyledListItemIcon>
            <LogoutIcon />
          </StyledListItemIcon>
          Logout
        </StyledMenuItem>
      </StyledMenu>
    </AccountSettingsBlock>
  );
}
