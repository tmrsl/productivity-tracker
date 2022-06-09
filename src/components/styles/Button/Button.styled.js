import { Button, ButtonGroup, IconButton } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button).attrs({
  variant: "contained",
})``;

export const StyledIconButton = styled(IconButton)``;

export const StyledButtonGroup = styled(ButtonGroup).attrs({
  sx: {
    variant: "contained",
    ariaLabel: "outlined primary button group",
    color: "primary",
  },
})``;
