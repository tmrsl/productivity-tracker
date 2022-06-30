import React from "react";
import { Outlet } from "react-router-dom";

import {
  StyledContentBox,
  StyledImgBox,
  StyledMainBox,
  StyledOutletBox,
} from "./AuthLayoutPage.styled";

export const AuthLayoutPage = () => {
  return (
    <StyledMainBox>
      <StyledContentBox>
        <StyledOutletBox>
          <Outlet />
        </StyledOutletBox>

        <StyledImgBox>
          <img src="/start-page.svg" alt="start-page-icon" loading="lazy" />
        </StyledImgBox>
      </StyledContentBox>
    </StyledMainBox>
  );
};
