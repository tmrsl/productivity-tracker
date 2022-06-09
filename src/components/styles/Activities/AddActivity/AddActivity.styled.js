import { Box, Container } from "@mui/material";
import styled from "styled-components";

export const StyledMainBlock = styled(Container)``;

export const StyledTitleBlock = styled(Box).attrs({
  sx: {
    marginTop: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})``;

export const StyledDateBlock = styled(Box).attrs({
  sx: {
    display: "flex",
    gap: 1,
  },
})``;

export const StyledFormBlock = styled(Box)``;
