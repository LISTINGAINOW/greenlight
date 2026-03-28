'use client';

import { useState, useCallback } from 'react';
import { BookOpen, RotateCcw, SlidersHorizontal, BarChart3 } from 'lucide-react';
import ScriptCard from '@/components/ScriptCard';
import ScriptDetail from '@/components/ScriptDetail';
import GreenlitList from '@/components/GreenlitList';
import FilterDrawer from '@/components/FilterDrawer';
import StatsBar from '@/components/StatsBar';
import { mockScripts, Script, Rating, Genre, Format } from '@/data/scripts';

type View = 'swipe' | 'pipeline' | 'filters';

export default function Home() {
  const [view, setView] = useState<View>('swipe');
  const [greenlit, setGreenlit] = useState<Script[]>([]);
  const [passed, setPassed] = useState<string[]>([]);
  const [detailScript, setDetailScript] = useState<Script | null>(null);
  const [genreFilter, setGenreFilter] = useState<Genre | 'all'>('all');
  const [formatFilter, setFormatFilter] = useState<Format | 'all'>('all');

  const filteredScripts = mockScripts.filter((s) => {
    if (genreFilter !== 'all' && s.genre !== genreFilter) return false;
    if (formatFilter !== 'all' && s.format !== formatFilter) return false;
    if (greenlit.some((g) => g.id === s.id)) return false;
    if (passed.includes(s.id)) return false;
    return true;
  });

  const handleSwipeRight = useCallback(() => {
    const script = filteredScripts[0];
    if (script) {
      setGreenlit((prev) => [...prev, { ...script, rating: 'greenlight' as Rating }]);
    }
  }, [filteredScripts]);

  const handleSwipeLeft = useCallback(() => {
    const script = filteredScripts[0];
    if (script) {
      setPassed((prev) => [...prev, script.id]);
    }
  }, [filteredScripts]);

  const handleUndo = () => {
    if (passed.length > 0) {
      setPassed((prev) => prev.slice(0, -1));
    }
  };

  const handleRemoveGreenlit = (id: string) => {
    setGreenlit((prev) => prev.filter((s) => s.id !== id));
  };

  const handleRate = (scriptId: string, rating: Rating) => {
    setGreenlit((prev) =>
      prev.map((s) => (s.id === scriptId ? { ...s, rating } : s))
    );
  };

  const resetAll = () => {
    setPassed([]);
  };

  const totalReviewed = greenlit.length + passed.length;

  if (view === 'pipeline') {
    return (
      <GreenlitList
        scripts={greenlit}
        onBack={() => setView('swipe')}
        onSelect={(s) => setDetailScript(s)}
        onRemove={handleRemoveGreenlit}
      />
    );
  }

  if (view === 'filters') {
    return (
      <FilterDrawer
        genreFilter={genreFilter}
        formatFilter={formatFilter}
        onGenreChange={setGenreFilter}
        onFormatChange={setFormatFilter}
        onBack={() => setView('swipe')}
        onReset={() => {
          setGenreFilter('all');
          setFormatFilter('all');
        }}
        resultCount={mockScripts.filter((s) => {
          if (genreFilter !== 'all' && s.genre !== genreFilter) return false;
          if (formatFilter !== 'all' && s.format !== formatFilter) return false;
          return true;
        }).length}
      />
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-midnight-900">
      {/* Header */}
      <header className="flex items-center justify-between px-5 pb-2 pt-4">
        <button
          type="button"
          onClick={() => setView('filters')}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-midnight-700 transition hover:bg-midnight-600"
        >
          <SlidersHorizontal className="h-5 w-5 text-midnight-300" />
        </button>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-400">🟢 GreenLight</h1>
        </div>
        <button
          type="button"
          onClick={() => setView('pipeline')}
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-midnight-700 transition hover:bg-midnight-600"
        >
          <BookOpen className={`h-5 w-5 ${greenlit.length > 0 ? 'text-green-400' : 'text-midnight-300'}`} />
          {greenlit.length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">
              {greenlit.length}
            </span>
          )}
        </button>
      </header>

      {/* Stats bar */}
      <StatsBar total={mockScripts.length} reviewed={totalReviewed} greenlit={greenlit.length} passed={passed.length} />

      {/* Card stack */}
      <main className="flex flex-1 items-center justify-center px-4 py-4">
        <div className="relative h-[520px] w-full max-w-[400px]">
          {filteredScripts.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-midnight-600 bg-midnight-800 p-8 text-center">
              <div className="text-6xl">🎬</div>
              <h2 className="mt-4 text-2xl font-bold text-white">Stack cleared!</h2>
              <p className="mt-2 text-midnight-300">
                {greenlit.length > 0
                  ? `${greenlit.length} script${greenlit.length === 1 ? '' : 's'} in your pipeline.`
                  : 'No more scripts. Try changing your filters.'}
              </p>
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={resetAll}
                  className="flex items-center gap-2 rounded-2xl bg-midnight-700 px-6 py-3 font-semibold text-midnight-200 hover:bg-midnight-600"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reset
                </button>
                {greenlit.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setView('pipeline')}
                    className="flex items-center gap-2 rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
                  >
                    <BookOpen className="h-4 w-4" />
                    Pipeline
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              {filteredScripts[1] && (
                <div className="absolute inset-0 scale-[0.95] opacity-40">
                  <ScriptCard
                    script={filteredScripts[1]}
                    onSwipeLeft={() => {}}
                    onSwipeRight={() => {}}
                    onInfo={() => {}}
                    isTop={false}
                  />
                </div>
              )}
              <ScriptCard
                key={filteredScripts[0].id}
                script={filteredScripts[0]}
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
                onInfo={() => setDetailScript(filteredScripts[0])}
                isTop={true}
              />
            </>
          )}
        </div>
      </main>

      {/* Bottom bar */}
      <footer className="flex items-center justify-center gap-6 px-5 pb-6 pt-2">
        {passed.length > 0 && (
          <button
            type="button"
            onClick={handleUndo}
            className="flex items-center gap-1.5 text-sm font-medium text-midnight-400 hover:text-midnight-200"
          >
            <RotateCcw className="h-4 w-4" />
            Undo
          </button>
        )}
        <p className="text-sm text-midnight-500">
          {filteredScripts.length} in stack
        </p>
      </footer>

      {/* Detail modal */}
      {detailScript && (
        <ScriptDetail
          script={detailScript}
          onClose={() => setDetailScript(null)}
          onRate={(rating) => {
            const existing = greenlit.find((g) => g.id === detailScript.id);
            if (existing) {
              handleRate(detailScript.id, rating);
            } else if (rating === 'greenlight' || rating === 'consider') {
              setGreenlit((prev) => [...prev, { ...detailScript, rating }]);
              setPassed((prev) => prev.filter((id) => id !== detailScript.id));
            }
          }}
          currentRating={greenlit.find((g) => g.id === detailScript.id)?.rating || null}
        />
      )}
    </div>
  );
}
