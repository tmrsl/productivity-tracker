import React from "react";
import { useRouter } from "next/router";
import { StyledFlexBox, StyledMainPageBox, StyledTitle, StyledButton } from "./MainPage.styled";
import { LogoIcon } from "../Icons/Icons.styled";

export const MainPage = () => {
  const navigate = useRouter();

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
        variant="contained"
        onClick={() => navigate.push("/sign-in")}
      >
        Get started
      </StyledButton>
    </StyledMainPageBox>
  );
};
