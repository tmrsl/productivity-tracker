import React from "react";
import DeleteActivityModal from "../DeleteActivityModal/DeleteActivityModal";

import { format } from "date-fns";

import { StyledListItem, StyledListItemIcon } from "../../List/List.styled";
import {
  StyledExpandMoreIcon,
  StyledAssignmentIcon,
  StyledScheduleIcon,
  StyledNoteIcon,
  StyledCancelIcon,
} from "../../Icons/Icons.styled";
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledDateBox,
  StyledDateStart,
  StyledDateEnd,
  StyledTitle,
  StyledNote,
  StyledNoteBox,
} from "./ActivityListItem.styled";
import { StyledTypography } from "../../Typography/Typography.styled";
import { StyledDivider } from "../../Divider/Divider.styled";
import { StyledTooltip } from "../../Tooltip/Tooltip.styled";
import { StyledIconButton } from "../../Button/Button.styled";

export default function ActivityListItem({ activity }) {
  const [expanded, setExpanded] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <StyledTitle>
            <StyledListItemIcon>
              <StyledAssignmentIcon />
            </StyledListItemIcon>
            {activity.title}
          </StyledTitle>
        </StyledAccordionSummary>

        <StyledDivider variant="inset" />

        <StyledAccordionDetails>
          <StyledNoteBox>
            <StyledListItemIcon>
              <StyledNoteIcon />
            </StyledListItemIcon>

            <StyledNote>
              {"Note:"}
              <StyledTypography color="text.secondary" variant="body2">
                {activity.notes}
              </StyledTypography>
            </StyledNote>
          </StyledNoteBox>

          <StyledDateBox>
            <StyledListItemIcon>
              <StyledScheduleIcon />
            </StyledListItemIcon>

            <StyledDateStart>
              <StyledTypography variant="body2">{"Start:"}</StyledTypography>
              <StyledTypography>
                {format(activity.startDate, "H:mm, MMM d")}
              </StyledTypography>
            </StyledDateStart>

            <StyledDateEnd>
              <StyledTypography variant="body2">{"End:"}</StyledTypography>
              <StyledTypography>
                {format(activity.endDate, "H:mm, MMM d")}
              </StyledTypography>
            </StyledDateEnd>
          </StyledDateBox>
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledTooltip title="Delete" sx={{ ml: { xs: "4px", md: "8px" } }}>
        <StyledIconButton
          edge="end"
          aria-label="delete"
          onClick={handleClickOpen}
        >
          <StyledCancelIcon />
        </StyledIconButton>
      </StyledTooltip>

      <DeleteActivityModal
        activity={activity}
        open={open}
        handleClose={handleClose}
      />
    </StyledListItem>
  );
}
