import { Avatar, Button } from "@mui/material";
import { Box } from "@mui/system";
import Key from "@mui/icons-material/Key";
import styled from "styled-components";
import { AccountCircleIcon } from "../Icons/Icons.styled";

export const TitleBlock = styled(Box).attrs({
  sx: { 
    marginTop: 2,
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

export const InputlBlock = styled(Box).attrs({
  sx: { 
    display: "flex",
    alignItems: "flex-end",
    mb: 1,
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

export const StyledKey = styled(Key).attrs({
  sx: { 
    color: "primary.main",
    mr: 1,
    my: 0.5,    
  },
})`` as typeof Box;

export const StyledAccountCircle = styled(AccountCircleIcon).attrs({
  sx: { 
    color: "primary.main",
    mr: 1,
    my: 0.5,
  },
})`` as typeof Box;

export const HelpersBlock = styled(Box).attrs({
  sx: { 
    display: "flex",
    justifyContent: "center",
  },
})`` as typeof Box;
