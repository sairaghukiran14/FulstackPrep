import React from 'react';
import type { LaneType } from '../types';

interface CountdownStripProps {
  lanes: LaneType[];
  getLaneProgress: (lane: LaneType) => { done: number; total: number; pct: number };
}

export const CountdownStrip: React.FC<CountdownStripProps> = ({ lanes, getLaneProgress }) => {
  const getDaysLeft = () => {
    const target = new Date('2026-07-01T00:00:00');
    // Using 2026-06-26 as base if current time is before, otherwise live current date
    const now = new Date();
    const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffTime = target.getTime() - todayDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const days = getDaysLeft();

  const cards = [
    { key: 'days left', value: `${days} days` },
    { key: 'known stack', value: `${getLaneProgress(lanes[0]).pct}% ready` },
    { key: 'new stack (vue)', value: `${getLaneProgress(lanes[1]).pct}% ready` },
    { key: 'domain (ems)', value: `${getLaneProgress(lanes[2]).pct}% ready` },
  ];

  return (
    <div className="strip" id="strip">
      {cards.map((card) => (
        <div className="strip-item" key={card.key}>
          <div className="strip-k">{card.key}</div>
          <div className="strip-v">{card.value}</div>
        </div>
      ))}
    </div>
  );
};
