import React from "react";
import { getAuth } from "firebase-admin/auth";
import nookies from "nookies";
import firebaseAdmin from "../firebase/firebase.admin";

import { withPrivate } from "../utils/router";
import { loadActivities, useActivities } from "../context/UserActivitiesContext";

import { Calendar } from "../components/styles/Calendar/Calendar";

const Scheduler = ({ activitiesList }) => {
  const { updateActivities, deleteActivity, addActivity } =
    useActivities();

  return (
    <Calendar
      activities={activitiesList}
      updateActivities={updateActivities}
      deleteActivity={deleteActivity}
      addActivity={addActivity}/>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const cookies = nookies.get(ctx);
    const user = await getAuth(firebaseAdmin).verifyIdToken(cookies.token);
    const activitiesList = await loadActivities(user);
    console.log("activities; ", activitiesList);
  
    return { props: { activitiesList: JSON.parse(JSON.stringify(activitiesList)) } };
  } catch (e) {
    return { props: {} as never };
  }
}

export default withPrivate(Scheduler);
