import React from 'react';
import type { LaneType, ProgressState } from '../types';
import { TopicItem } from './TopicItem';

interface LaneProps {
  lane: LaneType;
  isOpen: boolean;
  onToggleOpen: () => void;
  progress: { done: number; total: number; pct: number };
  progressState: ProgressState;
  onToggleTopic: (id: string) => void;
  onSelectTopic: (id: string, label: string, note: string) => void;
}

export const Lane: React.FC<LaneProps> = ({
  lane,
  isOpen,
  onToggleOpen,
  progress,
  progressState,
  onToggleTopic,
  onSelectTopic,
}) => {
  const thresholds = [1, 26, 51, 76];

  return (
    <div className={`lane ${lane.color} ${isOpen ? 'open' : ''}`}>
      <div className="lane-head" onClick={onToggleOpen}>
        <span className="lane-dot"></span>
        <div className="lane-title-block">
          <div className="lane-title">{lane.title}</div>
          <div className="lane-desc">{lane.desc}</div>
        </div>
        <div className="signal">
          {thresholds.map((t, idx) => (
            <i key={idx} className={progress.pct >= t ? 'on' : ''}></i>
          ))}
        </div>
        <div className="lane-pct">
          {progress.done}/{progress.total}
        </div>
        <i className="lane-chev">&#9656;</i>
      </div>
      {isOpen && (
        <div className="lane-body" style={{ display: 'block' }}>
          {lane.groups.map((group, groupIdx) => (
            <div className="group" key={groupIdx}>
              <div className="group-title">{group.title}</div>
              {group.items.map((item) => (
                <TopicItem
                  key={item.id}
                  item={item}
                  checked={!!progressState[item.id]}
                  onToggle={() => onToggleTopic(item.id)}
                  onSelect={() => onSelectTopic(item.id, item.label, item.note)}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
