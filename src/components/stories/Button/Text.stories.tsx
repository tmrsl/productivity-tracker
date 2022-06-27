import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StyledButton } from "./Button.styled";

export default {
  title: "Button/Text",
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

export const SmallText:ComponentStory<typeof StyledButton> = Template.bind({});
SmallText.args = {
  variant: "text",
  children: "Small",
  size: "small",
};

export const MediumText:ComponentStory<typeof StyledButton> = Template.bind({});
MediumText.args = {
  variant: "text",
  children: "Medium",
  size: "medium",
};

export const LargeText:ComponentStory<typeof StyledButton> = Template.bind({});
LargeText.args = {
  variant: "text",
  children: "Large",
  size: "large",
};
