import styled from "styled-components";
import { ListItemIcon } from "@mui/material";
import { Box } from "@mui/system";
import { Badge } from "@mui/material";
import SidebarListItem from "./SidebarListItem/SidebarListItem";

export const SidebarBlock = styled(Box).attrs({
  sx: { overflow: "auto" },
})``;

export const StyledListItemIcon = styled(ListItemIcon)``;

export const StyledSidebarListItem = styled(SidebarListItem)``;

export const StyledBadge = styled(Badge)``;
