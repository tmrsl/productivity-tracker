import React from "react";
import { GetServerSideProps } from "next";
import { withPrivate } from "src/utils/router";
import { getUser } from "src/utils/ssr-utils";

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
    const user = await getUser(ctx);
    const activitiesList = await loadActivities(user);
  
    return { props: { activitiesList: JSON.parse(JSON.stringify(activitiesList)) } };
  } catch (e) {
    return { props: {} as never };
  }
};

export default withPrivate(Chart);
