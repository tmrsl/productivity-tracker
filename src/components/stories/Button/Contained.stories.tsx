import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StyledButton } from "./Button.styled";

export default {
  title: "Button/ContainedButton",
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

export const SmallContained:ComponentStory<typeof StyledButton> = Template.bind({});
SmallContained.args = {
  variant: "contained",
  children: "Small",
  size: "small",
};

export const MediumContained:ComponentStory<typeof StyledButton> = Template.bind({});
MediumContained.args = {
  variant: "contained",
  children: "Medium",
  size: "medium",
};

export const LargeContained:ComponentStory<typeof StyledButton> = Template.bind({});
LargeContained.args = {
  variant: "contained",
  children: "Large",
  size: "large",
};
