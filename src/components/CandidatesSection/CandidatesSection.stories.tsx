import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, Mock, spyOn, within } from '@storybook/test';

import { CandidateType } from '@/types/candidate';
import { CandidatesSection } from '.';

const mockCandidates: CandidateType[] = [
  {
    id: '1',
    name: 'Martina',
    avatarUrl: '/avatar1.png',
    address: '60462, Königstein im Taunus',
    education: 'Abitur',
    profession: 'Handwerk',
    profile:
      'Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.',
    state: 'NoState',
  },
  {
    id: '2',
    name: 'Nils',
    avatarUrl: '/avatar3.png',
    address: '63189, Schmitten im Taunus',
    education: 'Fachabitur',
    profession: 'Handwerk',
    profile:
      'Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.',
    state: 'NoState',
  },
  {
    id: '3',
    name: 'Ralph',
    avatarUrl: '/avatar4.png',
    address: '60479, Glashütten im Taunus',
    education: 'Realabschluss',
    profession: 'Handwerk',
    profile:
      'Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.',
    state: 'NoState',
  },
  {
    id: '4',
    name: 'Nina',
    avatarUrl: '/avatar2.png',
    address: '60342, Kelkheim am Taunus',
    education: 'Abitur',
    profession: 'Handwerk',
    profile:
      'Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.',
    state: 'NoState',
  },
];

const meta = {
  title: 'CandidatesSection',
  component: CandidatesSection,
  parameters: {
    docs: {
      description: {
        component:
          'A collection of cards displays basic information of candidates.',
      },
    },
  },
  args: {
    title: 'KI Matched Auszubildende',
    description: 'Immer auf den neusten Stand auf dein Profil abgestimmt',
  },
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
      description: 'The section heading for the collection of candidates',
    },
    description: {
      control: {
        type: 'text',
      },
      description: 'The description of the current section',
    },
    filter: {
      control: {
        type: 'object',
      },
      description:
        'The filter applied to select candidates in the current category',
    },
  },
  async beforeEach() {
    spyOn(global, 'fetch').mockImplementation(
      fn((url: string) => {
        const searchParams = new URLSearchParams(url.split('?')[1]);
        const candidates =
          searchParams.get('isApplied') === 'true'
            ? mockCandidates.map((info) => ({
                ...info,
                appliedPosition: 'Ausbildung zum Dachdecker',
              }))
            : mockCandidates;

        return Promise.resolve({
          json: () => Promise.resolve(candidates),
        });
      }) as Mock,
    );
  },
} satisfies Meta<typeof CandidatesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sectionHeading = canvas.getByRole('heading');
    expect(sectionHeading).toHaveTextContent('KI Matched Auszubildende');

    const candidates = await canvas.findAllByRole('article');
    expect(candidates.length).toEqual(4);
  },
};

export const FilterCandidates: Story = {
  args: {
    filter: {
      isApplied: true,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const positions = await canvas.findAllByText('Ausbildung zum Dachdecker');

    expect(positions.length).toEqual(4);
  },
};
