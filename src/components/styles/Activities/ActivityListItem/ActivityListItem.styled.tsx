import { Box, Tooltip } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import styled from "styled-components";

export const StyledAccordion = styled(Accordion).attrs({
  sx: { width: "100%" },
})`` as typeof Accordion;

export const StyledAccordionSummary = styled(AccordionSummary)`` as typeof AccordionSummary;

export const StyledAccordionDetails = styled(AccordionDetails).attrs({
  sx: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifuContent: "center",
    gap: { xs: "6px", md: "none" },
  },
})`` as typeof AccordionDetails;

export const StyledTitle = styled(Box).attrs({
  sx: {
    mr: "auto",
    display: "flex",
    justifuContent: "center",
    alignItems: "center",
  },
})`` as typeof Box;

export const StyledDateBox = styled(Box).attrs({
  sx: {
    display: "flex",
    justifuContent: "center",
    alignItems: "center",
  },
})`` as typeof Box;

export const StyledNoteBox = styled(Box).attrs({
  sx: {
    mr: "auto",
    display: "flex",
    justifuContent: "center",
    alignItems: "center",
  },
})`` as typeof Box;

export const StyledDateStart = styled(Box).attrs({
  sx: { color: "text.secondary", mr: 2 },
})`` as typeof Box;

export const StyledDateEnd = styled(Box).attrs({
  sx: { color: "text.secondary", mr: 2 },
})`` as typeof Box;

export const StyledNote = styled(Box).attrs({
  sx: { color: "text.secondary" },
})`` as typeof Box;

export const StyledTooltip = styled(Tooltip).attrs({
  sx: { ml: { xs: "4px", md: "8px" } },
})`` as typeof Tooltip;
