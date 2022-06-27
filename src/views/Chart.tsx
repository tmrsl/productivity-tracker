import React from "react";
import { Diagrams } from "../components/styles/Diagrams/Diagrams";
import { useActivities } from "../context/UserActivitiesContext";

export const Chart = () => {
  const { activities } = useActivities();

  return <Diagrams activities={activities} />;
};
