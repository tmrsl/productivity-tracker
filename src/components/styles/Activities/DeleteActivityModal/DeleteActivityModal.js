import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import { useActivities } from "../../../../context/UserActivitiesContext";

export default function DeleteActivityModal({ handleClose, open, activity }) {
  const { deleteActivity } = useActivities();

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this appointment?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cansel</Button>
          <Button onClick={() => deleteActivity(activity.id)} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
