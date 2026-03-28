'use client';

import { ArrowLeft, Check, Clock, FileText, Star, Trash2, Share2 } from 'lucide-react';
import { useState } from 'react';
import SharePipeline from '@/components/SharePipeline';
import type { Script, Rating } from '@/data/scripts';

interface Props {
  scripts: Script[];
  onBack: () => void;
  onSelect: (script: Script) => void;
  onRemove: (id: string) => void;
}

const ratingBadge: Record<string, { label: string; className: string }> = {
  greenlight: { label: '🟢 Greenlit', className: 'bg-green-500/20 text-green-300' },
  consider: { label: '🟡 Consider', className: 'bg-yellow-500/20 text-yellow-300' },
  pass: { label: '🔴 Passed', className: 'bg-red-500/20 text-red-300' },
};

const genreEmoji: Record<string, string> = {
  Drama: '🎭',
  Comedy: '😂',
  Thriller: '🔪',
  Horror: '👻',
  'Sci-Fi': '🚀',
  Action: '💥',
  Romance: '💕',
  Documentary: '📹',
};

export default function GreenlitList({ scripts, onBack, onSelect, onRemove }: Props) {
  const [showShare, setShowShare] = useState(false);
  const greenlit = scripts.filter((s) => s.rating === 'greenlight');
  const considering = scripts.filter((s) => s.rating === 'consider');

  return (
    <div className="min-h-screen bg-midnight-900 px-4 pb-24 pt-6">
      <div className="mx-auto max-w-lg">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-midnight-700"
          >
            <ArrowLeft className="h-5 w-5 text-midnight-300" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">Your Pipeline</h1>
            <p className="text-sm text-midnight-400">
              {greenlit.length} greenlit · {considering.length} considering
            </p>
          </div>
          {scripts.length > 0 && (
            <button
              type="button"
              onClick={() => setShowShare(true)}
              className="ml-auto flex items-center gap-1.5 rounded-full bg-midnight-700 px-3 py-2 text-sm text-midnight-300 transition hover:bg-midnight-600 hover:text-white"
            >
              <Share2 className="h-4 w-4" />
              Share
            </button>
          )}
        </div>

        {scripts.length === 0 ? (
          <div className="mt-20 text-center">
            <div className="text-6xl">🎬</div>
            <h2 className="mt-4 text-xl font-semibold text-midnight-200">No scripts yet</h2>
            <p className="mt-2 text-midnight-400">Swipe right on scripts to add them to your pipeline!</p>
            <button
              type="button"
              onClick={onBack}
              className="mt-6 rounded-2xl bg-green-500 px-8 py-3 font-semibold text-white hover:bg-green-600"
            >
              Start Reading
            </button>
          </div>
        ) : (
          <>
            {/* Greenlit section */}
            {greenlit.length > 0 && (
              <div className="mb-8">
                <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-green-400">
                  <Check className="h-4 w-4" />
                  Greenlit ({greenlit.length})
                </h2>
                <div className="space-y-3">
                  {greenlit.map((script) => (
                    <ScriptRow key={script.id} script={script} onSelect={onSelect} onRemove={onRemove} />
                  ))}
                </div>
              </div>
            )}

            {/* Considering section */}
            {considering.length > 0 && (
              <div>
                <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-yellow-400">
                  <Clock className="h-4 w-4" />
                  Considering ({considering.length})
                </h2>
                <div className="space-y-3">
                  {considering.map((script) => (
                    <ScriptRow key={script.id} script={script} onSelect={onSelect} onRemove={onRemove} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {showShare && (
        <SharePipeline scripts={scripts} onClose={() => setShowShare(false)} />
      )}
    </div>
  );
}

function ScriptRow({
  script,
  onSelect,
  onRemove,
}: {
  script: Script;
  onSelect: (s: Script) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div
      className="cursor-pointer rounded-xl border border-midnight-600 bg-midnight-800 p-4 transition hover:border-midnight-500"
      onClick={() => onSelect(script)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-lg">{genreEmoji[script.genre] || '📄'}</span>
            <h3 className="text-base font-bold text-white">{script.title}</h3>
          </div>
          <p className="mt-0.5 text-sm text-cinema-400">{script.author}</p>
          <p className="mt-1.5 line-clamp-2 text-sm text-midnight-300">{script.logline}</p>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-xs text-midnight-400">{script.format} · {script.pages} pg</span>
            <span className="text-xs text-midnight-400">via {script.submittedBy}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(script.id);
          }}
          className="shrink-0 p-1 text-midnight-500 hover:text-red-400"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
