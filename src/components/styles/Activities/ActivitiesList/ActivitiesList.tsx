import React from "react";
import Image from "next/image";
import {
  StyledActivitiesList,
  StyledListBox,
  StyledTitle,
  StyledTitleBox,
} from "./ActivitiesList.styled";
import { ActivityListItem } from "../ActivityListItem/ActivityListItem";
import { IActivityItem, TDeleteActivity } from "../../../../context/UserActivitiesContext";
import { imgSrc } from "../../../../utils/utils";

interface IActivitiesListProps {
  activities: IActivityItem[],
  deleteActivity: TDeleteActivity,
}

export const ActivitiesList = ({ activities, deleteActivity }: IActivitiesListProps) => {
  return (
    <StyledListBox>
      {activities.length === 0 ? (
        <StyledTitleBox>
          <StyledTitle variant="h5">
            You haven`t got any activities yet
          </StyledTitle>
          <Image
            width="400px"
            height="500px"
            priority={false}
            src={imgSrc("/empty-list.svg")}
            alt="empty-list"
          />
        </StyledTitleBox>
      ) : (
        <>
          <StyledTitle variant="h5" noWrap>
            Your activities
          </StyledTitle>
          <StyledActivitiesList>
            {activities.map((activity) => {
              return (
                <ActivityListItem
                  key={activity.id}
                  activity={activity}
                  deleteActivity={deleteActivity}
                />
              );
            })}
          </StyledActivitiesList>
        </>
      )}
    </StyledListBox>
  );
};
