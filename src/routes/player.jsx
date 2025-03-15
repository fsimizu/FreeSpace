import React from "react";
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from "../components/Breadcrumb/breadcrumb.jsx";
import { PlayerContainer } from "../components/PlayerContainer/index.jsx";
import { Layout } from "../layout/Layout.jsx";
import { Instructions } from "../components/Instructions/index.jsx";
import { generateBreadcrumbItems } from "../utils/functions.js";

export function Player({ buttons }) {
  const location = useLocation();
  const breadcrumbItems = generateBreadcrumbItems(location.pathname);

  return (
    <div>
      <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <PlayerContainer buttons={buttons} />
        <Instructions />
        {/* <p>link to the script</p> */}
      </Layout>
    </div>
  );
}