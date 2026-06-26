import { useState } from 'react';
import { DATA } from './services/studyData';
import { useProgress } from './hooks/useProgress';
import { Masthead } from './components/Masthead';
import { CountdownStrip } from './components/CountdownStrip';
import { Lane } from './components/Lane';
import { StudyDrawer } from './components/StudyDrawer';

interface ActiveTopic {
  id: string;
  title: string;
  note: string;
  color: 'amber' | 'teal' | 'gray';
}

function App() {
  const {
    progress,
    toggleProgress,
    clearProgress,
    getLaneProgress,
    getOverallProgress,
  } = useProgress();

  const [openLanes, setOpenLanes] = useState<Set<string>>(new Set(['react']));
  const [activeTopic, setActiveTopic] = useState<ActiveTopic | null>(null);

  const toggleLane = (laneId: string) => {
    setOpenLanes((prev) => {
      const next = new Set(prev);
      if (next.has(laneId)) {
        next.delete(laneId);
      } else {
        next.add(laneId);
      }
      return next;
    });
  };

  const handleSelectTopic = (id: string, title: string, note: string, color: 'amber' | 'teal' | 'gray') => {
    setActiveTopic({ id, title, note, color });
  };

  const handleReset = () => {
    if (window.confirm('Reset all checked progress on this board?')) {
      clearProgress();
    }
  };

  const overallPct = getOverallProgress(DATA).pct;

  return (
    <div className="wrap">
      <Masthead pct={overallPct} />

      <CountdownStrip lanes={DATA} getLaneProgress={getLaneProgress} />

      <div id="lanes">
        {DATA.map((lane) => (
          <Lane
            key={lane.id}
            lane={lane}
            isOpen={openLanes.has(lane.id)}
            onToggleOpen={() => toggleLane(lane.id)}
            progress={getLaneProgress(lane)}
            progressState={progress}
            onToggleTopic={(topicId) => toggleProgress(topicId)}
            onSelectTopic={(topicId, label, note) =>
              handleSelectTopic(topicId, label, note, lane.color)
            }
          />
        ))}
      </div>

      <div className="foot">
        <div className="foot-note">// focus, iterate, automate.</div>
        <button className="reset-btn" onClick={handleReset}>
          Reset Board
        </button>
      </div>

      <StudyDrawer
        topicId={activeTopic?.id ?? null}
        topicTitle={activeTopic?.title ?? null}
        topicNote={activeTopic?.note ?? null}
        color={activeTopic?.color ?? 'gray'}
        checked={activeTopic ? !!progress[activeTopic.id] : false}
        onToggleChecked={() => activeTopic && toggleProgress(activeTopic.id)}
        onClose={() => setActiveTopic(null)}
      />
    </div>
  );
}

export default App;
