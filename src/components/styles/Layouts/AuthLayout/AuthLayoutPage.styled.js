import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledMainBox = styled(Box).attrs({
  sx: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    padding: "0 40px",
    background: "rgb(225,228,240)",
    // eslint-disable-next-line no-dupe-keys
    background:
      "radial-gradient(circle, rgba(225,228,240,1) 0%, rgba(190,188,233,1) 100%)",
  },
})``;

export const StyledContentBox = styled(Box).attrs({
  sx: {
    height: "100%",
    maxWidth: "1200px",
    width: "100%",
    display: "grid",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: "none", md: "40px" },
    gridTemplateColumns: {
      xs: "1fr",
      md: "1fr 1fr",
    },
  },
})``;

export const StyledOutletBox = styled(Box).attrs({
  sx: {
    display: "flex",
    alignItems: "center",
  },
})``;

export const StyledImgBox = styled(Box).attrs({
  sx: {
    maxWidth: {
      xs: "300px",
      md: "520px",
    },
    margin: "0 auto",
  },
})``;
