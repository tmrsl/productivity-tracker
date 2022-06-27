import React from "react";

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
  ConfirmationDialog,
  CurrentTimeIndicator,
  AllDayPanel,
} from "@devexpress/dx-react-scheduler-material-ui";

import {
  StyledCalendarBox,
  StyledPaper,
} from "./Calendar.styled";
import {
  IActivityItem,
  TUpdateActivity,
  TDeleteActivity,
  TAddActivity } from "../../../context/UserActivitiesContext";

interface IChangeSet {
  added: IActivityItem,
  changed: IActivityItem,
  deleted: string,
}

interface ICalendarProps {
  activities: IActivityItem[],
  updateActivities: TUpdateActivity,
  deleteActivity: TDeleteActivity,
  addActivity: TAddActivity,
}

export const Calendar: React.FC<ICalendarProps> = ({
  activities,
  updateActivities,
  deleteActivity,
  addActivity
}) => {
  const commitChanges = ({ changed, deleted, added }: IChangeSet) => {
    if (added) {
      addActivity(added);
    }

    if (changed) {
      const [id] = Object.keys(changed);
      const updatedFields = changed[id];

      const updatedActivities = activities.map((activity) => {
        if (activity.id === id) {
          return { ...activity, ...updatedFields };
        }

        return activity;
      });

      updateActivities({ id, updatedFields, updatedActivities });
    }

    if (deleted !== undefined) {
      deleteActivity(deleted);
    }
  };

  return (
    <StyledCalendarBox>
      <StyledPaper>
        {/*@ts-ignore*/}
        <Scheduler height={850} data={activities}>
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
          <ConfirmationDialog />
          <AllDayPanel />
          <CurrentTimeIndicator />
        </Scheduler>
      </StyledPaper>
    </StyledCalendarBox>
  );
};
