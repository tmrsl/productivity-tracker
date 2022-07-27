import React from "react";
import nookies from "nookies";
import { GetServerSideProps } from "next";
import { getAuth } from "firebase-admin/auth";
import { withPrivate } from "src/utils/router";
import firebaseAdmin from "../firebase/firebase.admin";

import { useActivities, loadActivities, IActivityItem } from "../context/UserActivitiesContext";

import { ActivitiesList } from "../components/styles/Activities/ActivitiesList/ActivitiesList";

interface IListProps {
  activitiesList: IActivityItem[],
}

const List = ({ activitiesList }: IListProps) => {
  const { deleteActivity } = useActivities();

  return (
    <ActivitiesList activities={activitiesList} deleteActivity={deleteActivity} />
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

export default withPrivate(List);

