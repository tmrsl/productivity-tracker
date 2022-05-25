import { ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { StyledTypography } from "../../Typography/Typography.styled";
import Logo from "../../Navbar/Logo/Logo";

export default function EmptyActivitiesList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alightItems: "center",
      }}
    >
      <ImageList sx={{ width: 500, height: 450 }} cols={1} rowHeight={164}>
        <ImageListItem>
          <img
            src="/undraw_fitness_stats_sht6.svg"
            srcSet=""
            alt=""
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
      <StyledTypography
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
  );
}
