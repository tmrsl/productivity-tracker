import React from "react";
import { useRouter } from "next/router";

import { Divider } from "@mui/material";
import { MenuBlock, StyledPageButton } from "./Navigation.styled";
import {
  StyledChartIcon,
  StyledListIcon,
  StyledCalendarMonthIcon,
} from "../../Icons/Icons.styled";

export const Navigation = () => {
  const router = useRouter();

  return (
    <MenuBlock>
      <StyledPageButton
        onClick={() => router.push("/list")}
        value="list"
        startIcon={<StyledListIcon />}
      >
        List
      </StyledPageButton>

      <Divider orientation="vertical" variant="middle" flexItem />
      <StyledPageButton
        onClick={() => router.push("/chart")}
        value="board"
        startIcon={<StyledChartIcon />}
      >
        Charts
      </StyledPageButton>
      <Divider orientation="vertical" variant="middle" flexItem />

      <StyledPageButton
        onClick={() => router.push("/calendar")}
        value="calendar"
        startIcon={<StyledCalendarMonthIcon />}
      >
        Calendar
      </StyledPageButton>
    </MenuBlock>
  );
};
