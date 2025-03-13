import React from "react";
import { Layout } from "../layout/Layout.jsx";
import { Sidebar } from "../components/Sidebar/index.jsx";
import { Breadcrumb } from "../components/Breadcrumb/breadcrumb.jsx";

import { useLocation } from 'react-router-dom';
import { ResourcesContainer } from "../components/ResourcesContainer/index.jsx";

export function Resources() {

  const location = useLocation();
  const breadcrumbItems = generateBreadcrumbItems(location.pathname);


  return (
    <div>
      <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <ResourcesContainer/>
      </Layout>
    </div>
  );
}

function generateBreadcrumbItems(pathname) {
  const items = [];
  const paths = pathname.split('/').filter((path) => path !== '');

  paths.forEach((path, index) => {
    const link = '/' + paths.slice(0, index + 1).join('/');
    items.push({ name: path.charAt(0).toUpperCase() + path.slice(1), link });
  });

  return items;
}