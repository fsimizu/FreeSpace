import React from "react";
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from "../components/Breadcrumb/breadcrumb.jsx";
import { Instructions } from "../components/Instructions/index.jsx";
import { PlayerContainer } from "../components/PlayerContainer/index.jsx";
import { Layout } from "../layout/Layout.jsx";
import { generateBreadcrumbItems } from "../utils/functions.js";
import { Shop } from "../components/Shop/index.jsx";
import { Recorder } from "../components/Recorder/index.jsx";

export function Player({ buttons }) {
  const location = useLocation();
  const breadcrumbItems = generateBreadcrumbItems(location.pathname);

  return (
    <div>
      <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <PlayerContainer buttons={buttons}/>
        <Recorder />
        <Instructions />
        <Shop buttons={buttons}/>
      </Layout>
    </div>
  );
}