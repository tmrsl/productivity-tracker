import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const EmptyActivitiesListBox = styled(Box).attrs({
  sx: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
})`` as typeof Box;

export const StyledTypography = styled(Typography).attrs({
  sx: {
    fontWeight: 500,
    color: "text.secondary",
    textDecoration: "none",
    textAlign: "center",
  },
})`` as typeof Typography;
