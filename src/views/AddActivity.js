import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function AddActivity() {
  return (
    <div>
      AddActivity{" "}
      <Fab sx={{ mt: 3, mb: 1 }} size="medium" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}
