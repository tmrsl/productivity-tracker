import styled from "styled-components";
import { Button } from "@mui/material";

export const StyledButton = styled(Button).attrs({
  variant: "contained",
})``;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})``;
