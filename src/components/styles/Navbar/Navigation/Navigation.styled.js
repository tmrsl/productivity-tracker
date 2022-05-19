import styled from "styled-components";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export const MenuBlock = styled(Box).attrs({
  sx: {
    display: {
      xs: "none",
      md: "flex",
      gap: 8,
    },
    ml: 8,
  },
})``;

export const StyledPageButton = styled(Button).attrs({
  sx: { color: "white", display: "flex", fontWeight: 600 },
})``;
