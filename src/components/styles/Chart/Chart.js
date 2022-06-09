import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { isThisWeek } from "date-fns";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import { StyledButtonBox, StyledChartBox } from "./Chart.styled";
import { DAYS, MONTHS, WEEK, MONTH } from "../../../app.consts";
import { useActivities } from "../../../context/UserActivitiesContext";
import { StyledTitle } from "../Activities/ActivitiesList/ActivitiesList.styled";
import { StyledButton, StyledButtonGroup } from "../Button/Button.styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

function calcTotalHours(acc, cur) {
  const totalTime =
    new Date(cur.endDate).getTime() - new Date(cur.startDate).getTime();

  const hours = Math.round(totalTime / 60000 / 60);

  return hours + acc;
}

function makeCharTemplate(lables, label, data) {
  return {
    labels: lables,
    datasets: [
      {
        label: label,
        data,
        borderColor: "#8c9ce6",
        backgroundColor: "#7a9dff",
      },
    ],
  };
}

function buildDataForMonth(mIndex, activities) {
  return activities
    .filter((activity) => new Date(activity.startDate).getMonth() === mIndex)
    .reduce(calcTotalHours, 0);
}

function buildDataForWeek(dIndex, activities) {
  return activities
    .filter(
      (activity) =>
        dIndex === new Date(activity.startDate).getDay() &&
        isThisWeek(new Date(activity.startDate), { weekStartsOn: 1 }),
    )
    .reduce(calcTotalHours, 0);
}

function getData(activities, period = MONTH) {
  if (period === MONTH) {
    const data = MONTHS.map((m, index) => buildDataForMonth(index, activities));

    return makeCharTemplate(MONTHS, "Activities time", data);
  }

  if (period === WEEK) {
    const data = DAYS.map((d, index) => buildDataForWeek(index, activities));

    return makeCharTemplate(DAYS, "Activities time", data);
  }
}

export default function Chart() {
  const { activities } = useActivities();
  const [selectedBtn, setSelectedBtn] = React.useState(1);
  const [chartData, setChartData] = useState(null);
  const [chartView, setChartView] = useState(MONTH);

  const monthSwitchHandler = () => {
    setSelectedBtn(1);
    setChartView(MONTH);
  };

  const weekHandler = () => {
    setSelectedBtn(2);
    setChartView(WEEK);
  };

  useEffect(() => {
    const newChartData = getData(activities, chartView);
    setChartData(newChartData);
  }, [activities, chartView]);

  return (
    <StyledChartBox>
      <StyledTitle variant="h5">Chart</StyledTitle>

      {chartData && <Line options={options} data={chartData} />}

      <StyledButtonBox>
        <StyledButtonGroup>
          <StyledButton
            color={selectedBtn === 1 ? "secondary" : "primary"}
            onClick={monthSwitchHandler}
          >
            Mounth
          </StyledButton>
          <StyledButton
            color={selectedBtn === 2 ? "secondary" : "primary"}
            onClick={weekHandler}
          >
            Weeks
          </StyledButton>
        </StyledButtonGroup>
      </StyledButtonBox>
    </StyledChartBox>
  );
}
