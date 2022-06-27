import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StyledButton } from "./Button.styled";

export default {
  title: "Button/Outlined",
  component: StyledButton,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />;

export const SmallOutlined:ComponentStory<typeof StyledButton> = Template.bind({});
SmallOutlined.args = {
  variant: "outlined",
  children: "Small",
  size: "small",
};

export const MediumOutlined:ComponentStory<typeof StyledButton> = Template.bind({});
MediumOutlined.args = {
  variant: "outlined",
  children: "Medium",
  size: "medium",
};

export const LargeOutlined:ComponentStory<typeof StyledButton> = Template.bind({});
LargeOutlined.args = {
  variant: "outlined",
  children: "Large",
  size: "large",
};
