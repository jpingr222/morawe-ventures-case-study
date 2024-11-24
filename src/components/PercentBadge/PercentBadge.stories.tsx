import type { Meta, StoryObj } from '@storybook/react';

import { PercentBadge } from '.';

const meta = {
  title: 'PercentBadge',
  component: PercentBadge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PercentBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PositiveWithSign: Story = {
  args: {
    ratio: 0.0124,
    alwaysShowSign: true,
  },
};

export const PositiveWithArrowAndSign: Story = {
  args: {
    ratio: 0.0124,
    showArrow: true,
    alwaysShowSign: true,
  },
};

export const NegativeWithArrow: Story = {
  args: {
    ratio: -0.024,
    showArrow: true,
  },
};

export const NegativeWithoutArrow: Story = {
  args: {
    ratio: -0.024,
  },
};
