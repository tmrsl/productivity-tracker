import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";

export const MenuBlock = styled(Box).attrs({
  sx: {
    display: {
      gap: 8,
      md: "flex",
      xs: "none",
    },
    ml: 8,
  },
})`` as typeof Box;

export const StyledPageButton = styled(Button).attrs({
  sx: { color: "white", display: "flex", fontWeight: 600 },
})`` as typeof Button;
