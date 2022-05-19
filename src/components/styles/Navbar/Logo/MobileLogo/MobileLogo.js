import React from "react";

import { MobileLogoBlock } from "./MobileLogo.styled";
import { LogoIcon } from "../../../Icons/Icons.styled";
import { StyledIconButton } from "../../../Button/Button.styled";

export default function MobileLogo() {
  return (
    <MobileLogoBlock>
      <StyledIconButton href="/" color="inherit">
        <LogoIcon />
      </StyledIconButton>
    </MobileLogoBlock>
  );
}
