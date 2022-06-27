import React from "react";
import { useNavigate } from "react-router-dom";

import { Divider } from "@mui/material";
import { MenuBlock, StyledPageButton } from "./Navigation.styled";
import {
  StyledChartIcon,
  StyledListIcon,
  StyledCalendarMonthIcon,
} from "../../Icons/Icons.styled";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <MenuBlock>
      <StyledPageButton
        onClick={() => navigate("/list")}
        value="list"
        startIcon={<StyledListIcon />}
      >
        List
      </StyledPageButton>

      <Divider orientation="vertical" variant="middle" flexItem />
      <StyledPageButton
        onClick={() => navigate("/chart")}
        value="board"
        startIcon={<StyledChartIcon />}
      >
        Charts
      </StyledPageButton>
      <Divider orientation="vertical" variant="middle" flexItem />

      <StyledPageButton
        onClick={() => navigate("/calendar")}
        value="calendar"
        startIcon={<StyledCalendarMonthIcon />}
      >
        Calendar
      </StyledPageButton>
    </MenuBlock>
  );
};
