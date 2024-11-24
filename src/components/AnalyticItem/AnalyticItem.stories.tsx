import type { Meta, StoryObj } from '@storybook/react';

import { AnalyticItem } from '.';

const meta = {
  title: 'AnalyticItem',
  component: AnalyticItem,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Besucher',
    value: 26,
    hint: 'vs letzten Monat',
    ratio: 0.014,
    showArrow: true,
  },
} satisfies Meta<typeof AnalyticItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
