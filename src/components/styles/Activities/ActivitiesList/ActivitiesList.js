import { Box } from "@mui/system";
import React from "react";
import { useActivities } from "../../../../context/UserActivitiesContext";
import { StyledTypography } from "../../Typography/Typography.styled";

import ActivityListItem from "../ActivityListItem/ActivityListItem";
import EmptyActivitiesList from "../EmptyActivitiestList/EmptyActivitiesList";
import {
  StyledActivitiesList,
  StyledListBox,
  StyledTitle,
} from "./ActivitiesList.styled";

export default function ActivitiesList() {
  const { activities } = useActivities();

  return (
    <StyledListBox>
      {activities.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <StyledTypography
            variant="h5"
            sx={{
              fontWeight: 500,
              color: "text.secondary",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            You haven`t got any activities yet
          </StyledTypography>
          <img
            style={{ width: "400px", height: "500px" }}
            src="/empty-list.svg"
            srcSet=""
            alt=""
            loading="lazy"
          />
        </Box>
      ) : (
        <>
          <StyledTitle variant="h5" noWrap>
            Your activities
          </StyledTitle>
          <StyledActivitiesList>
            {activities.map((activity) => {
              return <ActivityListItem key={activity.id} activity={activity} />;
            })}
          </StyledActivitiesList>
        </>
      )}
    </StyledListBox>
  );
}
