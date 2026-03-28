'use client';

import { useState } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { Check, X, Info, Clock, FileText, Film } from 'lucide-react';
import type { Script } from '@/data/scripts';

interface Props {
  script: Script;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onInfo: () => void;
  isTop: boolean;
}

const genreColors: Record<string, string> = {
  Drama: 'bg-blue-500/20 text-blue-300',
  Comedy: 'bg-yellow-500/20 text-yellow-300',
  Thriller: 'bg-red-500/20 text-red-300',
  Horror: 'bg-purple-500/20 text-purple-300',
  'Sci-Fi': 'bg-cyan-500/20 text-cyan-300',
  Action: 'bg-orange-500/20 text-orange-300',
  Romance: 'bg-pink-500/20 text-pink-300',
  Documentary: 'bg-gray-500/20 text-gray-300',
};

const formatIcons: Record<string, string> = {
  Feature: '🎬',
  Pilot: '📺',
  Short: '🎞️',
  'Limited Series': '📖',
};

export default function ScriptCard({ script, onSwipeLeft, onSwipeRight, onInfo, isTop }: Props) {
  const [exitX, setExitX] = useState(0);
  const [showOverlay, setShowOverlay] = useState<'greenlight' | 'pass' | null>(null);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-15, 0, 15]);
  const greenOpacity = useTransform(x, [0, 100], [0, 1]);
  const passOpacity = useTransform(x, [-100, 0], [1, 0]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      setExitX(500);
      setShowOverlay('greenlight');
      setTimeout(onSwipeRight, 300);
    } else if (info.offset.x < -threshold) {
      setExitX(-500);
      setShowOverlay('pass');
      setTimeout(onSwipeLeft, 300);
    }
  };

  const handleButtonSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setExitX(500);
      setShowOverlay('greenlight');
      setTimeout(onSwipeRight, 300);
    } else {
      setExitX(-500);
      setShowOverlay('pass');
      setTimeout(onSwipeLeft, 300);
    }
  };

  return (
    <motion.div
      className="absolute inset-0"
      style={{ x, rotate, zIndex: isTop ? 10 : 0 }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      animate={{ x: exitX }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-midnight-600 bg-gradient-to-b from-midnight-700 to-midnight-800 shadow-2xl">
        {/* Greenlight overlay */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center rounded-3xl bg-green-500/20"
          style={{ opacity: greenOpacity }}
        >
          <div className="rotate-[-15deg] rounded-xl border-4 border-green-400 px-8 py-3">
            <span className="text-4xl font-black tracking-wider text-green-400">GREENLIGHT</span>
          </div>
        </motion.div>

        {/* Pass overlay */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center rounded-3xl bg-red-500/20"
          style={{ opacity: passOpacity }}
        >
          <div className="rotate-[15deg] rounded-xl border-4 border-red-400 px-8 py-3">
            <span className="text-4xl font-black tracking-wider text-red-400">PASS</span>
          </div>
        </motion.div>

        {/* Header badges */}
        <div className="flex items-center justify-between px-6 pt-6">
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${genreColors[script.genre] || 'bg-gray-500/20 text-gray-300'}`}>
            {script.genre}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-midnight-300">
              {formatIcons[script.format]} {script.format}
            </span>
          </div>
        </div>

        {/* Title + Author */}
        <div className="px-6 pt-5">
          <h2 className="text-3xl font-bold leading-tight text-white">{script.title}</h2>
          <p className="mt-1.5 text-base text-cinema-400">by {script.author}</p>
        </div>

        {/* Logline — the star of the show */}
        <div className="flex-1 px-6 pt-5">
          <p className="text-lg leading-relaxed text-midnight-100">{script.logline}</p>
        </div>

        {/* Meta bar */}
        <div className="flex items-center gap-4 border-t border-midnight-600 px-6 py-3">
          <div className="flex items-center gap-1.5 text-sm text-midnight-300">
            <FileText className="h-4 w-4" />
            {script.pages} pg
          </div>
          <div className="flex items-center gap-1.5 text-sm text-midnight-300">
            <Film className="h-4 w-4" />
            {script.comparables}
          </div>
        </div>

        {/* Submitted by */}
        <div className="border-t border-midnight-600 px-6 py-2">
          <p className="text-xs text-midnight-400">
            via {script.submittedBy} · {new Date(script.submittedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </p>
        </div>

        {/* Action buttons */}
        {isTop && (
          <div className="flex items-center justify-center gap-5 border-t border-midnight-600 px-6 py-4">
            <button
              type="button"
              onClick={() => handleButtonSwipe('left')}
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-500/50 bg-red-500/10 text-red-400 transition-all hover:scale-110 hover:bg-red-500/20 active:scale-95"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={onInfo}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-cinema-500/50 bg-cinema-500/10 text-cinema-400 transition-all hover:scale-110 hover:bg-cinema-500/20 active:scale-95"
            >
              <Info className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleButtonSwipe('right')}
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-green-500/50 bg-green-500/10 text-green-400 transition-all hover:scale-110 hover:bg-green-500/20 active:scale-95"
            >
              <Check className="h-7 w-7" />
            </button>
          </div>
        )}

        {/* Swipe overlays */}
        {showOverlay === 'greenlight' && (
          <div className="absolute inset-0 z-30 flex items-center justify-center rounded-3xl bg-green-500/30 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-7xl">🟢</div>
              <p className="mt-2 text-2xl font-bold text-green-400">Greenlit!</p>
            </div>
          </div>
        )}
        {showOverlay === 'pass' && (
          <div className="absolute inset-0 z-30 flex items-center justify-center rounded-3xl bg-red-500/10 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-7xl">🔴</div>
              <p className="mt-2 text-2xl font-bold text-red-400">Passed</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
