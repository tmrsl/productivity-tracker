import React, { useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  query,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "./AuthContext";
import { USERS, ACTIVITIES } from "../app.consts";

const UserActivitiesContext = React.createContext();

export default function UserActivitiesProvider({ children }) {
  const { currentUser } = useAuth();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const addActivity = async (activity) => {
    setLoading(true);
    try {
      const userActivitiesRef = collection(
        db,
        USERS,
        currentUser.uid,
        ACTIVITIES
      );
      const { id } = await addDoc(userActivitiesRef, activity);

      const newActivity = { ...activity, id };

      setActivities((curActivities) => [...curActivities, newActivity]);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const updateActivities = async ({ id, updatedFields, updatedActivities }) => {
    setLoading(true);
    try {
      const activityRef = doc(db, USERS, currentUser.uid, ACTIVITIES, id);
      await updateDoc(activityRef, updatedFields);

      setActivities(updatedActivities);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteActivity = async (deletedId) => {
    setLoading(true);
    try {
      const activityRef = doc(
        db,
        USERS,
        currentUser.uid,
        ACTIVITIES,
        deletedId
      );
      await deleteDoc(activityRef);

      const newActivities = activities.filter(
        (activity) => activity.id !== deletedId
      );
      setActivities(newActivities);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const q = query(collection(db, USERS, currentUser.uid, ACTIVITIES));
        const collectionSnap = await getDocs(q);
        const list = collectionSnap.docs.map((doc) => ({
          id: doc.id,
          title: doc.get("title"),
          notes: doc.get("notes"),
          startDate: doc.get("startDate").toDate(),
          endDate: doc.get("endDate").toDate(),
        }));
        setActivities(list);
      } catch (error) {
        console.log("error: ", error);
      } finally {
        setLoading(false);
      }
    }

    // const unsubscribe = onSnapshot(q, (snapshot) => {
    //   const list = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     title: doc.get("title"),
    //     notes: doc.get("notes"),
    //     startDate: doc.get("startDate").toDate(),
    //     endDate: doc.get("endDate").toDate(),
    //   }));

    //   setActivities(list);
    //   setLoading(false);
    // });

    // return unsubscribe;
    fetchData();
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
