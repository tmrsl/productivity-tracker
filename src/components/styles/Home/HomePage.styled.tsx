import { Fab, Box } from "@mui/material";
import styled from "styled-components";

export const StyledHomeBox = styled(Box).attrs({
  sx: { height: "100%", display: "flex", flexDirection: "column" },
})``;

export const StyledFab = styled(Fab).attrs({
  sx: {
    position: "absolute",
    bottom: (theme) => theme.spacing(2),
    right: (theme) => theme.spacing(2),
  },
})``;
