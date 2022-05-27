import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection, query, onSnapshot } from "firebase/firestore";
import { dataBase } from "../firebase";

const UserActivitiesContext = React.createContext();

export default function UserActivitiesProvider({ children }) {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const addActivity = async (activity) => {
    const newActivity = { ...activity, id: uuidv4() };
    await addDoc(collection(dataBase, "activities"), activity);

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

  useEffect(() => {
    const q = query(collection(dataBase, "activities"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.get("title"),
        notes: doc.get("notes"),
        startDate: doc.get("startDate").toDate(),
        endDate: doc.get("endDate").toDate(),
      }));

      setActivities(list);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    activities,
    addActivity,
    updateActivities,
    deleteActivity,
  };

  return (
    <UserActivitiesContext.Provider value={value}>
      {!loading && children}
    </UserActivitiesContext.Provider>
  );
}

export const useActivities = () => useContext(UserActivitiesContext);
