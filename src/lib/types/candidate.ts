export const CandidateState = {
  Freischalten: 'Freischalten',
  Unpassend: 'Unpassend',
  NoState: 'NoState',
} as const;

export type CandidateStateType =
  (typeof CandidateState)[keyof typeof CandidateState];

export type CandidateFilter = {
  isAiRecommended?: boolean;
  isLocal?: boolean;
  isSameIndustry?: boolean;
  isApplied?: boolean;
};

export interface CandidateType {
  id: string;
  name: string;
  avatarUrl: string;
  address: string;
  profession: string;
  education: string;
  profile: string;
  state: CandidateStateType;
  appliedPosition?: string;
  aiRecommended?: boolean;
}
