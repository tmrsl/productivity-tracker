import styled from "styled-components";
import {
  AppBar,
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
} from "@mui/material";
import Box from "@mui/material/Box";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
// import EditIcon from "@mui/icons-material/Edit";

export const StyledNavbar = styled(AppBar).attrs({
  position: "fixed",
  sx: { zIndex: (theme) => theme.zIndex.drawer + 1 },
})``;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightBlock = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const StyledTooltip = styled(Tooltip)``;
export const StyledDivider = styled(Divider)``;
export const StyledIconButton = styled(IconButton)``;

export const StyledMenu = styled(Menu)``;
export const StyledMenuItem = styled(MenuItem)``;
export const StyledListItemIcon = styled(ListItemIcon)``;

export const StyledAvatar = styled(Avatar).attrs({
  sx: { width: 32, height: 32, ml: -0.5, mr: 1 },
})``;

// export const ProfileIcon = styled(AccountCircle).attrs({
//   color: "info",
// })``;

// export const EditProfileIcon = styled(EditIcon).attrs({
//   color: "info",
// })``;

export const LogoutIcon = styled(Logout)``;

export const PersonAddIcon = styled(PersonAdd)``;

export const SettingsIcon = styled(Settings)``;
