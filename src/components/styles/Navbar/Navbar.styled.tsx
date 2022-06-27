import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";

export const StyledNavbar = styled(AppBar).attrs({
  position: "fixed",
  sx: { zIndex: (theme) => theme.zIndex.drawer + 1 },
})``;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
`;
