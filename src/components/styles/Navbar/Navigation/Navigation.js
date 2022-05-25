import React from "react";

import { StyledDivider } from "../../Divider/Divider.styled";
import { MenuBlock, StyledPageButton } from "./Navigation.styled";
import {
  StyledBoardIcon,
  StyledListIcon,
  StyledCalendarMonthIcon,
} from "../../Icons/Icons.styled";
// import { ButtonGroup } from "@mui/material";

export default function Menu() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <MenuBlock>
      {/* <ButtonGroup value={alignment} onChange={handleChange}> */}
      <StyledPageButton value="list" startIcon={<StyledListIcon />}>
        List
      </StyledPageButton>
      <StyledDivider orientation="vertical" variant="middle" flexItem />
      <StyledPageButton value="board" startIcon={<StyledBoardIcon />}>
        Board
      </StyledPageButton>
      <StyledDivider orientation="vertical" variant="middle" flexItem />
      <StyledPageButton
        value="calendar"
        startIcon={<StyledCalendarMonthIcon />}
      >
        Calendar
      </StyledPageButton>
      {/* </ButtonGroup> */}
    </MenuBlock>
  );
}
