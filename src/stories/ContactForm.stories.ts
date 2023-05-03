import ContactForm from "@components/ContactsForm";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ContactForm> = {
    title: 'Example/ContactForm',
    component: ContactForm,
  };
  
export default meta;
type Story = StoryObj<typeof ContactForm>;


export const Primary: Story = {};