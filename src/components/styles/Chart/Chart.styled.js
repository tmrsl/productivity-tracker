import styled from "styled-components";
import { Box } from "@mui/system";

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
})``;

export const StyledButtonBox = styled(Box).attrs({
  sx: { display: "flex", justifyContent: "center", mt: "20px" },
})``;
