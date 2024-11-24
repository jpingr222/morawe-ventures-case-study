import { AnalyticCard } from '@/components/AnalyticCard';
import { CandidatesSection } from '@/components/CandidatesSection';

export default async function Dashboard() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] md:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <AnalyticCard />
        <CandidatesSection
          title="KI Matched Auszubildende"
          description="Immer auf den neusten Stand auf dein Profil abgestimmt"
          filter={{ isAiRecommended: true }}
        />
        <CandidatesSection
          title="Auszubildende in deiner Umgebung"
          description="Immer auf den neusten Stand auf dein Profil abgestimmt"
          filter={{ isLocal: true }}
        />
        <CandidatesSection
          title="Auszubildende in deiner Branche"
          description="Immer auf den neusten Stand auf dein Profil abgestimmt"
          filter={{ isSameIndustry: true }}
        />
        <CandidatesSection
          title="Auszubildende, welche sich beworben haben"
          description="Immer auf den neusten Stand auf dein Profil abgestimmt"
          filter={{ isApplied: true }}
        />
      </main>
    </div>
  );
}
