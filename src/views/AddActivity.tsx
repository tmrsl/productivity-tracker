import React from "react";

import { useActivities } from "../context/UserActivitiesContext";
import { AddActivityFrom } from "../components/styles/Activities/AddActivity/AddActivityForm";

interface IAddActivityProps {
  onClose: () => void,
}

export const AddActivity = ({ onClose }: IAddActivityProps) => {
  const { addActivity } = useActivities();

  return (
    <AddActivityFrom addActivity={addActivity} onClose={onClose} />
  );
};
