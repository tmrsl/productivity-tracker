import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

export const StyledAccordion = styled(Accordion).attrs({
  sx: { width: "100%" },
})``;

export const StyledAccordionDetails = styled(AccordionDetails)``;

export const StyledAccordionSummary = styled(AccordionSummary)``;

export const StyledTitle = styled(Typography).attrs({
  sx: { mr: "auto" },
})``;

export const StyledDate = styled(Typography).attrs({
  sx: { color: "text.secondary", mr: 2 },
})``;

export const StyledNote = styled(Typography).attrs({
  sx: { color: "text.secondary" },
})``;
