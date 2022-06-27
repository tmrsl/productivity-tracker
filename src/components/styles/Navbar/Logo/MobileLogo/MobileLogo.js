import React from "react";

import { MobileLogoBlock } from "./MobileLogo.styled";
import { StyledIconButton } from "../../../Button/Button.styled";
import { LogoIcon } from "../../../Icons/Icons.styled";

export const MobileLogo = () => {
  return (
    <MobileLogoBlock>
      <StyledIconButton>
        <LogoIcon />
      </StyledIconButton>
    </MobileLogoBlock>
  );
};
