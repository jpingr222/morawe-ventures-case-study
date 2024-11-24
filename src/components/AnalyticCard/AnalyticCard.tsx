import { AnalyticItem } from '../AnalyticItem';

export function AnalyticCard() {
  return (
    <div className="flex w-full flex-col justify-center gap-4 rounded-xl border border-gray-300 px-4 py-7 shadow-md md:grid md:grid-cols-2 xl:flex xl:flex-row xl:gap-12">
      <AnalyticItem
        title="Besucher"
        value={26}
        hint="vs letzten Monat"
        badgeProps={{
          ratio: 0.014,
          showArrow: true,
        }}
      />
      <AnalyticItem
        title="Profi freigeschaltet"
        value={10}
        hint="vs letzten Monat"
        badgeProps={{
          ratio: 0.014,
          showArrow: true,
        }}
      />
      <AnalyticItem
        title="Stellenanzeigen besucher"
        value={400}
        hint="vs letzten Monat"
        badgeProps={{
          ratio: 0.014,
          showArrow: true,
        }}
      />
      <AnalyticItem
        title="Neue Auszubildende"
        value={130}
        hint="vs letzten Monat"
        badgeProps={{
          ratio: 0.014,
          showArrow: true,
        }}
      />
    </div>
  );
}
