import { AccountCircle } from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const TitleBox = styled(Box).attrs({
  sx: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})``as typeof Box;

export const StyledAvatar = styled(Avatar).attrs({
  sx: {
    m: 1,
    bgcolor: "primary.main",
  },
})``as typeof Avatar;

export const StyledTitle = styled(Typography).attrs({
  sx: {
    mb: 3,
  },
})``as typeof Typography;

export const FormBlock = styled(Box).attrs({
  sx: { 
    mt: 3,
  },
})`` as typeof Box;

export const EmailBlock = styled(Box).attrs({
  sx: { 
    display: "flex",
    alignItems: "flex-end",
    mb: 1,
  },
})`` as typeof Box;

export const StyledButton = styled(Button).attrs({
  sx: { 
    mt: 3,
    mb: 2,
  },
})`` as typeof Button;

export const HelpersBlock = styled(Box).attrs({
  sx: { 
    display: "flex",
    justifyContent: "space-between",
  },
})`` as typeof Box;

export const StyledAccountCircle = styled(AccountCircle).attrs({
  sx: { 
    color: "primary.main",
    mr: 1,
    my: 0.5,
  },
})`` as typeof Box;

