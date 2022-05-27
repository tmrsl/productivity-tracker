import { Box } from "@mui/system";
import React from "react";
import { StyledTypography } from "../../Typography/Typography.styled";
import Logo from "../../Navbar/Logo/Logo";

export default function EmptyActivitiesList() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <StyledTypography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: "text.secondary",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Welcome to
        </StyledTypography>
        <Logo />
        <StyledTypography
          sx={{
            fontWeight: 500,
            color: "text.secondary",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Let's create your first activity
        </StyledTypography>
      </Box>

      <img
        src="/undraw_fitness_stats_sht6.svg"
        srcSet=""
        alt=""
        loading="lazy"
        style={{ width: 600, height: 700, alignSelf: "center" }}
      />
    </Box>
  );
}
