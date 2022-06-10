import React from "react";

import EmptyActivitiesList from "../components/styles/Activities/EmptyActivitiestList/EmptyActivitiesList";
import {
  StyledHomeBox,
  StyledFab,
} from "../components/styles/Home/Home.styled";
import { StyledAddIcon } from "../components/styles/Icons/Icons.styled";
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
    <StyledHomeBox>
      {activities.length === 0 && <EmptyActivitiesList />}
      <img
        src="/home-page.svg"
        srcSet=""
        alt=""
        loading="lazy"
        style={{ width: 600, height: 700, alignSelf: "center" }}
      />
      <StyledTooltip title="Add new activity" onClick={handleOpen}>
        <StyledFab size="large" color="primary" aria-label="add">
          <StyledAddIcon />
        </StyledFab>
      </StyledTooltip>
      <StyledModal open={open} onClose={handleClose}>
        <StyledModalBlock>
          <AddActivity onClose={() => setOpen(false)} />
        </StyledModalBlock>
      </StyledModal>
    </StyledHomeBox>
  );
};

export default Home;
