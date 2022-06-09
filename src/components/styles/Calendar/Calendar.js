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
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useActivities } from "../../../context/UserActivitiesContext";
import { StyledTitle } from "../Activities/ActivitiesList/ActivitiesList.styled";

export default function Calendar() {
  const { activities, updateActivities, deleteActivity, addActivity } =
    useActivities();

  const commitChanges = ({ changed, deleted, added }) => {
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
    <Box
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        bgcolor: "background.paper",
        gap: 4,
      }}
    >
      <StyledTitle
        variant="h5"
        sx={{
          display: { xs: "inline-block", md: "none" },
          mb: 4,
        }}
      >
        Calendar
      </StyledTitle>
      <Paper>
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
      </Paper>
    </Box>
  );
}
