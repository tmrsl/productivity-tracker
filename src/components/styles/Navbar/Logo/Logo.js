import React from "react";

import { LogoBlock } from "./Logo.styled";
import { LogoIcon } from "../../Icons/Icons.styled";
import { StyledTypography } from "../../Typography/Typography.styled";

export default function Logo() {
  return (
    <LogoBlock>
      <LogoIcon
        sx={{
          color: "text.secondary",
        }}
      />
      <StyledTypography
        variant="h6"
        noWrap
        component="a"
        sx={{
          fontWeight: 500,
          color: "text.secondary",
          textDecoration: "none",
        }}
      >
        Productivity Tracker
      </StyledTypography>
    </LogoBlock>
  );
}
