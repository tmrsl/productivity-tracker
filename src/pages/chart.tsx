import React from "react";
import nookies from "nookies";
import { GetServerSideProps } from "next";
import { getAuth } from "firebase-admin/auth";
import { withPrivate } from "src/utils/router";
import firebaseAdmin from "../firebase/firebase.admin";

import { loadActivities, IActivityItem } from "../context/UserActivitiesContext";

import { Diagrams } from "../components/styles/Diagrams/Diagrams";

interface IChartProps {
  activitiesList: IActivityItem[],
}

const Chart = ({ activitiesList }: IChartProps) => {
  return <Diagrams activities={activitiesList} />;
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

export default withPrivate(Chart);
