// import { Container } from "@mui/material";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Fab from "@mui/material/Fab";
// import { Link } from "react-router-dom";
// import EditIcon from "@mui/icons-material/Edit";
import React from "react";

import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { StyledTooltip } from "../components/styles/Tooltip/Tooltip.styled";
import AddActivity from "../views/AddActivity";
import {
  StyledModal,
  StyledModalBlock,
} from "../components/styles/Modal/Modal.styled";
import ActivitiesList from "../components/styles/Activities/ActivitiesList/ActivitiesList";
import { Stack } from "@mui/material";
import Feed from "../components/styles/Feed/Feed";
// import Rightbar from "../components/styles/Rightbar/Rightbar";
// import Sidebar from "../components/styles/Sidebar/Sidebar";

import { useActivities } from "../context/UserActivitiesContext";
import EmptyActivitiesList from "../components/styles/Activities/EmptyActivitiestList/EmptyActivitiesList";

const Home = () => {
  // const { currentUser } = useAuth();
  const { activities } = useActivities();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: "100%" }}>
      {activities.length === 0 && <EmptyActivitiesList />}
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
