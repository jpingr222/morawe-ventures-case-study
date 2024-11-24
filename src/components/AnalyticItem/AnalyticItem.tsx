import { PercentBadge } from '@/components/PercentBadge';
import { PercentBadgeProps } from '@/components/PercentBadge/PercentBadge';
import { IoInformationCircleSharp } from 'react-icons/io5';

export interface AnalyticItemProps {
  title: string;
  value: number;
  hint?: string;
  badgeProps: PercentBadgeProps;
}

export function AnalyticItem({
  title,
  value,
  hint,
  badgeProps,
}: AnalyticItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-base font-semibold text-gray-600">{title}</h3>
      <p className="flex items-center gap-2 text-3xl font-semibold text-gray-800">
        {value}
        <PercentBadge {...badgeProps} />
      </p>
      {hint && (
        <p className="flex items-center gap-1 text-xs font-normal text-gray-400">
          <IoInformationCircleSharp />
          {hint}
        </p>
      )}
    </div>
  );
}
