import React from "react";
import {
  StyledActivitiesList,
  StyledListBox,
  StyledTitle,
  StyledTitleBox,
} from "../components/styles/Activities/ActivitiesList/ActivitiesList.styled";
import ActivityListItem from "../components/styles/Activities/ActivityListItem/ActivityListItem";
import { useActivities } from "../context/UserActivitiesContext";

export default function ActivitiesList() {
  const { activities, deleteActivity } = useActivities();

  return (
    <StyledListBox>
      {activities.length === 0 ? (
        <StyledTitleBox>
          <StyledTitle variant="h5">
            You haven`t got any activities yet
          </StyledTitle>
          <img
            style={{ width: "400px", height: "500px" }}
            src="/empty-list.svg"
            srcSet=""
            alt=""
            loading="lazy"
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
}
