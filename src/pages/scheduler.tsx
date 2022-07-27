import React from "react";
import nookies from "nookies";
import { GetServerSideProps } from "next";
import { getAuth } from "firebase-admin/auth";
import { withPrivate } from "src/utils/router";
import firebaseAdmin from "../firebase/firebase.admin";

import { loadActivities, useActivities, IActivityItem } from "../context/UserActivitiesContext";

import { Calendar } from "../components/styles/Calendar/Calendar";

interface ISchedulerProps {
  activitiesList: IActivityItem[],
}

const Scheduler = ({ activitiesList }: ISchedulerProps) => {
  const {
    updateActivities,
    deleteActivity,
    addActivity
  } = useActivities();

  return (
    <Calendar
      activities={activitiesList}
      updateActivities={updateActivities}
      deleteActivity={deleteActivity}
      addActivity={addActivity}/>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const cookies = nookies.get(ctx);
    const user = await getAuth(firebaseAdmin).verifyIdToken(cookies.token);
    const activitiesList = await loadActivities(user);
  
    return { props: { activitiesList: JSON.parse(JSON.stringify(activitiesList)) } };
  } catch (e) {
    return { props: {} as never };
  }
};

export default withPrivate(Scheduler);
