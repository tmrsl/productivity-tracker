// import { Container } from "@mui/material";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Fab from "@mui/material/Fab";
// import { Link } from "react-router-dom";
// import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { Box, Fab } from "@mui/material";
import React from "react";

import EmptyActivitiesList from "../components/styles/Activities/EmptyActivitiestList/EmptyActivitiesList";
import {
  StyledModal,
  StyledModalBlock,
} from "../components/styles/Modal/Modal.styled";
import { StyledTooltip } from "../components/styles/Tooltip/Tooltip.styled";
import { useActivities } from "../context/UserActivitiesContext";
import AddActivity from "../views/AddActivity";

const Home = () => {
  const { activities } = useActivities();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {activities.length === 0 && <EmptyActivitiesList />}
      <img
        src="/home-page.svg"
        srcSet=""
        alt=""
        loading="lazy"
        style={{ width: 600, height: 700, alignSelf: "center" }}
      />
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
};

export default Home;
