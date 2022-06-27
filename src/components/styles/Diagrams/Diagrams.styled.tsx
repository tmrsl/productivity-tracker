import { Button, ButtonGroup } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const StyledChartBox = styled(Box).attrs({
  sx: {
    mt: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    bgcolor: "background.paper",
    gap: 4,
  },
})``as typeof Box;

export const StyledButtonBox = styled(Box).attrs({
  sx: { display: "flex", justifyContent: "center", mt: "20px" },
})`` as typeof Box;

export const StyledButtonGroup = styled(ButtonGroup).attrs({
  sx: {
    variant: "contained",
    ariaLabel: "outlined primary button group",
    color: "primary",
  },
})``as typeof ButtonGroup;

export const StyledButton = styled(Button)`` as typeof Button;
