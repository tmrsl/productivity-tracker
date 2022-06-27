import { Avatar, ListItemAvatar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";

export const AccountSettingsBlock = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  gap: 8px;
` as typeof Box;

export const StyledTypography = styled(Typography).attrs({
  sx: {
    color: "text.secondary",
    display: { xs: "none", md: "block" },
    fontWeight: 600,
  },
})``as typeof Typography;

export const StyledAvatar = styled(Avatar)``as typeof Avatar;

export const StyledListItemAvatar = styled(ListItemAvatar)``as typeof ListItemAvatar;
