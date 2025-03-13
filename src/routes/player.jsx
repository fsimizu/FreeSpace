import React from "react";
import { useState } from "react";
import { Layout } from "../layout/Layout.jsx";
import { Sidebar } from "../components/Sidebar/index.jsx";
import { Video } from "../components/Video/index.jsx";
import { PlayerContainer } from "../components/PlayerContainer/index.jsx";


export function Player({buttons}) {
  // const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/Ay9KOwvtSx8");

  return (
    <div>
      <Layout>
        {/* <div>Here goes the player</div> */}
        <PlayerContainer buttons={buttons}/>
        <p>link to the script</p>
      </Layout>
    </div>
  );
}