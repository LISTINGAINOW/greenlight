'use client';

import { useState } from 'react';
import { BookOpen, Clock, ChevronRight, ArrowLeft, X } from 'lucide-react';
import type { Script } from '@/data/scripts';

export type ReadingStatus = 'pipeline' | 'reading' | 'read' | 'meeting';

const STATUS_CONFIG: Record<ReadingStatus, { label: string; emoji: string; color: string; bgColor: string }> = {
  pipeline: { label: 'In Pipeline', emoji: '📋', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
  reading: { label: 'Reading', emoji: '📖', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20' },
  read: { label: 'Read', emoji: '✅', color: 'text-green-400', bgColor: 'bg-green-500/20' },
  meeting: { label: 'In Meeting', emoji: '🤝', color: 'text-cinema-400', bgColor: 'bg-cinema-500/20' },
};

const STATUSES: ReadingStatus[] = ['pipeline', 'reading', 'read', 'meeting'];

interface TrackerBadgeProps {
  status: ReadingStatus;
  onStatusChange: (status: ReadingStatus) => void;
}

export function TrackerBadge({ status, onStatusChange }: TrackerBadgeProps) {
  const [open, setOpen] = useState(false);
  const config = STATUS_CONFIG[status];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 rounded-full ${config.bgColor} px-3 py-1 text-xs font-bold ${config.color}`}
      >
        <span>{config.emoji}</span>
        {config.label}
        <ChevronRight className={`h-3 w-3 transition ${open ? 'rotate-90' : ''}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full z-50 mt-2 w-44 rounded-xl border border-midnight-600 bg-midnight-800 py-1 shadow-xl">
            {STATUSES.map((s) => {
              const c = STATUS_CONFIG[s];
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => { onStatusChange(s); setOpen(false); }}
                  className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm transition hover:bg-midnight-700 ${
                    status === s ? c.color + ' font-bold' : 'text-midnight-200'
                  }`}
                >
                  <span>{c.emoji}</span>
                  {c.label}
                  {status === s && <span className="ml-auto text-xs">✓</span>}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

interface ReadingProgressProps {
  scripts: Array<Script & { readingStatus?: ReadingStatus }>;
  onBack: () => void;
  onStatusChange: (scriptId: string, status: ReadingStatus) => void;
  onSelect: (script: Script) => void;
}

export function ReadingProgress({ scripts, onBack, onStatusChange, onSelect }: ReadingProgressProps) {
  const byStatus = STATUSES.reduce((acc, status) => {
    acc[status] = scripts.filter((s) => (s.readingStatus || 'pipeline') === status);
    return acc;
  }, {} as Record<ReadingStatus, typeof scripts>);

  return (
    <div className="min-h-screen bg-midnight-900 px-4 pb-24 pt-6">
      <div className="mx-auto max-w-lg">
        <div className="mb-6 flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-midnight-700"
          >
            <ArrowLeft className="h-5 w-5 text-midnight-300" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">Reading Progress</h1>
            <p className="text-sm text-midnight-400">{scripts.length} scripts tracked</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-8 rounded-xl bg-midnight-800 p-4">
          <div className="flex justify-between text-xs text-midnight-400">
            {STATUSES.map((s) => {
              const c = STATUS_CONFIG[s];
              return (
                <div key={s} className="text-center">
                  <div className="text-lg">{c.emoji}</div>
                  <div className={`mt-1 font-bold ${c.color}`}>{byStatus[s].length}</div>
                  <div>{c.label}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-midnight-700">
            {STATUSES.map((s) => {
              const pct = scripts.length > 0 ? (byStatus[s].length / scripts.length) * 100 : 0;
              const colors: Record<ReadingStatus, string> = {
                pipeline: 'bg-blue-500',
                reading: 'bg-yellow-500',
                read: 'bg-green-500',
                meeting: 'bg-cinema-500',
              };
              return pct > 0 ? <div key={s} className={`${colors[s]}`} style={{ width: `${pct}%` }} /> : null;
            })}
          </div>
        </div>

        {/* Kanban-style lists */}
        {STATUSES.map((status) => {
          const items = byStatus[status];
          if (items.length === 0) return null;
          const c = STATUS_CONFIG[status];

          return (
            <div key={status} className="mb-6">
              <h2 className={`mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest ${c.color}`}>
                <span>{c.emoji}</span>
                {c.label} ({items.length})
              </h2>
              <div className="space-y-2">
                {items.map((script) => (
                  <div
                    key={script.id}
                    className="flex items-center gap-3 rounded-xl border border-midnight-600 bg-midnight-800 p-3 transition hover:border-midnight-500"
                  >
                    <button type="button" onClick={() => onSelect(script)} className="flex-1 text-left">
                      <p className="text-sm font-bold text-white">{script.title}</p>
                      <p className="text-xs text-midnight-400">{script.author} · {script.genre} · {script.pages} pg</p>
                    </button>
                    <TrackerBadge
                      status={status}
                      onStatusChange={(newStatus) => onStatusChange(script.id, newStatus)}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
