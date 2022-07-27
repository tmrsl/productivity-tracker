import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";
import { EmptyActivitiesListBox, StyledTypography } from "./EmptyActivitiesList.styled";
import { Logo } from "../../Navbar/Logo/Logo";
import { imgSrc } from "../../../../utils/utils";

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

      <Image
        src={imgSrc("/undraw_fitness_stats_sht6.svg")}
        width="400px"
        height="500px"
        priority={false}
        alt="empty-list"
        style={{ alignSelf: "center" }}
      />
    </EmptyActivitiesListBox>
  );
};
