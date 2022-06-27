import { Box } from "@mui/system";
import React from "react";
import { EmptyActivitiesListBox, StyledTypography } from "./EmptyActivitiesList.styled";
import { Logo } from "../../Navbar/Logo/Logo";

export const EmptyActivitiesList = () => {
  return (
    <EmptyActivitiesListBox>
      <Box>
        <StyledTypography variant="h5">
          Welcome to
        </StyledTypography>
        <Logo />
        <StyledTypography>
          Create your first activity
        </StyledTypography>
      </Box>

      <img
        src="/undraw_fitness_stats_sht6.svg"
        srcSet=""
        alt=""
        loading="lazy"
        style={{ width: 600, height: 700, alignSelf: "center" }}
      />
    </EmptyActivitiesListBox>
  );
};
