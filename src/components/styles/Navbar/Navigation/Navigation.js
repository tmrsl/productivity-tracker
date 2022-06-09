import React from "react";
import { useNavigate } from "react-router-dom";

import { MenuBlock, StyledPageButton } from "./Navigation.styled";
import { StyledDivider } from "../../Divider/Divider.styled";
import {
  StyledChartIcon,
  StyledListIcon,
  StyledCalendarMonthIcon,
} from "../../Icons/Icons.styled";

export default function Menu() {
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

      <StyledDivider orientation="vertical" variant="middle" flexItem />
      <StyledPageButton
        onClick={() => navigate("/chart")}
        value="board"
        startIcon={<StyledChartIcon />}
      >
        Charts
      </StyledPageButton>
      <StyledDivider orientation="vertical" variant="middle" flexItem />

      <StyledPageButton
        onClick={() => navigate("/calendar")}
        value="calendar"
        startIcon={<StyledCalendarMonthIcon />}
      >
        Calendar
      </StyledPageButton>
    </MenuBlock>
  );
}
