import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UserActivitiesContext = React.createContext();

export default function UserActivitiesProvider({ children }) {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    const newActivity = { ...activity, id: uuidv4() };
    return setActivities((curActivities) => [...curActivities, newActivity]);
  };

  const updateActivities = (newActivities) => {
    setActivities(newActivities);
  };

  const deleteActivity = (deleted) => {
    const newActivities = activities.filter(
      (activity) => activity.id !== deleted
    );
    setActivities(newActivities);
  };

  const value = {
    activities,
    addActivity,
    updateActivities,
    deleteActivity,
  };

  return (
    <UserActivitiesContext.Provider value={value}>
      {children}
    </UserActivitiesContext.Provider>
  );
}

export const useActivities = () => useContext(UserActivitiesContext);
