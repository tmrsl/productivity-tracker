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

// export const StyledPageButton = styled(Button).attrs({
//   sx: { color: "white", display: "flex", fontWeight: 600 },
// })``;
