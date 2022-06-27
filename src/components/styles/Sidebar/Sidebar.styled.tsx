import { List } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const SidebarBlock = styled(Box).attrs({
  sx: { overflow: "auto" },
})`` as typeof Box;

export const SidebarList = styled(List).attrs({
  sx: {
    width: "100%",
    maxWidth: 360, bgcolor:
    "background.paper"
  },
})`` as typeof List;
