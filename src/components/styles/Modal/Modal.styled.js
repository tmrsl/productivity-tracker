import { Box, Modal } from "@mui/material";
import styled from "styled-components";

export const StyledModal = styled(Modal)``;

export const StyledModalBlock = styled(Box).attrs({
  sx: {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: "4px",
    transform: "translate(-50%, -50%)",
    width: {
      xs: 380,
      md: 600,
    },
    bgcolor: "background.paper",
    boxShadow: 24,
    p: {
      xs: 2,
      md: 4,
    },
  },
})``;
