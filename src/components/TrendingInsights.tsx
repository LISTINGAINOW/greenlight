'use client';

import { useState } from 'react';
import { TrendingUp, X, BarChart3, Target, ArrowRight } from 'lucide-react';
import { mockScripts, type Genre } from '@/data/scripts';

interface Props {
  onClose: () => void;
}

const genreEmoji: Record<string, string> = {
  Drama: '🎭', Comedy: '😂', Thriller: '🔪', Horror: '👻',
  'Sci-Fi': '🚀', Action: '💥', Romance: '💕', Documentary: '📹',
  Animation: '✨', Musical: '🎵',
};

const trendingTopics = [
  { topic: 'AI / Tech Ethics', heat: 95, scripts: ['Ctrl+Z', 'Repo', 'The Deepfake', 'Burn Rate'] },
  { topic: 'Contained / Single-Location', heat: 88, scripts: ['Dead Air', 'Last Call', 'Blackout', 'Dopamine'] },
  { topic: 'Female-Driven', heat: 85, scripts: ['Trophy Wife', 'Halftime', 'The Understudy', 'The Nanny Cam'] },
  { topic: 'True Events / Inspired', heat: 82, scripts: ['The Translator', 'Switchboard', 'The Flood', 'Burn Rate'] },
  { topic: 'Food & Culture', heat: 78, scripts: ['Nana\'s House', 'Abuela\'s Recipes', 'Farm to Fable', 'Ghost Kitchen'] },
  { topic: 'Social Commentary', heat: 75, scripts: ['God\'s Country', 'The Good Immigrant', 'First Generation'] },
];

const budgetInsights = [
  { label: 'Micro ($0-2M)', count: mockScripts.filter(s => s.budget === 'Micro').length, color: 'bg-green-500' },
  { label: 'Low ($2-10M)', count: mockScripts.filter(s => s.budget === 'Low').length, color: 'bg-blue-500' },
  { label: 'Medium ($10-30M)', count: mockScripts.filter(s => s.budget === 'Medium').length, color: 'bg-yellow-500' },
  { label: 'High ($30M+)', count: mockScripts.filter(s => s.budget === 'High').length, color: 'bg-red-500' },
];

export default function TrendingInsights({ onClose }: Props) {
  // Genre breakdown
  const genreCounts: Record<string, number> = {};
  mockScripts.forEach(s => { genreCounts[s.genre] = (genreCounts[s.genre] || 0) + 1; });
  const sortedGenres = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]);
  const maxGenre = sortedGenres[0]?.[1] || 1;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-midnight-600 bg-midnight-800 sm:rounded-3xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-midnight-600 bg-midnight-800/95 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-cinema-400" />
            <h2 className="text-lg font-bold text-white">Industry Trends</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-midnight-700 p-2">
            <X className="h-5 w-5 text-midnight-300" />
          </button>
        </div>

        <div className="p-5 space-y-8">
          {/* Hot Topics */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cinema-400">
              <Target className="h-3.5 w-3.5" />
              Hot Topics in the Stack
            </h3>
            <div className="space-y-3">
              {trendingTopics.map((topic) => (
                <div key={topic.topic} className="rounded-xl bg-midnight-700 p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-white">{topic.topic}</p>
                    <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-[10px] font-bold text-orange-400">
                      🔥 {topic.heat}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-midnight-600">
                    <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500" style={{ width: `${topic.heat}%` }} />
                  </div>
                  <p className="mt-2 text-xs text-midnight-400">
                    {topic.scripts.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Genre Breakdown */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cinema-400">
              <BarChart3 className="h-3.5 w-3.5" />
              Genre Breakdown ({mockScripts.length} scripts)
            </h3>
            <div className="space-y-2">
              {sortedGenres.map(([genre, count]) => (
                <div key={genre} className="flex items-center gap-3">
                  <span className="w-6 text-center">{genreEmoji[genre] || '📄'}</span>
                  <span className="w-20 text-sm text-midnight-200">{genre}</span>
                  <div className="flex-1 h-4 overflow-hidden rounded-full bg-midnight-700">
                    <div
                      className="h-full rounded-full bg-green-500/60"
                      style={{ width: `${(count / maxGenre) * 100}%` }}
                    />
                  </div>
                  <span className="w-6 text-right text-sm font-bold text-midnight-300">{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Mix */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-cinema-400">
              Budget Mix
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {budgetInsights.map((b) => (
                <div key={b.label} className="rounded-xl bg-midnight-700 p-3 text-center">
                  <p className="text-2xl font-bold text-white">{b.count}</p>
                  <p className="text-xs text-midnight-400">{b.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-midnight-500">
            Based on {mockScripts.length} scripts currently in the stack
          </p>
        </div>
      </div>
    </div>
  );
}
