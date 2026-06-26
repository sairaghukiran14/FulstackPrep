import React from 'react';

interface MastheadProps {
  pct: number;
}

export const Masthead: React.FC<MastheadProps> = ({ pct }) => {
  return (
    <div className="masthead">
      <div className="masthead-row">
        <div>
          <div className="mh-label">// interview readiness console</div>
          <h1 className="mh-title">Sai's prep board</h1>
          <p className="mh-sub">
            Frontend, backend, and deployment topics across your React/Node strengths and the new Vue/EMS surface area.
            Tap to check off, progress saves automatically.
          </p>
        </div>
        <div className="overall">
          <div className="overall-num">
            {pct}
            <span>%</span>
          </div>
          <div className="overall-label">overall ready</div>
        </div>
      </div>
    </div>
  );
};
