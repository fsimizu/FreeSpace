import { posts } from "../../../public/posts/index";
import { Link } from "react-router-dom";

export const BlogContainer = () => (
  <div className="blogContainer">
    <div className="max-width blogContainer_body">

      {posts.map(post => (
        <Link to={`/resources/blog/${post.slug}`} key={post.slug}>
          
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.excerpt}</p>
          {/* <Link to={`/resources/blog/${post.slug}`} className="text-blue-500 underline">Read more</Link> */}
        </Link>
      ))}

    </div>

  </div>
);