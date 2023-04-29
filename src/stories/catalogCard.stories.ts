import CatalogCard from "@components/UI/CatalogCard";
import { COLLARS } from '@mocks';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CatalogCard> = {
    title: 'Example/CatalogCard',
    component: CatalogCard,
  };
  
export default meta;
type Story = StoryObj<typeof CatalogCard>;

const { title, price, category } = COLLARS[0];

export const Primary: Story = {
    args: {
        image: "https://i.etsystatic.com/9993646/r/il/3e5162/2920170036/il_500x500.2920170036_oecy.jpg",
        title,
        price,
        category,
    },
  };