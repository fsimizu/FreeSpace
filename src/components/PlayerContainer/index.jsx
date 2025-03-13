import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { Video } from "../Video";
import './playerContainer.css';

export function PlayerContainer({ buttons }) {
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/Ay9KOwvtSx8");

  const [isSidebarOverlay, setIsSidebarOverlay] = useState(false);

  return (

    <div className="player__container">

      <button className="videos__button"
      onClick={() => setIsSidebarOverlay(!isSidebarOverlay)}
      >
        Videos
      </button>

      <div className="player__content">
        <Sidebar setVideoUrl={setVideoUrl} buttons={buttons} isOverlay={isSidebarOverlay}/>
        <Video videoUrl={videoUrl} />
      </div>
    </div>

  )
}
