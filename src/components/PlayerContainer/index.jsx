import { useState, useEffect } from "react";
import { Sidebar } from "../Sidebar";
import { Video } from "../Video";
import { getVideos } from "../../utils/functions";
import './playerContainer.css';
import { Loading } from "../Loading";

export function PlayerContainer({ buttons, video }) {

  const [videoUrl, setVideoUrl] = useState('');
  const [isSidebarOverlay, setIsSidebarOverlay] = useState(false);
  const [videoData, setVideoData] = useState();

  // call API for videos
  useEffect(() => {
    async function loadVideos() {
      try {
        const data = await getVideos(video);
        setVideoData(data);

        // console.log(data)

      } catch (err) {
        console.error(err);
      }
    }
    loadVideos();
  }, []);


  useEffect(() => {
    if (videoData && Object.values(videoData).length > 0) {
      const sortedVideos = Object.values(videoData).sort(
        (a, b) => Number(a.order) - Number(b.order)
      );
      setVideoUrl(sortedVideos[0].url);
    }
  }, [videoData]);

  return (

    <div className="player__container">
      <div className="max-width">
        <h2>{buttons.title}</h2>

        <button className="videos__button"
          onClick={() => setIsSidebarOverlay(!isSidebarOverlay)}
        >
          {isSidebarOverlay ? (
            <span>
              <i className="fa-solid fa-x videos__button-more"></i>
              Close
            </span>
          ) : (
            <span>
              <i className="fa-solid fa-bars videos__button-more"></i>Videos
            </span>
          )}

        </button>

        <div className="player__content">

          {(!videoData || Object.keys(videoData).length === 0 || !videoUrl) ? (
            <Loading />
          ) : (
            <>
              <Sidebar
                setVideoUrl={setVideoUrl}
                videoData={videoData}
                isOverlay={isSidebarOverlay}
                setIsSidebarOverlay={setIsSidebarOverlay}
              />
              <Video videoUrl={videoUrl} />
            </>
          )}
        </div>

      </div>
    </div>
  );
}
