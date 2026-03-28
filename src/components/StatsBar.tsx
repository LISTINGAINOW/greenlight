'use client';

interface Props {
  total: number;
  reviewed: number;
  greenlit: number;
  passed: number;
}

export default function StatsBar({ total, reviewed, greenlit, passed }: Props) {
  const progress = total > 0 ? (reviewed / total) * 100 : 0;

  return (
    <div className="mx-4 mt-1">
      {/* Progress bar */}
      <div className="relative h-1.5 overflow-hidden rounded-full bg-midnight-700">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-green-500 to-cinema-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-1.5 flex items-center justify-between text-xs text-midnight-400">
        <span>{reviewed}/{total} reviewed</span>
        <div className="flex gap-3">
          <span className="text-green-400">🟢 {greenlit}</span>
          <span className="text-red-400">🔴 {passed}</span>
        </div>
      </div>
    </div>
  );
}
