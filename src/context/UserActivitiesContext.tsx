import {
  addDoc,
  collection,
  query,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { USERS, ACTIVITIES } from "../app.consts";
import { db } from "../firebase";

export interface IActivityItemRaw {
  title: string,
  notes: string,
  startDate: Date,
  endDate: Date,
}

export interface IActivityItem extends IActivityItemRaw {
  id: string,
}

// eslint-disable-next-line
export type TAddActivity = (activity: IActivityItemRaw) => Promise<void>;
// eslint-disable-next-line
export type TUpdateActivity = (args: IUpdateActivity) => Promise<void>;
// eslint-disable-next-line
export type TDeleteActivity = (args: string) => Promise<void>;

interface IActivitiesContext {
  activities: IActivityItem[],
  addActivity: TAddActivity,
  updateActivities: TUpdateActivity,
  deleteActivity: TDeleteActivity,
}

interface IUpdateActivity {
  id: string,
  updatedFields: { [x: string]: string },
  updatedActivities: IActivityItem[]
}

interface IUserActivitiesProviderProps {
  children: React.ReactNode,
}

const UserActivitiesContext = React.createContext<IActivitiesContext>(null);

export const UserActivitiesProvider = ({ children }: IUserActivitiesProviderProps) => {
  const { currentUser } = useAuth();
  const [activities, setActivities] = useState<IActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  const addActivity = async (activity: IActivityItemRaw) => {
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

      setActivities((curActivities: IActivityItem[]) => [...curActivities, newActivity]);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const updateActivities = async ({ id, updatedFields, updatedActivities }: IUpdateActivity) => {
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

  const deleteActivity = async (deletedId: string) => {
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

      const newActivities: IActivityItem[] = activities.filter(
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
        const que = query(collection(db, USERS, currentUser.uid, ACTIVITIES));
        const collectionSnap = await getDocs(que);
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
    
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
};

export const useActivities = () => useContext(UserActivitiesContext);
