'use client';

import { ArrowLeft, RotateCcw } from 'lucide-react';
import type { Genre, Format } from '@/data/scripts';

interface Props {
  genreFilter: Genre | 'all';
  formatFilter: Format | 'all';
  onGenreChange: (v: Genre | 'all') => void;
  onFormatChange: (v: Format | 'all') => void;
  onBack: () => void;
  onReset: () => void;
  resultCount: number;
}

const genres: Array<{ value: Genre | 'all'; label: string; emoji: string }> = [
  { value: 'all', label: 'All Genres', emoji: '🎬' },
  { value: 'Drama', label: 'Drama', emoji: '🎭' },
  { value: 'Comedy', label: 'Comedy', emoji: '😂' },
  { value: 'Thriller', label: 'Thriller', emoji: '🔪' },
  { value: 'Horror', label: 'Horror', emoji: '👻' },
  { value: 'Sci-Fi', label: 'Sci-Fi', emoji: '🚀' },
  { value: 'Action', label: 'Action', emoji: '💥' },
  { value: 'Romance', label: 'Romance', emoji: '💕' },
  { value: 'Animation', label: 'Animation', emoji: '✨' },
  { value: 'Musical', label: 'Musical', emoji: '🎵' },
];

const formats: Array<{ value: Format | 'all'; label: string }> = [
  { value: 'all', label: 'All Formats' },
  { value: 'Feature', label: '🎬 Feature' },
  { value: 'Pilot', label: '📺 Pilot' },
  { value: 'Short', label: '🎞️ Short' },
  { value: 'Limited Series', label: '📖 Limited Series' },
];

export default function FilterDrawer({
  genreFilter,
  formatFilter,
  onGenreChange,
  onFormatChange,
  onBack,
  onReset,
  resultCount,
}: Props) {
  return (
    <div className="min-h-screen bg-midnight-900 px-4 pb-24 pt-6">
      <div className="mx-auto max-w-lg">
        <div className="mb-8 flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-midnight-700"
          >
            <ArrowLeft className="h-5 w-5 text-midnight-300" />
          </button>
          <h1 className="text-2xl font-bold text-white">Filters</h1>
          <button
            type="button"
            onClick={onReset}
            className="ml-auto flex items-center gap-1.5 text-sm font-medium text-cinema-400 hover:text-cinema-300"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>

        {/* Genre */}
        <div className="mb-8">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-midnight-400">Genre</h2>
          <div className="grid grid-cols-2 gap-2">
            {genres.map((g) => (
              <button
                key={g.value}
                type="button"
                onClick={() => onGenreChange(g.value)}
                className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition ${
                  genreFilter === g.value
                    ? 'border-green-500 bg-green-500/10 text-green-400'
                    : 'border-midnight-600 bg-midnight-800 text-midnight-200 hover:border-midnight-500'
                }`}
              >
                <span>{g.emoji}</span>
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Format */}
        <div className="mb-8">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-midnight-400">Format</h2>
          <div className="flex flex-wrap gap-2">
            {formats.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => onFormatChange(f.value)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  formatFilter === f.value
                    ? 'bg-green-500 text-white'
                    : 'bg-midnight-700 text-midnight-300 hover:bg-midnight-600'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Apply */}
        <div className="fixed bottom-0 left-0 right-0 border-t border-midnight-700 bg-midnight-900/90 p-4 backdrop-blur-sm safe-bottom">
          <button
            type="button"
            onClick={onBack}
            className="w-full rounded-2xl bg-green-500 py-4 text-lg font-semibold text-white transition hover:bg-green-600"
          >
            Show {resultCount} {resultCount === 1 ? 'script' : 'scripts'}
          </button>
        </div>
      </div>
    </div>
  );
}
