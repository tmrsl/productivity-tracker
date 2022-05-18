import styled from "styled-components";
import { AppBar, Button, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";

export const StyledNavbar = styled(AppBar).attrs({
  position: "fixed",
  sx: { zIndex: (theme) => theme.zIndex.drawer + 1 },
})``;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
`;

export const LogoBlock = styled(Box).attrs({
  sx: {
    display: {
      xs: "none",
      md: "flex",
      alignItems: "center",
      gap: "4px",
    },
  },
})``;

export const LogoXsBlock = styled(Box).attrs({
  sx: {
    display: {
      xs: "flex",
      alignItems: "center",
      gap: "4px",
      md: "none",
    },
    mr: 1,
  },
})``;

export const MenuXsBlock = styled(Box).attrs({
  sx: {
    display: { xs: "flex", md: "none" },
  },
})``;

export const PagesBlock = styled(Box).attrs({
  sx: {
    display: {
      xs: "none",
      md: "flex",
    },
    ml: 2,
  },
})``;

export const RightBlock = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  gap: 8px;
`;

export const StyledPageButton = styled(Button).attrs({
  sx: { color: "white", display: "block", fontWeight: 600 },
})``;
