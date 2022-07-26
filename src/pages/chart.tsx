import React from "react";
import { withPrivate } from "../utils/router";
import { Diagrams } from "../components/styles/Diagrams/Diagrams";
import { useActivities } from "../context/UserActivitiesContext";

const Chart = () => {
  const { activities } = useActivities();

  return <Diagrams activities={activities} />;
};

export default withPrivate(Chart);
