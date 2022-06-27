import React from "react";

import {
  StyledModal,
  StyledModalActions,
  StyledModalTitle,
  StyledModalButton,
} from "./DeleteActivityModal.styled";
import { IActivityItem, TDeleteActivity } from "../../../../context/UserActivitiesContext";

interface IDeleteActivityModalProps {
  activity: IActivityItem,
  deleteActivity: TDeleteActivity,
  handleClose: () => void,
  isOpen: boolean,
}

export const DeleteActivityModal = ({
  handleClose,
  isOpen,
  activity,
  deleteActivity,
}: IDeleteActivityModalProps) => {
  return (
    <StyledModal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
      <StyledModalTitle id="alert-dialog-title">
        {"Are you sure you want to delete this appointment?"}
      </StyledModalTitle>
      <StyledModalActions>
        <StyledModalButton onClick={handleClose}>Cansel</StyledModalButton>
        <StyledModalButton onClick={() => deleteActivity(activity.id)}>
          Delete
        </StyledModalButton>
      </StyledModalActions>
    </StyledModal>
  );
};
