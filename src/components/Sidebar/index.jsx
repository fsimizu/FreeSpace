import React, { useState, useEffect } from 'react';
import { SidebarButton } from '../SidebarButton/sidebarButton';
import './sidebar.css';

export function Sidebar({ setVideoUrl, buttons, isOverlay, setIsSidebarOverlay }) {
  const [isCompact, setIsCompact] = useState(false);

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
                    setVideoUrl={setVideoUrl}
                    buttons={video}
                    setIsSidebarOverlay={setIsSidebarOverlay}
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

