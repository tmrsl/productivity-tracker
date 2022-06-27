import { Avatar, Button } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const TitleBlock = styled(Box).attrs({
  sx: { 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",          
  },
})`` as typeof Box;

export const FormBlock = styled(Box).attrs({
  sx: { 
    mt: 3,
  },
})`` as typeof Box;

export const StyledAvatar = styled(Avatar).attrs({
  sx: { 
    m: 1,
    bgcolor: "primary.main"         
  },
})`` as typeof Box;

export const StyledButton = styled(Button).attrs({
  sx: {
    mt: 3,
    mb: 2,
  }
})`` as typeof Button;
