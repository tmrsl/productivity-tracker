import React, { useContext, useState } from "react";

const UserActivitiesContext = React.createContext();

export default function UserActivitiesProvider({ children }) {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    return setActivities((curActivities) => [...curActivities, activity]);
  };

  const value = {
    activities,
    addActivity,
  };

  return (
    <UserActivitiesContext.Provider value={value}>
      {children}
    </UserActivitiesContext.Provider>
  );
}

export const useActivities = () => useContext(UserActivitiesContext);
