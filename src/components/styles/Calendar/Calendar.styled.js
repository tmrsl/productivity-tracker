import { Box, Paper } from "@mui/material";
import styled from "styled-components";

export const StyledCalendarBox = styled(Box).attrs({
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
})``;

export const StyledPaper = styled(Paper)``;
