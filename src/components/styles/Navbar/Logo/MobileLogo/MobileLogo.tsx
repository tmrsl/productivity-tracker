import React from "react";

import { IconButton } from "@mui/material";
import { MobileLogoBlock } from "./MobileLogo.styled";
import { LogoIcon } from "../../../Icons/Icons.styled";

export const MobileLogo = () => {
  return (
    <MobileLogoBlock>
      <IconButton>
        <LogoIcon />
      </IconButton>
    </MobileLogoBlock>
  );
};
