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