'use client';

import { BarChart3, Clock, TrendingUp, Zap } from 'lucide-react';
import type { Script } from '@/data/scripts';

interface Props {
  greenlit: Script[];
  passed: number;
  total: number;
}

export default function QuickStats({ greenlit, passed, total }: Props) {
  const reviewed = greenlit.length + passed;
  const greenlitRate = reviewed > 0 ? Math.round((greenlit.length / reviewed) * 100) : 0;

  // Top genre
  const genreCounts: Record<string, number> = {};
  greenlit.forEach((s) => {
    genreCounts[s.genre] = (genreCounts[s.genre] || 0) + 1;
  });
  const topGenre = Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0];

  // Average page count
  const avgPages = greenlit.length > 0
    ? Math.round(greenlit.reduce((sum, s) => sum + s.pages, 0) / greenlit.length)
    : 0;

  if (reviewed < 3) return null;

  return (
    <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
      <div className="rounded-xl bg-midnight-800 p-3">
        <div className="flex items-center gap-1.5 text-xs text-midnight-400">
          <TrendingUp className="h-3 w-3" />
          Approve rate
        </div>
        <p className="mt-1 text-lg font-bold text-green-400">{greenlitRate}%</p>
      </div>
      <div className="rounded-xl bg-midnight-800 p-3">
        <div className="flex items-center gap-1.5 text-xs text-midnight-400">
          <Zap className="h-3 w-3" />
          Reviewed
        </div>
        <p className="mt-1 text-lg font-bold text-cinema-400">{reviewed}/{total}</p>
      </div>
      {topGenre && (
        <div className="rounded-xl bg-midnight-800 p-3">
          <div className="flex items-center gap-1.5 text-xs text-midnight-400">
            <BarChart3 className="h-3 w-3" />
            Top genre
          </div>
          <p className="mt-1 text-sm font-bold text-white">{topGenre[0]}</p>
        </div>
      )}
      <div className="rounded-xl bg-midnight-800 p-3">
        <div className="flex items-center gap-1.5 text-xs text-midnight-400">
          <Clock className="h-3 w-3" />
          Avg pages
        </div>
        <p className="mt-1 text-lg font-bold text-white">{avgPages || '—'}</p>
      </div>
    </div>
  );
}
