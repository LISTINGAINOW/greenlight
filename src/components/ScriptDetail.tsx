'use client';

import { X, Check, Clock, FileText, Film, User, Calendar, MessageSquare, Sparkles } from 'lucide-react';
import { useState } from 'react';
import AICoverage from '@/components/AICoverage';
import type { Script, Rating } from '@/data/scripts';

interface Props {
  script: Script;
  onClose: () => void;
  onRate: (rating: Rating) => void;
  currentRating: Rating;
}

const genreColors: Record<string, string> = {
  Drama: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Comedy: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  Thriller: 'bg-red-500/20 text-red-300 border-red-500/30',
  Horror: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Sci-Fi': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  Action: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  Romance: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  Documentary: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
};

export default function ScriptDetail({ script, onClose, onRate, currentRating }: Props) {
  const [notes, setNotes] = useState(script.notes || '');
  const [showAI, setShowAI] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-midnight-600 bg-midnight-800 sm:rounded-3xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-midnight-600 bg-midnight-800/95 p-6 backdrop-blur-sm">
          <div className="flex-1 pr-4">
            <h2 className="text-2xl font-bold text-white">{script.title}</h2>
            <p className="mt-1 text-cinema-400">by {script.author}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-midnight-700"
          >
            <X className="h-5 w-5 text-midnight-300" />
          </button>
        </div>

        <div className="p-6">
          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-midnight-700 p-3">
              <div className="flex items-center gap-2 text-xs text-midnight-400">
                <Film className="h-3.5 w-3.5" />
                Genre
              </div>
              <span className={`mt-1 inline-block rounded-full border px-2.5 py-0.5 text-xs font-bold ${genreColors[script.genre] || ''}`}>
                {script.genre}
              </span>
            </div>
            <div className="rounded-xl bg-midnight-700 p-3">
              <div className="flex items-center gap-2 text-xs text-midnight-400">
                <FileText className="h-3.5 w-3.5" />
                Format
              </div>
              <p className="mt-1 text-sm font-medium text-white">{script.format} · {script.pages} pages</p>
            </div>
            <div className="rounded-xl bg-midnight-700 p-3">
              <div className="flex items-center gap-2 text-xs text-midnight-400">
                <User className="h-3.5 w-3.5" />
                Submitted by
              </div>
              <p className="mt-1 text-sm font-medium text-white">{script.submittedBy}</p>
            </div>
            <div className="rounded-xl bg-midnight-700 p-3">
              <div className="flex items-center gap-2 text-xs text-midnight-400">
                <Calendar className="h-3.5 w-3.5" />
                Date
              </div>
              <p className="mt-1 text-sm font-medium text-white">
                {new Date(script.submittedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>

          {/* Logline */}
          <div className="mt-6">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-midnight-400">Logline</h3>
            <p className="text-base leading-relaxed text-midnight-100">{script.logline}</p>
          </div>

          {/* Tone */}
          <div className="mt-5">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-midnight-400">Tone</h3>
            <p className="text-sm text-midnight-200">{script.tone}</p>
          </div>

          {/* Comparables */}
          <div className="mt-5">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-midnight-400">Comparables</h3>
            <p className="text-sm text-cinema-400">{script.comparables}</p>
          </div>

          {/* Notes */}
          <div className="mt-6">
            <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-midnight-400">
              <MessageSquare className="h-3.5 w-3.5" />
              Your Notes
            </h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes about this script..."
              className="w-full rounded-xl border border-midnight-600 bg-midnight-700 p-4 text-sm text-white placeholder-midnight-400 outline-none transition focus:border-cinema-500"
              rows={3}
            />
          </div>

          {/* AI Coverage button */}
          <button
            type="button"
            onClick={() => setShowAI(true)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-cinema-500/30 bg-cinema-500/10 py-3 text-sm font-semibold text-cinema-400 transition hover:bg-cinema-500/20"
          >
            <Sparkles className="h-4 w-4" />
            Generate AI Coverage
          </button>

          {showAI && (
            <AICoverage script={script} onClose={() => setShowAI(false)} />
          )}

          {/* Rating buttons */}
          <div className="mt-6">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-midnight-400">Your Verdict</h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => onRate('pass')}
                className={`rounded-xl py-3 text-center text-sm font-bold transition ${
                  currentRating === 'pass'
                    ? 'bg-red-500/30 text-red-300 ring-2 ring-red-500'
                    : 'bg-midnight-700 text-midnight-300 hover:bg-red-500/10 hover:text-red-400'
                }`}
              >
                🔴 Pass
              </button>
              <button
                type="button"
                onClick={() => onRate('consider')}
                className={`rounded-xl py-3 text-center text-sm font-bold transition ${
                  currentRating === 'consider'
                    ? 'bg-yellow-500/30 text-yellow-300 ring-2 ring-yellow-500'
                    : 'bg-midnight-700 text-midnight-300 hover:bg-yellow-500/10 hover:text-yellow-400'
                }`}
              >
                🟡 Consider
              </button>
              <button
                type="button"
                onClick={() => onRate('greenlight')}
                className={`rounded-xl py-3 text-center text-sm font-bold transition ${
                  currentRating === 'greenlight'
                    ? 'bg-green-500/30 text-green-300 ring-2 ring-green-500'
                    : 'bg-midnight-700 text-midnight-300 hover:bg-green-500/10 hover:text-green-400'
                }`}
              >
                🟢 Greenlight
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
