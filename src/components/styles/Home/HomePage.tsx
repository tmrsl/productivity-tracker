import React from "react";

import { Tooltip } from "@mui/material";
import Image from "next/image";
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
import { AddActivityFrom } from "../Activities/AddActivity/AddActivityForm";
import { IActivityItem, useActivities } from "../../../context/UserActivitiesContext";
import { imgSrc } from "../../../utils/utils";
interface IHomePageProps {
  activities: IActivityItem[],
}

export const HomePage = ({ activities }: IHomePageProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const { addActivity } = useActivities();

  return (
    <StyledHomeBox>
      {activities.length === 0 && <EmptyActivitiesList />}
      {activities.length > 0 && (
        <Image
          src={imgSrc("/home-page.svg")}
          width="400px"
          height="500px"
          priority={false}
          alt="home-page"
          style={{ alignSelf: "center" }}
        />
      )}
      <Tooltip title="Add new activity" onClick={handleOpen}>
        <StyledFab size="large" color="primary" aria-label="add">
          <StyledAddIcon />
        </StyledFab>
      </Tooltip>
      <StyledModal open={isOpen} onClose={handleClose}>
        <StyledModalBlock>
          <AddActivityFrom addActivity={addActivity} onClose={() => setIsOpen(false)} />
        </StyledModalBlock>
      </StyledModal>
    </StyledHomeBox>
  );
};
