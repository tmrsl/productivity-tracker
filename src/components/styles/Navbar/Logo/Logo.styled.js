import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styled from "styled-components";

export const LogoBlock = styled(Box).attrs({
  sx: {
    display: {
      xs: "none",
      md: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "4px",
    },
  },
})``;

export const StyledTypography = styled(Typography).attrs({
  sx: {
    fontWeight: 500,
    color: "text.secondary",
    textDecoration: "none",
  },
})``;
