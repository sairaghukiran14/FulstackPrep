import React, { useRef, useEffect, useState } from 'react';
import { getStudyContent } from '../services/studyData';

interface StudyDrawerProps {
  topicId: string | null;
  topicTitle: string | null;
  topicNote: string | null;
  color: 'amber' | 'teal' | 'gray';
  checked: boolean;
  onToggleChecked: () => void;
  onClose: () => void;
}

export const StudyDrawer: React.FC<StudyDrawerProps> = ({
  topicId,
  topicTitle,
  topicNote,
  color,
  checked,
  onToggleChecked,
  onClose,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeTab, setActiveTab] = useState<'deepdive' | 'qa' | 'code'>('deepdive');

  const isOpen = !!topicId;

  // Sync open state with native dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
        document.body.style.overflow = 'hidden';
      }
    } else {
      if (dialog.open) {
        dialog.close();
        document.body.style.overflow = '';
      }
    }
  }, [isOpen]);

  // Clean up event listeners and page scrolling when closed via ESC key
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose();
      document.body.style.overflow = '';
    };

    dialog.addEventListener('close', handleClose);
    return () => {
      dialog.removeEventListener('close', handleClose);
    };
  }, [onClose]);

  // Reset tab to deepdive whenever topic changes
  useEffect(() => {
    if (isOpen) {
      setActiveTab('deepdive');
    }
  }, [topicId, isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog || e.target !== dialog) return;

    const rect = dialog.getBoundingClientRect();
    const isClickInside =
      rect.top <= e.clientY &&
      e.clientY <= rect.bottom &&
      rect.left <= e.clientX &&
      e.clientX <= rect.right;

    if (!isClickInside) {
      dialog.close();
    }
  };

  if (!topicId || !topicTitle || !topicNote) {
    return (
      <dialog
        ref={dialogRef}
        className={`drawer ${color}`}
        style={{ display: 'none' }}
      />
    );
  }

  const studyContent = getStudyContent(topicId, topicTitle, topicNote);
  const tabHtml = studyContent.tabs[activeTab];

  return (
    <dialog
      ref={dialogRef}
      className={`drawer ${color}`}
      onClick={handleBackdropClick}
    >
      <div className="drawer-header">
        <div className="drawer-header-top">
          <span className="drawer-meta">// topic syllabus & reference</span>
          <button className="drawer-close" onClick={() => dialogRef.current?.close()}>
            &times;
          </button>
        </div>
        <h2 className="drawer-title">{topicTitle}</h2>
        <div className="drawer-badge-row">
          <button
            onClick={onToggleChecked}
            className="drawer-badge"
            style={{
              background: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              outline: 'none',
            }}
          >
            {checked ? '✓ complete' : '⏳ remaining'}
          </button>
        </div>
        <div className="drawer-tabs">
          <button
            className={`drawer-tab ${activeTab === 'deepdive' ? 'active' : ''}`}
            onClick={() => setActiveTab('deepdive')}
          >
            Deep Dive
          </button>
          <button
            className={`drawer-tab ${activeTab === 'qa' ? 'active' : ''}`}
            onClick={() => setActiveTab('qa')}
          >
            Q&A
          </button>
          <button
            className={`drawer-tab ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            Code Snippet
          </button>
        </div>
      </div>
      <div
        className="drawer-content"
        dangerouslySetInnerHTML={{ __html: tabHtml }}
      />
    </dialog>
  );
};
