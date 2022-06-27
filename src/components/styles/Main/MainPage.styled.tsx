import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledMainPageBox = styled(Box).attrs({
  sx: {
    display: "flex",
        margin: "0 auto",
        gap: 2,
        justifyContent: "center",
        flexDirection: "column",
  },
})``as typeof Box;

export const StyledFlexBox = styled(Box).attrs({
  sx: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
  },
})`` as typeof Box;

export const StyledTitle = styled(Typography).attrs({
  sx: {
    fontWeight: 500,
    color: "inherit",
    textDecoration: "none",
  },
})`` as typeof Typography;

export const StyledButton = styled(Button).attrs({
  sx: {
    width: { xs: "300px" },
    mb: { md: " 120px" }
  },
})`` as typeof Button;
