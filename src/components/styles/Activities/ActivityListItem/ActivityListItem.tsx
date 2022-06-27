import React, { useState } from "react";
import { format } from "date-fns";

import { Divider, IconButton, ListItem, ListItemIcon, Typography } from "@mui/material";
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
  StyledTooltip,
} from "./ActivityListItem.styled";
import { IActivityItem, TDeleteActivity } from "../../../../context/UserActivitiesContext";
import {
  StyledExpandMoreIcon,
  StyledAssignmentIcon,
  StyledScheduleIcon,
  StyledNoteIcon,
  StyledCancelIcon,
} from "../../Icons/Icons.styled";
import { DeleteActivityModal } from "../DeleteActivityModal/DeleteActivityModal";

interface IActivityListItemProps {
  activity: IActivityItem,
  deleteActivity: TDeleteActivity,
}

export const  ActivityListItem = ({ activity, deleteActivity }: IActivityListItemProps) => {
  const [activeItem, setActiveItem] = useState<null | string>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true); 
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setActiveItem(isExpanded ? panel : null);
  };

  return (
    <ListItem>
      <StyledAccordion
        expanded={activeItem === activity.id}
        onChange={handleChange(activity.id)}
      >
        <StyledAccordionSummary
          expandIcon={<StyledExpandMoreIcon />}
          aria-controls={activity.id}
          id={activity.id}
        >
          <StyledTitle>
            <ListItemIcon>
              <StyledAssignmentIcon />
            </ListItemIcon>
            {activity.title}
          </StyledTitle>
        </StyledAccordionSummary>

        <Divider variant="inset" />

        <StyledAccordionDetails>
          <StyledNoteBox>
            <ListItemIcon>
              <StyledNoteIcon />
            </ListItemIcon>

            <StyledNote>
              {"Note:"}
              <Typography color="text.secondary" variant="body2">
                {activity.notes}
              </Typography>
            </StyledNote>
          </StyledNoteBox>

          <StyledDateBox>
            <ListItemIcon>
              <StyledScheduleIcon />
            </ListItemIcon>

            <StyledDateStart>
              <Typography variant="body2">{"Start:"}</Typography>
              <Typography>
                {format(activity.startDate, "H:mm, MMM d")}
              </Typography>
            </StyledDateStart>

            <StyledDateEnd>
              <Typography variant="body2">{"End:"}</Typography>
              <Typography>
                {format(activity.endDate, "H:mm, MMM d")}
              </Typography>
            </StyledDateEnd>
          </StyledDateBox>
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledTooltip title="Delete">
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={handleClickOpen}
        >
          <StyledCancelIcon />
        </IconButton>
      </StyledTooltip>

      <DeleteActivityModal
        activity={activity}
        deleteActivity={deleteActivity}
        isOpen={isOpen}
        handleClose={handleClose}
      />
    </ListItem>
  );
};
