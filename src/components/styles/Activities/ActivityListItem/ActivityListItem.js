import React from "react";
import { format } from "date-fns";
import { StyledListItem } from "../../List/List.styled";
import { StyledExpandMoreIcon } from "../../Icons/Icons.styled";
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledDateStart,
  StyledDateEnd,
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
        expanded={expanded === activity.id}
        onChange={handleChange(activity.id)}
      >
        <StyledAccordionSummary
          expandIcon={<StyledExpandMoreIcon />}
          aria-controls={activity.id}
          id={activity.id}
        >
          <StyledTitle>{activity.title}</StyledTitle>
          <StyledDateStart>
            from
            {format(activity.startDate, "H:mm, MMMM do yyyy")}
          </StyledDateStart>
          <StyledDateEnd>
            to
            {format(activity.endDate, "H:mm, MMMM do yyyy")}
          </StyledDateEnd>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <StyledNote sx={{ color: "text.secondary" }}>Note:</StyledNote>
          <StyledTypography>{activity.notes}</StyledTypography>
        </StyledAccordionDetails>
      </StyledAccordion>
    </StyledListItem>
  );
}
