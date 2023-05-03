import SignUp from "@components/UI/SignUp";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SignUp> = {
    title: 'Example/SignUp',
    component: SignUp,
  };
  
export default meta;
type Story = StoryObj<typeof SignUp>;


export const Primary: Story = {};