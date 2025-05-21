import { useLocation } from 'react-router-dom';
import { Breadcrumb } from "../components/Breadcrumb/breadcrumb.jsx";
import { Layout } from "../layout/Layout.jsx";
import { generateBreadcrumbItems } from "../utils/functions.js";
import { BlogPostContent } from '../components/BlogPostContent/index.jsx';

export function Post() {
  const location = useLocation();
  const breadcrumbItems = generateBreadcrumbItems(location.pathname);

  return (
    <div>
      <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <BlogPostContent />
      </Layout>
    </div>
  );
}
