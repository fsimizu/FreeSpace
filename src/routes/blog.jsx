import { useLocation } from 'react-router-dom';
import { Breadcrumb } from "../components/Breadcrumb/breadcrumb.jsx";
import { BlogContainer } from "../components/BlogContainer/index.jsx";
import { Layout } from "../layout/Layout.jsx";
import { generateBreadcrumbItems } from "../utils/functions.js";

export function Blog() {
  const location = useLocation();
  const breadcrumbItems = generateBreadcrumbItems(location.pathname);

  return (
    <div>
      <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <BlogContainer />
      </Layout>
    </div>
  );
}
