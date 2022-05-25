import React from "react";

import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { StyledTooltip } from "../Tooltip/Tooltip.styled";
import AddActivity from "../../../views/AddActivity";
import { StyledModal, StyledModalBlock } from "../Modal/Modal.styled";
import ActivitiesList from "../Activities/ActivitiesList/ActivitiesList";

export default function Feed({ activities }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
      component="main"
    >
      <ActivitiesList activities={activities} />

      <StyledTooltip title="Add new activity" onClick={handleOpen}>
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
      </StyledTooltip>
      <StyledModal open={open} onClose={handleClose}>
        <StyledModalBlock>
          <AddActivity onClose={() => setOpen(false)} />
        </StyledModalBlock>
      </StyledModal>
    </Box>
  );
}
