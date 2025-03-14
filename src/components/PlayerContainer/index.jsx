import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { Video } from "../Video";
import './playerContainer.css';

export function PlayerContainer({ buttons }) {
  const [videoUrl, setVideoUrl] = useState(`${buttons.video_1.url}`);
  const [isSidebarOverlay, setIsSidebarOverlay] = useState(false);

  return (

    <div className="player__container">

      <button className="videos__button"
      onClick={() => setIsSidebarOverlay(!isSidebarOverlay)}
      >
        <i class="fa-solid fa-bars videos__button-more"></i>
        Videos
      </button>

      <div className="player__content">
        <Sidebar setVideoUrl={setVideoUrl} buttons={buttons} isOverlay={isSidebarOverlay} setIsSidebarOverlay={setIsSidebarOverlay}/>
        <Video videoUrl={videoUrl} />
      </div>
    </div>

  )
}
