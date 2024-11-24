import type { Meta, StoryObj } from '@storybook/react';

import { AnalyticCard } from '.';

const meta = {
  title: 'AnalyticCard',
  component: AnalyticCard,
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof AnalyticCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
