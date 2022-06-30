import { Box, Drawer } from "@mui/material";
import styled from "styled-components";

export const StyledMainBox = styled(Box).attrs({
  sx: {
    display: "flex",
    width: "100%",
  }
})`` as typeof Box;

export const StyledMenuBox = styled(Box).attrs({
  sx: {
    display: { xs: "inline-block", md: "none" },
    position: "absolute",
  }
})`` as typeof Box;

export const StyledTitleBox = styled(Box).attrs({
  sx: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  }
})`` as typeof Box;

export const StyledOutletBox = styled(Box).attrs({
  sx: {
    scrollBehavior: "auto",
    overflow: "auto",
    padding: 2,
    height: "100%",
  }
})`` as typeof Box;

export const PermanentDrawer = styled(Drawer).attrs({
  sx: {
    width: 240,
    display: { xs: "none", md: "flex" },
    flexShrink: 0,
    ["& .MuiDrawer-paper"]: {
      width: 240,
      boxSizing: "border-box",
    },
  }
})`` as typeof Drawer;

export const TemporaryDrawer = styled(Drawer).attrs({
  sx: {
    width: 240,
    display: { xs: "flex", md: "none" },
    flexShrink: 0,
    ["& .MuiDrawer-paper"]: {
      width: 240,
      boxSizing: "border-box",
    },
  }
})`` as typeof Drawer;
