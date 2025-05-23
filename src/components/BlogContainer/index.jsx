import { posts } from "../../../public/posts/index";
import { Link } from "react-router-dom";
import './blogContainer.css';

export const BlogContainer = () => (
  <div className="blogContainer">
    <div className="max-width blogContainer_body">

      {posts.map(post => (

        <div className='blogPost__container' key={post.slug}>
          <Link to={`/resources/blog/${post.slug}`} className="blogPost_button">

            <h4>{post.title}</h4>
            <p><span className="badge text-bg-secondary">{post.date}</span> {post.excerpt}</p>

          </Link>
        </div>
      ))}

    </div>

  </div>
);