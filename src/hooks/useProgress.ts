import { useState, useEffect, useCallback } from 'react';
import type { ProgressState, LaneType } from '../types';

const STORAGE_KEY = 'progress';

export function useProgress() {
  const [progress, setProgressState] = useState<ProgressState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error('Failed to load progress state:', e);
      return {};
    }
  });

  // Sync to localStorage when progress changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress state:', e);
    }
  }, [progress]);

  const toggleProgress = useCallback((id: string) => {
    setProgressState((prev) => {
      const updated = { ...prev };
      if (updated[id]) {
        delete updated[id];
      } else {
        updated[id] = true;
      }
      return updated;
    });
  }, []);

  const setProgress = useCallback((id: string, value: boolean) => {
    setProgressState((prev) => {
      const updated = { ...prev };
      if (value) {
        updated[id] = true;
      } else {
        delete updated[id];
      }
      return updated;
    });
  }, []);

  const clearProgress = useCallback(() => {
    setProgressState({});
  }, []);

  const getLaneProgress = useCallback((lane: LaneType) => {
    const ids = lane.groups.flatMap((g) => g.items.map((it) => it.id));
    const done = ids.filter((id) => progress[id]).length;
    const total = ids.length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    return { done, total, pct };
  }, [progress]);

  const getOverallProgress = useCallback((lanes: LaneType[]) => {
    let done = 0;
    let total = 0;
    lanes.forEach((lane) => {
      const p = getLaneProgress(lane);
      done += p.done;
      total += p.total;
    });
    const pct = total ? Math.round((done / total) * 100) : 0;
    return { done, total, pct };
  }, [getLaneProgress]);

  return {
    progress,
    toggleProgress,
    setProgress,
    clearProgress,
    getLaneProgress,
    getOverallProgress,
  };
}
