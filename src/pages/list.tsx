import React from "react";
import { getAuth } from "firebase-admin/auth";
import { withPrivate } from "src/utils/router";
import nookies from "nookies";
import { useActivities, loadActivities } from "../context/UserActivitiesContext";
import { ActivitiesList } from "../components/styles/Activities/ActivitiesList/ActivitiesList";
import firebaseAdmin from "../firebase/firebase.admin";

const List = ({ activitiesList }) => {
  const { deleteActivity } = useActivities();

  return (
    <ActivitiesList activities={activitiesList} deleteActivity={deleteActivity} />
  );
};

export async function getServerSideProps(ctx) {
  try {
    const cookies = nookies.get(ctx);
    const user = await getAuth(firebaseAdmin).verifyIdToken(cookies.token);
    const activitiesList = await loadActivities(user);
  
    return { props: { activitiesList: JSON.parse(JSON.stringify(activitiesList)) } };
  } catch (e) {
    return { props: {} as never };
  }
}

export default withPrivate(List);

