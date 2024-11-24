import { CandidateFilter } from '@/types/candidate';
import { type NextRequest } from 'next/server';
import {
  aiRecommendedCandidates,
  appliedCandidates,
  candidates,
  localCandidates,
  sameIndustryCandidates,
} from './data';

function parseSearchParams(searchParams: URLSearchParams): CandidateFilter {
  const isAiRecommended = searchParams.get('isAiRecommended');
  const isLocal = searchParams.get('isLocal');
  const isSameIndustry = searchParams.get('isSameIndustry');
  const isApplied = searchParams.get('isApplied');

  return {
    isAiRecommended: isAiRecommended === 'true',
    isLocal: isLocal === 'true',
    isSameIndustry: isSameIndustry === 'true',
    isApplied: isApplied === 'true',
  };
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const candidateFilter = parseSearchParams(searchParams);

  if (
    candidateFilter.isAiRecommended ||
    candidateFilter.isLocal ||
    candidateFilter.isSameIndustry ||
    candidateFilter.isApplied
  ) {
    const json = JSON.stringify([
      ...(candidateFilter.isAiRecommended ? aiRecommendedCandidates : []),
      ...(candidateFilter.isLocal ? localCandidates : []),
      ...(candidateFilter.isSameIndustry ? sameIndustryCandidates : []),
      ...(candidateFilter.isApplied ? appliedCandidates : []),
    ]);

    return new Response(json);
  }

  return new Response(JSON.stringify(candidates));
}
