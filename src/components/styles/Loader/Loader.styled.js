import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledLoaderBox = styled(Box).attrs({
  sx: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#7a9dff",
    // eslint-disable-next-line no-dupe-keys
    background:
      "radial-gradient(circle, rgba(225,228,240,1) 0%, rgba(190,188,233,1) 100%)",
  },
})``;
