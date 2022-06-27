import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledFlexBox, StyledMainPageBox, StyledTitle, StyledButton } from "./MainPage.styled";
import { LogoIcon } from "../Icons/Icons.styled";

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <StyledMainPageBox>
      <StyledFlexBox>
        <LogoIcon />
        <StyledTitle
          variant="h6"
          noWrap
          component="a"
        >
          Productivity Tracker
        </StyledTitle>
      </StyledFlexBox>

      <StyledButton
        onClick={() => navigate("/sign-in")}
      >
        Get started
      </StyledButton>
    </StyledMainPageBox>
  );
};
