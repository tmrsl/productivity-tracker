import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Fab, Tooltip } from "@mui/material";
import { FeedBox } from "./Feed.styled";
import { AddActivity } from "../../../views/AddActivity";
import { ActivitiesList } from "../Activities/ActivitiesList/ActivitiesList";
import { StyledModal, StyledModalBlock } from "../Modal/Modal.styled";
import { IActivityItem, TDeleteActivity } from "../../../context/UserActivitiesContext";

interface IFeedProps {
  activities: IActivityItem[],
  deleteActivity: TDeleteActivity
}

export const Feed = ({ activities, deleteActivity }: IFeedProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <FeedBox component="main">
      <ActivitiesList activities={activities} deleteActivity={deleteActivity} />

      <Tooltip title="Add new activity" onClick={handleOpen}>
        <Fab
          sx={{
            position: "absolute",
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(2),
          }}
          size="large"
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal open={isOpen} onClose={handleClose}>
        <StyledModalBlock>
          <AddActivity onClose={() => setIsOpen(false)} />
        </StyledModalBlock>
      </StyledModal>
    </FeedBox>
  );
};
