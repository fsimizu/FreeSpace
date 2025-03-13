import React, { useState } from 'react';
import { SidebarButton } from '../SidebarButton/sidebarButton';
import './sidebar.css';

export function Sidebar({ setVideoUrl, buttons }) {
  const [isCompact, setIsCompact] = useState(false);

  const toggleCompact = () => {
    setIsCompact(!isCompact);
  };

  return (
    <div className={`sidebar ${isCompact ? 'compact' : ''}`}>
      <button className="toggle-button" onClick={toggleCompact}>
        {isCompact ? 'Expand' : 'Compact'}
      </button>

      <ul>
        <li>
          <SidebarButton setVideoUrl={setVideoUrl} buttons={buttons.video_1}/>
        </li>
        <li>
          <SidebarButton setVideoUrl={setVideoUrl} buttons={buttons.video_2}/>
        </li>
        <li>
          <SidebarButton setVideoUrl={setVideoUrl} buttons={buttons.video_3}/>
        </li>

      </ul>


    </div>
  );
}

