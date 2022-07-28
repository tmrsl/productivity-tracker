import React from "react";
import { GetServerSideProps } from "next";
import { withPrivate } from "src/utils/router";
import { getUser } from "src/utils/ssr-utils";

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
    const user = await getUser(ctx);
    const activitiesList = await loadActivities(user);
  
    return { props: { activitiesList: JSON.parse(JSON.stringify(activitiesList)) } };
  } catch (e) {
    return { props: {} as never };
  }
};

export default withPrivate(Scheduler);
