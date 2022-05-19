import React from "react";

import { LogoBlock } from "./Logo.styled";
import { StyledHeader } from "../../Header.styled";
import { LogoIcon } from "../../Icons/Icons.styled";

export default function Logo() {
  return (
    <LogoBlock>
      <LogoIcon />
      <StyledHeader
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          fontWeight: 500,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Productivity Tracker
      </StyledHeader>
    </LogoBlock>
  );
}
