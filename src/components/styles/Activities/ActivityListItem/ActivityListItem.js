import React from "react";
import { format } from "date-fns";
import { StyledListItem } from "../../List/List.styled";
import { StyledExpandMoreIcon } from "../../Icons/Icons.styled";
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledDate,
  StyledTitle,
  StyledNote,
} from "./ActivityListItem.styled";
import { StyledTypography } from "../../Typography/Typography.styled";

export default function ActivityListItem({ activity }) {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <StyledListItem>
      <StyledAccordion
        expanded={expanded === activity.title}
        onChange={handleChange(activity.title)}
      >
        <StyledAccordionSummary
          expandIcon={<StyledExpandMoreIcon />}
          aria-controls={activity.title}
          id={activity.title}
        >
          <StyledTitle>{activity.title}</StyledTitle>
          <StyledDate>
            {format(activity.selectedDateTime, "H:mm, MMMM do yyyy")}
          </StyledDate>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <StyledNote sx={{ color: "text.secondary" }}>Note:</StyledNote>
          <StyledTypography>{activity.note}</StyledTypography>
        </StyledAccordionDetails>
      </StyledAccordion>
    </StyledListItem>
  );
}
