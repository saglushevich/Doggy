import type { Meta, StoryObj } from '@storybook/react';

import Discount from "../components/UI/Discount";

const meta: Meta<typeof Discount> = {
    title: 'Example/Discrount',
    component: Discount,
  };
  
export default meta;
type Story = StoryObj<typeof Discount>;


export const Primary: Story = {};