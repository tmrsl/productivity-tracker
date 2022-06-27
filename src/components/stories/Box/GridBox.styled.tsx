import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledGridBox = styled(Box).attrs({
  sx: {
    display: "grid", alignItems: "center", gap: "20px", gridTemplateColumns: "repeat(3, 1fr)"
  },
})`` as typeof Box;
