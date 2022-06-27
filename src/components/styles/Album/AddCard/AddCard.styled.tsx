import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledMainBlock = styled(Container)`` as typeof Container;

export const StyledTitleBlock = styled(Box).attrs({
  sx: {
    marginTop: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})`` as typeof Box;

export const StyledFormBlock = styled(Container)`` as typeof Container;

export const StyledButton = styled(Button).attrs({
  sx: {
    mb: 2
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

