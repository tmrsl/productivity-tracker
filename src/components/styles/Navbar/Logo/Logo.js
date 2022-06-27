import React from "react";

import { LogoBlock, StyledTypography } from "./Logo.styled";
import { LogoIcon } from "../../Icons/Icons.styled";

export const Logo = () => {
  return (
    <LogoBlock>
      <LogoIcon
        sx={{
          color: "text.secondary",
        }}
      />
      <StyledTypography variant="h6" noWrap component="a">
        Productivity Tracker
      </StyledTypography>
    </LogoBlock>
  );
};
