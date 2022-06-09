import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../components/styles/Button/Button.styled";
import { LogoIcon } from "../components/styles/Icons/Icons.styled";
import { StyledTypography } from "../components/styles/Typography/Typography.styled";

export default function Main() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        margin: "0 auto",
        gap: 2,
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <LogoIcon />
        <StyledTypography
          variant="h6"
          noWrap
          component="a"
          sx={{
            fontWeight: 500,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Productivity Tracker
        </StyledTypography>
      </Box>

      <StyledButton
        onClick={() => navigate("/sign-in")}
        sx={{ width: { xs: "300px" }, mb: { md: " 120px" } }}
      >
        Get started
      </StyledButton>
    </Box>
  );
}
