import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box } from "../components/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Box",
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const DefaultStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultStory.args = {};
