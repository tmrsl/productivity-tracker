import React from "react";
import { withPrivate } from "../utils/router";
import { Calendar } from "../components/styles/Calendar/Calendar";
import { useActivities } from "../context/UserActivitiesContext";

const Scheduler = () => {
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

export default withPrivate(Scheduler);
