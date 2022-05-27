import React from "react";
import { useNavigate } from "react-router-dom";

import { StyledDivider } from "../../Divider/Divider.styled";
import { MenuBlock, StyledPageButton } from "./Navigation.styled";
import {
  StyledBoardIcon,
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
      <StyledPageButton value="board" startIcon={<StyledBoardIcon />}>
        Board
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
