import React from "react";

import { Tooltip } from "@mui/material";
import {
  StyledHomeBox,
  StyledFab,
} from "./HomePage.styled";
import { EmptyActivitiesList } from "../Activities/EmptyActivitiestList/EmptyActivitiesList";
import { StyledAddIcon } from "../Icons/Icons.styled";
import {
  StyledModal,
  StyledModalBlock,
} from "../Modal/Modal.styled";
import { AddActivity } from "../../../views/AddActivity";
import { IActivityItem } from "../../../context/UserActivitiesContext";
import { imgSrc } from "../../../utils/utils";

interface IHomePageProps {
  activities: IActivityItem[],
}

export const HomePage = ({ activities }: IHomePageProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <StyledHomeBox>
      {activities.length === 0 && <EmptyActivitiesList />}
      {activities.length > 0 && (
        <img
          src={imgSrc("/home-page.svg")}
          srcSet=""
          alt=""
          loading="lazy"
          style={{ width: 600, height: 700, alignSelf: "center" }}
        />
      )}
      <Tooltip title="Add new activity" onClick={handleOpen}>
        <StyledFab size="large" color="primary" aria-label="add">
          <StyledAddIcon />
        </StyledFab>
      </Tooltip>
      <StyledModal open={isOpen} onClose={handleClose}>
        <StyledModalBlock>
          <AddActivity onClose={() => setIsOpen(false)} />
        </StyledModalBlock>
      </StyledModal>
    </StyledHomeBox>
  );
};
