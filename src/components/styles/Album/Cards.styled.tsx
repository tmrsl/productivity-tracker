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
})`` as typeof Container;

export const StyledFab = styled(Fab).attrs({
  sx: {
    position: "absolute",
    bottom: (theme) => theme.spacing(2),
    right: (theme) => theme.spacing(2),
  },
})`` as typeof Fab;

export const StyledGridContainer = styled(Grid)`` as typeof Grid;

export const StyledGridLayout = styled(Grid).attrs({
  sx: { scrollBehavior: "smooth", overflow: "auto" },
})`` as typeof Grid;

export const StyledCard = styled(Card).attrs({
  sx: { height: "100%", display: "flex", flexDirection: "column" },
})`` as typeof Card;

export const StyledCardMedia = styled(CardMedia)`` as typeof CardMedia;

export const StyledCardContent = styled(CardContent).attrs({
  sx: { flexGrow: 1 },
})`` as typeof CardContent;
