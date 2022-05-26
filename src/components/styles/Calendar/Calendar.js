import React from "react";
import { Paper } from "@mui/material";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Appointments,
  Toolbar,
  WeekView,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  TodayButton,
  CurrentTimeIndicator,
  AllDayPanel,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useActivities } from "../../../context/UserActivitiesContext";

export default function Calendar() {
  const { activities, updateActivities, deleteActivity, addActivity } =
    useActivities();

  const commitChanges = ({ changed, deleted, added }) => {
    if (added) {
      addActivity(added);
    }

    if (changed) {
      const toUpdate = activities.map((activity) => {
        const changedActivity = changed[activity.id];

        if (changedActivity) {
          return { ...activity, ...changedActivity };
        }

        return activity;
      });

      updateActivities(toUpdate);
    }

    if (deleted !== undefined) {
      deleteActivity(deleted);
    }
  };

  return (
    <Paper>
      <Scheduler height={660} data={activities}>
        <ViewState />
        <WeekView startDayHour={9} endDayHour={19} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        <AppointmentTooltip showDeleteButton showOpenButton />
        <AppointmentForm />
        <AllDayPanel />
        <CurrentTimeIndicator />
      </Scheduler>
    </Paper>
  );
}
