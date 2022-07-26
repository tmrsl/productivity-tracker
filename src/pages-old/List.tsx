import React from "react";

import { useActivities } from "../context/UserActivitiesContext";
import { ActivitiesList } from "../components/styles/Activities/ActivitiesList/ActivitiesList";

export const List = () => {
  const { activities, deleteActivity } = useActivities();

  return (
    <ActivitiesList activities={activities} deleteActivity={deleteActivity} />
  );
};

export default List;
