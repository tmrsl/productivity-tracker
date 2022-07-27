import React from "react";
import { getAuth } from "firebase-admin/auth";
import nookies from "nookies";
import { loadActivities } from "../context/UserActivitiesContext";
import firebaseAdmin from "../firebase/firebase.admin";
import { withPrivate } from "../utils/router";
import { Diagrams } from "../components/styles/Diagrams/Diagrams";

const Chart = ({ activitiesList }) => {
  return <Diagrams activities={activitiesList} />;
};

export async function getServerSideProps(ctx) {
  console.log("[getServerSidePropsList]");
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

export default withPrivate(Chart);
