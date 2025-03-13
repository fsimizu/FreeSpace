import React from "react";
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from "../components/Breadcrumb/breadcrumb.jsx";
import { ResourcesContainer } from "../components/ResourcesContainer/index.jsx";
import { Layout } from "../layout/Layout.jsx";
import { generateBreadcrumbItems } from "../utils/functions.js";



export function Resources() {

  const location = useLocation();
  const breadcrumbItems = generateBreadcrumbItems(location.pathname);


  return (
    <div>
      <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <ResourcesContainer />
      </Layout>
    </div>
  );
}
