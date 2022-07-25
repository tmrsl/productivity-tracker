import React from "react";
import {
  StyledContentBox,
  StyledImgBox,
  StyledMainBox,
  StyledOutletBox,
} from "./AuthLayoutPage.styled";
import { imgSrc } from "../utils/utils";

export const AuthLayout = (props) => {
  return (
    <StyledMainBox>
      <StyledContentBox>
        <StyledOutletBox>
          {props.children}
        </StyledOutletBox>

        <StyledImgBox>
          <img src={imgSrc("/start-page.svg")} alt="start-page-icon" loading="lazy" />
        </StyledImgBox>
      </StyledContentBox>
    </StyledMainBox>
  );
};
