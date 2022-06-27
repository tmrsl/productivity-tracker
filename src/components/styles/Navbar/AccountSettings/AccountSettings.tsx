import React from "react";

import { useNavigate } from "react-router-dom";
import { User } from "firebase/auth";
import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import {
  AccountSettingsBlock,
  StyledAvatar,
  StyledListItemAvatar,
  StyledTypography,
} from "./AccountSettings.styled";
import { TLogOut } from "../../../../context/AuthContext";
import {
  EditProfileIcon,
  LogoutIcon,
  PersonAddIcon,
  SettingsIcon,
} from "../../Icons/Icons.styled";

interface IAccountSettingsProps {
  currentUser: User;
  onLogout: TLogOut;
}

export const AccountSettings = ({
  currentUser,
  onLogout,
}: IAccountSettingsProps) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isOpen = Boolean(anchorEl);

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
      <StyledTypography component="h5">{currentUser.email}</StyledTypography>
      <Tooltip title="Account settings">
        <IconButton onClick={onClickHandler}>
          <StyledAvatar>
            {currentUser.email.slice(0, 1).toUpperCase()}
          </StyledAvatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={isOpen}
        onClose={onCloseHandler}
        onClick={onCloseHandler}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={goToHomePageHandler}>
          <StyledListItemAvatar>
            <StyledAvatar>
              {currentUser.email.slice(0, 1).toUpperCase()}
            </StyledAvatar>
          </StyledListItemAvatar>
          My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={editProfileHandler}>
          <ListItemIcon>
            <EditProfileIcon />
          </ListItemIcon>
          Update profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={onLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AccountSettingsBlock>
  );
};
