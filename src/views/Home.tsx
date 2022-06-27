import React from "react";

import { useActivities } from "../context/UserActivitiesContext";
import { HomePage } from "../components/styles/Home/HomePage";

export const Home = () => {
  const { activities } = useActivities();

  return <HomePage activities={activities} />;
};
