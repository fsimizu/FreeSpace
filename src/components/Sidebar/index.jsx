import React, { useEffect, useState } from 'react';
import { SidebarButton } from '../SidebarButton/sidebarButton';
import './sidebar.css';

export function Sidebar({ setVideoUrl, buttons, isOverlay, setIsSidebarOverlay }) {
  const [isCompact, setIsCompact] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)

  const toggleCompact = () => {
    setIsCompact(!isCompact);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCompact(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (buttons.videos && Object.values(buttons.videos).length > 0) {
      const firstVideo = Object.values(buttons.videos)[0];
      if (firstVideo.enabled) {
        setVideoUrl(`${firstVideo.url}`);
      }
    }
  }, [buttons.videos, setVideoUrl]);

  const handleButtonClick = (url, index) => {
    setVideoUrl(url);
    setActiveButtonIndex(index);
    setIsSidebarOverlay(false);
  };


  return (
    <div className={`sidebar ${isCompact ? 'compact' : ''} ${isOverlay ? 'sideOverlay' : ''}`}>

      <div className="toggle-button" onClick={toggleCompact}>
        {isCompact ? (
          <i className="fa-solid fa-bars"></i>
        ) : (
          <>
            <i className="fa-solid fa-bars"></i><span> Hide menu</span>
          </>
        )}
      </div>

      <div>
        {isCompact ? (
          ""
        ) : (
          <div>
            <ul>
              {Object.values(buttons.videos).map((video, index) => (
                <li key={index}>
                  <SidebarButton
                    setVideoUrl={handleButtonClick}
                    buttons={video}
                    setIsSidebarOverlay={setIsSidebarOverlay}
                    isActive={index === activeButtonIndex}
                    index={index}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

