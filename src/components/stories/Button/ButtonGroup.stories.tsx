import React from "react";

import { SmallContained, MediumContained, LargeContained } from "./Contained.stories";
import { SmallOutlined, MediumOutlined, LargeOutlined } from "./Outlined.stories";
import { SmallText, MediumText, LargeText } from "./Text.stories";
import { StyledItemBox } from "../Box/ItemBox.styled";
import { StyledGridBox } from "../Box/GridBox.styled";

export default {
  title: "Button/All",
};

export const AllButtons = () => (
  <StyledGridBox>
    <StyledItemBox>
      <SmallContained {...SmallContained.args} />
    </StyledItemBox>
    <StyledItemBox>
      <MediumContained {...MediumContained.args} />
    </StyledItemBox>
    <StyledItemBox>
      <LargeContained {...LargeContained.args} />
    </StyledItemBox>

    <StyledItemBox>
      <SmallOutlined {...SmallOutlined.args} />
    </StyledItemBox>
    <StyledItemBox>
      <MediumOutlined {...MediumOutlined.args} />
    </StyledItemBox>
    <StyledItemBox>
      <LargeOutlined {...LargeOutlined.args} />
    </StyledItemBox>

    <StyledItemBox>
      <SmallText {...SmallText.args} />
    </StyledItemBox>
    <StyledItemBox>
      <MediumText {...MediumText.args} />
    </StyledItemBox>
    <StyledItemBox>
      <LargeText {...LargeText.args} />
    </StyledItemBox>
  </StyledGridBox>
);
