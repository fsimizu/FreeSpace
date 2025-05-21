// src/utils/posts.js
import matter from 'gray-matter';

// --- REMOVE THESE LINES ---
// import { readdirSync, readFileSync } from 'fs'; // NOT NEEDED IN BROWSER CONTEXT
// import path from 'path'; // NOT NEEDED FOR SLUG EXTRACTION FROM GLOB PATH
// --------------------------

/**
 * Dynamically imports all markdown/mdx files from src/data/posts
 * and extracts their frontmatter (metadata).
 *
 * @returns {Promise<Array<Object>>} An array of post metadata objects, sorted by date.
 */
export async function getAllPostMetadata() {
  // Use import.meta.glob to import all files matching the pattern
  // `eager: true` imports them synchronously at build time, giving us direct access to their content.
  const modules = import.meta.glob('../data/posts/*.{md,mdx}', { as: 'raw', eager: true });

  console.log("Modules found by glob:", modules);

  const posts = [];

  for (const modulePath in modules) { // Changed 'path' to 'modulePath' to avoid confusion with Node.js `path` module
    const fileContent = modules[modulePath]; // Raw content of the MD/MDX file

    console.log(`--- Processing file: ${modulePath} ---`);
    console.log("Raw file content (first 200 chars):", fileContent.substring(0, 200));

    try {
      // Use gray-matter to parse the frontmatter and content
      const { data: frontmatter } = matter(fileContent);

      console.log(`Extracted Frontmatter for ${modulePath}:`, frontmatter);

      // Extract the slug directly from the modulePath provided by glob
      // Example modulePath: "../data/posts/what-is-ccl.mdx"
      // Split by '/' and get the last part, then remove the extension.
      const slug = modulePath.split('/').pop().replace(/\.(md|mdx)$/, '');

      // Check if essential frontmatter fields are present
      if (!frontmatter.title || !frontmatter.date) {
        console.warn(`Warning: Missing 'title' or 'date' in frontmatter for ${slug}. Skipping.`);
        continue; // Skip this post if essential data is missing
      }

      posts.push({
        slug,
        ...frontmatter, // Spread all properties from your frontmatter
      });

    } catch (e) {
      console.error(`ERROR: Failed to parse frontmatter for file: ${modulePath}`, e);
      console.error("Content that caused error:", fileContent);
    }
  }

  console.log("Final posts array before sort:", posts);

  // Sort posts by date, newest first
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  console.log("Sorted posts array:", sortedPosts);

  return sortedPosts;
}

/**
 * Dynamically imports and returns the full content of a single post by slug.
 *
 * @param {string} slug The slug of the post (from its filename/frontmatter).
 * @returns {Promise<Object>} An object containing the post's frontmatter and content.
 */
export async function getPostBySlug(slug) {
  const modules = import.meta.glob('../data/posts/*.{md,mdx}');

  const postPath = Object.keys(modules).find(path =>
    path.includes(`/${slug}.mdx`) || path.includes(`/${slug}.md`)
  );

  if (!postPath) {
    throw new Error(`Post with slug "${slug}" not found.`);
  }

  // Import the module raw to parse with gray-matter
  const module = await modules[postPath]();
  const fileContent = module.default || module; // For MDX, it's often `module.default` from `as: 'raw'`

  const { data: frontmatter, content } = matter(fileContent);

  return {
    frontmatter,
    content,
  };
}