import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { CandidateState } from '@/types/candidate';
import { CandidateCard } from '.';

const meta = {
  title: 'CandidateCard',
  component: CandidateCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A card displays basic information of a candidate.',
      },
    },
  },
  args: {
    candidate: {
      id: '1',
      name: 'Martina',
      avatarUrl: '/avatar1.png',
      address: '60462, Königstein im Taunus',
      profession: 'Handwerk',
      education: 'Abitur',
      profile:
        'Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.',
      state: CandidateState.NoState,
    },
  },
  argTypes: {
    candidate: {
      control: {
        type: 'object',
      },
      description: 'Information of a candidate to display on the card',
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-xs">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CandidateCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Candidate: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cardTitle = canvas.getByRole('heading');
    expect(cardTitle).toHaveTextContent('Martina');
  },
};

export const AppliedCandidate: Story = {
  args: {
    candidate: {
      ...meta.args.candidate,
      appliedPosition: 'Ausbildung zum Dachdecker',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const appliedPosition = canvas.getByText('Ausbildung zum Dachdecker');
    expect(appliedPosition).toBeInTheDocument();
  },
};
