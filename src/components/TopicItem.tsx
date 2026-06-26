import React from 'react';
import type { TopicItemType } from '../types';

interface TopicItemProps {
  item: TopicItemType;
  checked: boolean;
  onToggle: () => void;
  onSelect: () => void;
}

export const TopicItem: React.FC<TopicItemProps> = ({ item, checked, onToggle, onSelect }) => {
  return (
    <div className="item">
      <div
        className="checkbox-wrapper"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '44px',
          height: '44px',
          margin: '-12px -8px -12px -12px',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        <input
          type="checkbox"
          id={`chk-${item.id}`}
          checked={checked}
          onChange={() => {}} // Controlled via onClick on the wrapper for a11y touch target
          data-id={item.id}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div
        className="item-text"
        onClick={onSelect}
        data-action="study"
        data-id={item.id}
      >
        <span className="item-label">{item.label}</span>
        <span className="note">{item.note}</span>
      </div>
    </div>
  );
};
