import Navigation from "@components/UI/Navigation";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navigation> = {
    title: 'Example/Menu',
    component: Navigation,
  };
  
export default meta;
type Story = StoryObj<typeof Navigation>;


export const Primary: Story = {
    args: {
        menuStatus: false
    },
  };