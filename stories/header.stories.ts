import PageHeader from "@components/UI/PageHeader";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PageHeader> = {
    title: 'Example/PageHeader',
    component: PageHeader,
  };
  
export default meta;
type Story = StoryObj<typeof PageHeader>;


export const Primary: Story = {
    args: {
        title: "The Bark Chronicles",
        subtitle: "Where To Read All About The Bark!"
    },
  };