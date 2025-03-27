import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { Video } from "../Video";
import './playerContainer.css';

export function PlayerContainer({ buttons }) {
  const [videoUrl, setVideoUrl] = useState(`${buttons.videos.video_1.url}`);
  const [isSidebarOverlay, setIsSidebarOverlay] = useState(false);

  return (

    <div className="player__container">
      <h2>{buttons.title}</h2>

      <button className="videos__button"
        onClick={() => setIsSidebarOverlay(!isSidebarOverlay)}
      >



        {isSidebarOverlay ? (
          <span>
            <i class="fa-solid fa-x videos__button-more"></i>
            Close
          </span>
        ) : (
          <span>
            <i className="fa-solid fa-bars videos__button-more"></i> Videos
          </span>
        )}

      </button>

      <div className="player__content">
        <Sidebar
          setVideoUrl={setVideoUrl}
          buttons={buttons}
          isOverlay={isSidebarOverlay}
          setIsSidebarOverlay={setIsSidebarOverlay} />

        <Video videoUrl={videoUrl} onLoad={() => setLoading(false)} />


      </div>
    </div>
  );
}
