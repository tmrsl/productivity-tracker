import React from "react";

import { StyledDivider } from "../../Divider/Divider.styled";
import { MenuBlock, StyledPageButton } from "./Navigation.styled";
import {
  StyledBoardIcon,
  StyledListIcon,
  StyledCalendarMonthIcon,
} from "../../Icons/Icons.styled";

export default function Menu() {
  return (
    <MenuBlock>
      <StyledPageButton startIcon={<StyledListIcon />}>List</StyledPageButton>
      <StyledDivider orientation="vertical" variant="middle" flexItem />
      <StyledPageButton startIcon={<StyledBoardIcon />}>Board</StyledPageButton>
      <StyledDivider orientation="vertical" variant="middle" flexItem />
      <StyledPageButton startIcon={<StyledCalendarMonthIcon />}>
        Calendar
      </StyledPageButton>
    </MenuBlock>
  );
}
