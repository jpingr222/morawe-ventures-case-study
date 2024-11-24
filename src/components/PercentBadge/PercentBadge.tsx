export interface PercentBadgeProps {
  ratio: number;
  showArrow?: boolean;
  alwaysShowSign?: boolean;
}

export function PercentBadge({
  ratio,
  showArrow = false,
  alwaysShowSign = false,
}: PercentBadgeProps) {
  const numberFormat = new Intl.NumberFormat('de-DE', {
    style: 'percent',
    maximumFractionDigits: 2,
    signDisplay: alwaysShowSign ? 'always' : 'auto',
  });

  return (
    <span
      className={[
        'rounded-md px-3 py-1 text-xs font-medium',
        ratio < 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800',
      ].join(' ')}
    >
      {showArrow ? (ratio < 0 ? '\u2193 ' : '\u2191 ') : ''}
      {numberFormat.format(ratio)}
    </span>
  );
}
