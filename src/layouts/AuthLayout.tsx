import React from "react";
import Image from "next/image";
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
          <Image
            width="400px"
            height="500px"
            priority={false}
            src={imgSrc("/start-page.svg")}
            alt="start-page-icon" />
        </StyledImgBox>
      </StyledContentBox>
    </StyledMainBox>
  );
};
