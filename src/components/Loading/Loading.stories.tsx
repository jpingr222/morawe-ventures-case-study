import type { Meta, StoryObj } from '@storybook/react';

import { Loading } from '.';

const meta = {
  title: 'Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A loading indicator provides visual feedback to users.',
      },
    },
  },
  args: {},
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
