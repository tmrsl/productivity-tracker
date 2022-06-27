import { Avatar, Box, Button, Container, Typography } from "@mui/material";
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

export const StyledButton = styled(Button).attrs({
  sx: {
    mt: 3,
    mb: 2,
  },
})``;

export const StyledAvatar = styled(Avatar).attrs({
  sx: {
    mb: 1,
    bgcolor: "primary.main",
  },
})``;

export const StyledTypography = styled(Typography).attrs({
  sx: {
    mb: 3,
  },
})``;

