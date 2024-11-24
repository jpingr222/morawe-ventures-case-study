import { CandidateState, CandidateType } from '@/types/candidate';

const generalCandidate: Pick<
  CandidateType,
  'profession' | 'profile' | 'state'
> = {
  profession: 'Handwerk',
  profile:
    'Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.',
  state: CandidateState.NoState,
};

let id = 0;
function createCandidate(
  name: CandidateType['name'],
  avatarUrl: CandidateType['avatarUrl'],
  address: CandidateType['address'],
  education: CandidateType['education'],
  optional?: Partial<
    Pick<CandidateType, 'state' | 'appliedPosition' | 'aiRecommended'>
  >,
): CandidateType {
  id++;
  return {
    ...generalCandidate,
    id: id.toString(),
    name,
    avatarUrl,
    address,
    education,
    state: optional?.state ?? CandidateState.NoState,
    appliedPosition: optional?.appliedPosition,
    aiRecommended: optional?.aiRecommended,
  };
}

export const aiRecommendedCandidates: CandidateType[] = [
  createCandidate(
    'Martina',
    '/avatar1.png',
    '60462, Königstein im Taunus',
    'Abitur',
  ),
  createCandidate(
    'Nils',
    '/avatar3.png',
    '63189, Schmitten im Taunus',
    'Fachabitur',
  ),
  createCandidate(
    'Ralph',
    '/avatar4.png',
    '60479, Glashütten im Taunus',
    'Realabschluss',
  ),
  createCandidate(
    'Nina',
    '/avatar2.png',
    '60342, Kelkheim am Taunus',
    'Abitur',
  ),
];

export const localCandidates: CandidateType[] = [
  ['Karl', '/avatar3.png'],
  ['Norbert', '/avatar4.png'],
  ['Bertha', '/avatar1.png'],
  ['Yasmin', '/avatar2.png'],
].map((candidate) =>
  createCandidate(
    candidate[0],
    candidate[1],
    '60329, Frankfurt am Main',
    'Realabschluss',
  ),
);

export const sameIndustryCandidates: CandidateType[] = [
  createCandidate(
    'Karina',
    '/avatar2.png',
    '63189, Schmitten im Taunus',
    'Hauptschulabschluss',
  ),
  createCandidate(
    'Martin',
    '/avatar3.png',
    '63189, Schmitten im Taunus',
    'Hauptschulabschluss',
  ),
  createCandidate(
    'Thomas',
    '/avatar4.png',
    '60662, Bad Homburg',
    'Hauptschulabschluss',
  ),
  createCandidate(
    'Linus',
    '/avatar4.png',
    '60344, Oberursel am Taunus',
    'Realabschluss',
  ),
];

export const appliedCandidates: CandidateType[] = [
  ['Tim', '/avatar4.png'],
  ['Nicola', '/avatar2.png'],
  ['Marc', '/avatar3.png'],
  ['Maya', '/avatar1.png'],
].map((candidate) =>
  createCandidate(
    candidate[0],
    candidate[1],
    '60329, Frankfurt am Main',
    'Realabschluss',
    {
      appliedPosition: 'Ausbildung zum Dachdecker',
    },
  ),
);

export const candidates: CandidateType[] = [
  ...aiRecommendedCandidates,
  ...localCandidates,
  ...sameIndustryCandidates,
  ...appliedCandidates,
];
