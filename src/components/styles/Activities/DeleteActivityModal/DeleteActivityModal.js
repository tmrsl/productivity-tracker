import React from "react";

import {
  StyledModal,
  StyledModalActions,
  StyledModalTitle,
  StyledModalButton,
} from "./DeleteActivityModal.styled";

export default function DeleteActivityModal({
  handleClose,
  open,
  activity,
  deleteActivity,
}) {
  return (
    <>
      <StyledModal
        open={open}
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
    </>
  );
}
