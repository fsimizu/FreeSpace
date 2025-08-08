import matter from 'gray-matter';

/**
 * Dynamically imports all markdown/mdx files from src/data/posts
 * and extracts their frontmatter (metadata).
 *
 * @returns {Promise<Array<Object>>} An array of post metadata objects, sorted by date.
 */
export async function getAllPostMetadata() {
  const modules = import.meta.glob('../data/posts/*.{md,mdx}', { as: 'raw', eager: true });

  console.log("Modules found by glob:", modules);

  const posts = [];

  for (const modulePath in modules) { 
    const fileContent = modules[modulePath]; 

    console.log(`--- Processing file: ${modulePath} ---`);
    console.log("Raw file content (first 200 chars):", fileContent.substring(0, 200));

    try {
      const { data: frontmatter } = matter(fileContent);
      console.log(`Extracted Frontmatter for ${modulePath}:`, frontmatter);
      const slug = modulePath.split('/').pop().replace(/\.(md|mdx)$/, '');

      if (!frontmatter.title || !frontmatter.date) {
        console.warn(`Warning: Missing 'title' or 'date' in frontmatter for ${slug}. Skipping.`);
        continue;
      }

      posts.push({
        slug,
        ...frontmatter,
      });

    } catch (e) {
      console.error(`ERROR: Failed to parse frontmatter for file: ${modulePath}`, e);
      console.error("Content that caused error:", fileContent);
    }
  }

  console.log("Final posts array before sort:", posts);

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

  const module = await modules[postPath]();
  const fileContent = module.default || module;

  const { data: frontmatter, content } = matter(fileContent);

  return {
    frontmatter,
    content,
  };
}