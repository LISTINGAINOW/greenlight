'use client';

import { useState } from 'react';
import { Sparkles, Loader2, X, ThumbsUp, ThumbsDown, Minus } from 'lucide-react';
import type { Script } from '@/data/scripts';

interface Props {
  script: Script;
  onClose: () => void;
}

// Simulated AI coverage — in production this would call an LLM
function generateCoverage(script: Script) {
  const strengths: Record<string, string[]> = {
    Drama: [
      'Strong emotional core with clear character arcs',
      'Timely themes that resonate with current audiences',
      'Dual protagonist structure creates compelling tension',
    ],
    Comedy: [
      'Fresh comedic premise with built-in irony',
      'Strong ensemble potential for casting',
      'Balances humor with genuine heart',
    ],
    Thriller: [
      'Escalating tension with well-placed reveals',
      'Protagonist has clear vulnerability that drives stakes',
      'Twist-ready structure without feeling gimmicky',
    ],
    Horror: [
      'Atmospheric dread over cheap scares',
      'Psychological depth elevates the genre',
      'Strong central metaphor beneath the horror',
    ],
    'Sci-Fi': [
      'High-concept premise that\'s easy to pitch',
      'Social commentary woven naturally into the sci-fi elements',
      'Contained enough to be budget-friendly despite the genre',
    ],
    Action: [
      'Kinetic, visual storytelling that translates to screen',
      'Unique hook that differentiates from standard action fare',
      'Strong set-piece potential throughout',
    ],
    Romance: [
      'Unconventional pairing creates genuine surprise and chemistry',
      'Avoids genre clichés while honoring the emotional beats audiences want',
      'Strong voice that would attract talent',
    ],
  };

  const weaknesses: Record<string, string[]> = {
    Drama: [
      'Second act could sag without careful pacing',
      'Needs a director who can balance scope with intimacy',
    ],
    Comedy: [
      'Tone balance is tricky — could veer too broad or too dark',
      'Ensemble pieces are harder to market without a clear lead',
    ],
    Thriller: [
      'Relies heavily on the reveal — rewatchability concern',
      'Antagonist motivation needs sharpening in early pages',
    ],
    Horror: [
      'Slow-burn pacing may lose impatient audiences',
      'Marketing challenge: how to sell without spoiling',
    ],
    'Sci-Fi': [
      'VFX requirements could inflate budget if not carefully managed',
      'Concept needs to be immediately graspable in the trailer',
    ],
    Action: [
      'Character development can get lost between set pieces',
      'Needs a star attached to open — not a concept-sell alone',
    ],
    Romance: [
      'May be a tough sell for traditional rom-com audiences',
      'Age-gap dynamics require delicate handling in marketing',
    ],
  };

  const marketNotes: Record<string, string> = {
    Drama: 'Awards-season potential. Would benefit from a festival premiere strategy. Comparable budgets in the $15-25M range.',
    Comedy: 'Four-quadrant appeal with the right cast. Could open strong if the trailer lands the tone. Think $20-30M opening.',
    Thriller: 'Strong streaming play. Could also work theatrically with the right release window. Low-mid budget sweet spot.',
    Horror: 'Horror audiences are loyal and opening weekends are predictable. This has elevated-horror positioning (A24/Neon).',
    'Sci-Fi': 'Depends entirely on execution and VFX budget. If contained, could be a sleeper hit. If expanded, needs tentpole investment.',
    Action: 'International market appeal. Needs a name for foreign pre-sales. Summer release window preferred.',
    Romance: 'Streaming is hungry for rom-coms. Netflix/Amazon would likely bid. Theatrical is tougher without a star.',
  };

  return {
    strengths: strengths[script.genre] || strengths.Drama,
    weaknesses: weaknesses[script.genre] || weaknesses.Drama,
    market: marketNotes[script.genre] || marketNotes.Drama,
    score: Math.floor(Math.random() * 3) + 7, // 7-9
    recommend: script.pages < 120 ? 'CONSIDER' : 'CONSIDER WITH NOTES',
  };
}

export default function AICoverage({ script, onClose }: Props) {
  const [loading, setLoading] = useState(true);
  const [coverage, setCoverage] = useState<ReturnType<typeof generateCoverage> | null>(null);

  // Simulate AI processing delay
  useState(() => {
    const timer = setTimeout(() => {
      setCoverage(generateCoverage(script));
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-midnight-600 bg-midnight-800 sm:rounded-3xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-midnight-600 p-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-cinema-400" />
            <h2 className="text-lg font-bold text-white">AI Coverage</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-midnight-700 p-2">
            <X className="h-5 w-5 text-midnight-300" />
          </button>
        </div>

        <div className="p-6">
          {/* Script title */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">{script.title}</h3>
            <p className="text-sm text-cinema-400">by {script.author} · {script.genre} · {script.pages} pages</p>
          </div>

          {loading ? (
            <div className="flex flex-col items-center py-12">
              <Loader2 className="h-10 w-10 animate-spin text-cinema-400" />
              <p className="mt-4 text-sm text-midnight-300">Analyzing script...</p>
              <p className="mt-1 text-xs text-midnight-500">Reading logline, evaluating market fit, generating notes</p>
            </div>
          ) : coverage ? (
            <div className="space-y-6">
              {/* Score */}
              <div className="flex items-center gap-4 rounded-xl bg-midnight-700 p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 text-2xl font-bold text-green-400">
                  {coverage.score}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Script Score</p>
                  <p className="text-xs text-midnight-300">Based on logline, genre trends, and comparable analysis</p>
                </div>
                <span className="ml-auto rounded-full bg-cinema-500/20 px-3 py-1 text-xs font-bold text-cinema-400">
                  {coverage.recommend}
                </span>
              </div>

              {/* Strengths */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-green-400">
                  <ThumbsUp className="h-3.5 w-3.5" />
                  Strengths
                </h4>
                <div className="space-y-2">
                  {coverage.strengths.map((s, i) => (
                    <div key={i} className="flex gap-3 rounded-lg bg-green-500/5 p-3">
                      <span className="mt-0.5 text-green-400">+</span>
                      <p className="text-sm text-midnight-200">{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weaknesses */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400">
                  <ThumbsDown className="h-3.5 w-3.5" />
                  Concerns
                </h4>
                <div className="space-y-2">
                  {coverage.weaknesses.map((w, i) => (
                    <div key={i} className="flex gap-3 rounded-lg bg-red-500/5 p-3">
                      <span className="mt-0.5 text-red-400">−</span>
                      <p className="text-sm text-midnight-200">{w}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market notes */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cinema-400">
                  <Minus className="h-3.5 w-3.5" />
                  Market Analysis
                </h4>
                <div className="rounded-lg bg-cinema-500/5 p-3">
                  <p className="text-sm text-midnight-200">{coverage.market}</p>
                </div>
              </div>

              <p className="text-center text-xs text-midnight-500">
                AI coverage is a starting point, not a replacement for reading the script.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
