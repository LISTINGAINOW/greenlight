'use client';

import { useState, useEffect } from 'react';
import { Flame, TrendingUp, Zap } from 'lucide-react';

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  totalReviewed: number;
  todayCount: number;
  lastDate: string | null;
}

function getStreakData(): StreakData {
  try {
    const stored = localStorage.getItem('scriptswipe-streak');
    return stored ? JSON.parse(stored) : { currentStreak: 0, longestStreak: 0, totalReviewed: 0, todayCount: 0, lastDate: null };
  } catch {
    return { currentStreak: 0, longestStreak: 0, totalReviewed: 0, todayCount: 0, lastDate: null };
  }
}

function saveStreakData(data: StreakData) {
  localStorage.setItem('scriptswipe-streak', JSON.stringify(data));
}

export function useStreak() {
  const [data, setData] = useState<StreakData>({ currentStreak: 0, longestStreak: 0, totalReviewed: 0, todayCount: 0, lastDate: null });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const d = getStreakData();
    const today = new Date().toISOString().split('T')[0];
    if (d.lastDate && d.lastDate !== today) {
      const last = new Date(d.lastDate);
      const diff = Math.floor((new Date(today).getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
      if (diff > 1) {
        d.currentStreak = 0;
      }
      d.todayCount = 0;
    }
    setData(d);
  }, []);

  const recordSwipe = () => {
    if (!mounted) return;
    const today = new Date().toISOString().split('T')[0];
    const updated = { ...data };
    updated.totalReviewed++;
    updated.todayCount++;
    if (updated.lastDate !== today) {
      updated.currentStreak++;
      updated.lastDate = today;
    }
    if (updated.currentStreak > updated.longestStreak) {
      updated.longestStreak = updated.currentStreak;
    }
    saveStreakData(updated);
    setData(updated);
  };

  return { streak: data, recordSwipe, mounted };
}

interface Props {
  streak: StreakData;
}

export default function DailyStreak({ streak }: Props) {
  if (streak.totalReviewed === 0) return null;

  return (
    <div className="mx-4 mb-2 flex items-center justify-center gap-4 text-xs">
      {streak.currentStreak > 0 && (
        <div className="flex items-center gap-1 text-orange-400">
          <Flame className="h-3.5 w-3.5" />
          <span className="font-bold">{streak.currentStreak} day streak</span>
        </div>
      )}
      <div className="flex items-center gap-1 text-midnight-400">
        <Zap className="h-3.5 w-3.5" />
        <span>{streak.todayCount} today</span>
      </div>
      <div className="flex items-center gap-1 text-midnight-400">
        <TrendingUp className="h-3.5 w-3.5" />
        <span>{streak.totalReviewed} total</span>
      </div>
    </div>
  );
}
