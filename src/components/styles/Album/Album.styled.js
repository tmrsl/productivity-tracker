import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Fab,
  Grid,
} from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container).attrs({
  sx: { py: 8 },
})``;

export const StyledFab = styled(Fab).attrs({
  sx: {
    position: "absolute",
    bottom: (theme) => theme.spacing(2),
    right: (theme) => theme.spacing(2),
  },
})``;

export const StyledGridContainer = styled(Grid)``;

export const StyledGridLayout = styled(Grid).attrs({
  sx: { scrollBehavior: "smooth", overflow: "auto" },
})``;

export const StyledCard = styled(Card).attrs({
  sx: { height: "100%", display: "flex", flexDirection: "column" },
})``;

export const StyledCardMedia = styled(CardMedia)``;

export const StyledCardContent = styled(CardContent)``;
