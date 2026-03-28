'use client';

import { Sparkles } from 'lucide-react';
import { mockScripts, type Script } from '@/data/scripts';

interface Props {
  script: Script;
  onSelect: (script: Script) => void;
  greenlitIds: string[];
}

function getSimilar(script: Script, greenlitIds: string[]): Script[] {
  const candidates = mockScripts.filter(s => s.id !== script.id && !greenlitIds.includes(s.id));

  const scored = candidates.map(candidate => {
    let score = 0;
    // Same genre = 3 pts
    if (candidate.genre === script.genre) score += 3;
    // Same format = 2 pts
    if (candidate.format === script.format) score += 2;
    // Same budget = 1 pt
    if (candidate.budget && script.budget && candidate.budget === script.budget) score += 1;
    // Overlapping tags = 1 pt each
    if (candidate.tags && script.tags) {
      const overlap = candidate.tags.filter(t => script.tags!.includes(t)).length;
      score += overlap * 1.5;
    }
    // Similar page count (within 15 pages)
    if (Math.abs(candidate.pages - script.pages) <= 15) score += 0.5;
    return { script: candidate, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .filter(s => s.score > 0)
    .map(s => s.script);
}

const genreEmoji: Record<string, string> = {
  Drama: '🎭', Comedy: '😂', Thriller: '🔪', Horror: '👻',
  'Sci-Fi': '🚀', Action: '💥', Romance: '💕', Documentary: '📹',
  Animation: '✨', Musical: '🎵',
};

export default function SimilarScripts({ script, onSelect, greenlitIds }: Props) {
  const similar = getSimilar(script, greenlitIds);

  if (similar.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cinema-400">
        <Sparkles className="h-3.5 w-3.5" />
        If you liked this, try
      </h3>
      <div className="space-y-2">
        {similar.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(s)}
            className="flex w-full items-center gap-3 rounded-xl border border-midnight-600 bg-midnight-700 p-3 text-left transition hover:border-midnight-500"
          >
            <span className="text-xl">{genreEmoji[s.genre] || '📄'}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">{s.title}</p>
              <p className="text-xs text-midnight-400">{s.author} · {s.genre} · {s.pages} pg</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
