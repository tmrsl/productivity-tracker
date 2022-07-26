import React from "react";
import { withPrivate } from "../utils/router";
import { useActivities } from "../context/UserActivitiesContext";
import { ActivitiesList } from "../components/styles/Activities/ActivitiesList/ActivitiesList";

const List = () => {
  const { activities, deleteActivity } = useActivities();

  return (
    <ActivitiesList activities={activities} deleteActivity={deleteActivity} />
  );
};

export default withPrivate(List);

