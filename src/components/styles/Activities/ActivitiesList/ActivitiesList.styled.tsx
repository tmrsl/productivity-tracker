import { Box, List, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledListBox = styled(Box).attrs({
  sx: {
    mt: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    bgcolor: "background.paper",
  },
})`` as typeof Box;

export const StyledTitle = styled(Typography).attrs({
  sx: {
    fontWeight: 500,
    textDecoration: "none",
    textAlign: "center",
    color: "text.secondary",
  },
})``as typeof Typography;

export const StyledActivitiesList = styled(List).attrs({
  sx: {
    mt: 2,
    display: "flex",
    flexDirection: "column",
    bgcolor: "background.paper",
    maxWidth: "800px",
    width: "100%",
    justifySelf: "center",
  },
})``as typeof List;

export const StyledTitleBox = styled(Box).attrs({
  sx: {
    display: "flex",
    flexDirection: "column",
  },
})``as typeof Box;
