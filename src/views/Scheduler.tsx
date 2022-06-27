import React from "react";
import { Calendar } from "../components/styles/Calendar/Calendar";

import { useActivities } from "../context/UserActivitiesContext";

export const Scheduler = () => {
  const { activities, updateActivities, deleteActivity, addActivity } =
    useActivities();

  return (
    <Calendar
      activities={activities}
      updateActivities={updateActivities}
      deleteActivity={deleteActivity}
      addActivity={addActivity}/>
  );
};
