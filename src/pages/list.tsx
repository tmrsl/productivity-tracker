import React from "react";
import { GetServerSideProps } from "next";
import { withPrivate } from "src/utils/router";
import { getUser } from "src/utils/ssr-utils";

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
    const user = await getUser(ctx);
    const activitiesList = await loadActivities(user);
  
    return { props: { activitiesList: JSON.parse(JSON.stringify(activitiesList)) } };
  } catch (e) {
    return { props: {} as never };
  }
};

export default withPrivate(List);

