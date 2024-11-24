'use client';

import { CandidateCard } from '@/components/CandidateCard';
import { Loading } from '@/components/Loading';
import { CandidateFilter, CandidateType } from '@/types/candidate';
import { getApiUrl } from '@/utils/url';
import { ReactElement, useEffect, useState } from 'react';

export interface CandidatesSectionProps {
  title: string;
  description?: string | ReactElement;
  filter?: CandidateFilter;
}

export function CandidatesSection({
  title,
  description,
  filter,
}: CandidatesSectionProps) {
  const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useState<CandidateType[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(getApiUrl('/candidates', filter));
      const data: CandidateType[] = await response.json();
      setCandidates(data);
      setLoading(false);
    })();
  }, [filter]);

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      {typeof description === 'string' ? (
        <p className="my-4 text-base font-medium text-gray-600">
          {description}
        </p>
      ) : (
        description
      )}
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 xl:flex xl:flex-row">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      )}
    </section>
  );
}
