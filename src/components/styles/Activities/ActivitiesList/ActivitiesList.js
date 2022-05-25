import React from "react";

import ActivityListItem from "../ActivityListItem/ActivityListItem";
import EmptyActivitiesList from "../EmptyActivitiestList/EmptyActivitiesList";
import {
  StyledActivitiesList,
  StyledListBox,
  StyledTitle,
} from "./ActivitiesList.styled";

export default function ActivitiesList({ activities }) {
  return (
    <StyledListBox>
      {activities.length === 0 ? (
        <EmptyActivitiesList />
      ) : (
        <>
          <StyledTitle variant="h5" noWrap>
            Your activities
          </StyledTitle>
          <StyledActivitiesList>
            {activities.map((activity) => {
              return (
                <ActivityListItem key={activity.title} activity={activity} />
              );
            })}
          </StyledActivitiesList>
        </>
      )}
    </StyledListBox>
  );
}
