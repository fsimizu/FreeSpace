import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { Video } from "../Video";
import './playerContainer.css';

export function PlayerContainer({ buttons }) {
  const [videoUrl, setVideoUrl] = useState(`${buttons.video_1.url}`);
  const [isSidebarOverlay, setIsSidebarOverlay] = useState(false);
  const [loading, setLoading] = useState(false); // Track video loading state

  return (

    <div className="player__container">
      <h2>{buttons.language} Mock Tests</h2>
      
      <button className="videos__button"
        onClick={() => setIsSidebarOverlay(!isSidebarOverlay)}
      >
        <i className="fa-solid fa-bars videos__button-more"></i>
        Videos
      </button>

      <div className="player__content">
        <Sidebar
          setVideoUrl={setVideoUrl}
          buttons={buttons}
          isOverlay={isSidebarOverlay}
          setIsSidebarOverlay={setIsSidebarOverlay} />

        {/* <div className="video-wrapper"> */}
          {/* {loading && <div className="loading-spinner">Loading...</div>} */}
          <Video videoUrl={videoUrl} onLoad={() => setLoading(false)} />
        {/* </div> */}

      </div>
    </div>
  );
}
