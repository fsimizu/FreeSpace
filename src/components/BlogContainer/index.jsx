import { posts } from "../../../public/posts/index";
import { Link } from "react-router-dom";
import './blogContainer.css';

export const BlogContainer = () => (
  <div className="blogContainer">
    <div className="max-width blogContainer_body">

      <h2 className='resourcesContainer-title'>Blog</h2>

      {posts.map(post => (

        <div className='blogPost__container' key={post.slug}>
          <Link to={`/resources/blog/${post.slug}`} className="blogPost_button">

            <img src={"/" + post.img} alt={post.img} className="blogPost_image"/>
            
            <div className="blogPost_text">
              <span className="blogPost_date">{post.date}</span>
              <h3>{post.title}</h3>
              <p className="blogPost_excerpt">{post.excerpt}</p>
            </div>

          </Link>
        </div>
      ))}

    </div>

  </div>
);