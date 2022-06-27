import { Avatar, ListItemAvatar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";

export const AccountSettingsBlock = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  gap: 8px;
`;

export const StyledTypography = styled(Typography).attrs({
  sx: {
    color: "text.secondary",
    display: { xs: "none", md: "block" },
    fontWeight: 600,
  },
})``;

export const StyledAvatar = styled(Avatar)``;

export const StyledListItemAvatar = styled(ListItemAvatar)``;
