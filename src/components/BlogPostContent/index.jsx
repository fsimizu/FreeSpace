import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";
import './blogPostContent.css';
import { Loading } from "../Loading";

export const BlogPostContent = () => {
  const { slug } = useParams();
  const [frontmatter, setFrontmatter] = useState({});
  const [markdownBody, setMarkdownBody] = useState("");

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const parsed = fm(text);
        setFrontmatter(parsed.attributes); // title, date, etc.
        setMarkdownBody(parsed.body);      // markdown content
      });
  }, [slug]);

  if (!markdownBody) return (
    <Loading />
  ) 
    

  return (
    <div className="blogContent">
      <div className="max-width blogContent-body">     
        <ReactMarkdown>{markdownBody}</ReactMarkdown>
      </div>
    </div>
  );
};