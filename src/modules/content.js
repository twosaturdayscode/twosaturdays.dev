import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

/**
 * @typedef {"blog" | "projects"} contentType Content type.
 * @typedef {{slug: slug, filePath: filePath, data: data}} post
 *
 * @param {contentType} type
 * @returns {post[]} post
 */
export function getContentsData(type) {
  const dir = join(process.cwd(), "content/" + type);
  const files = fs.readdirSync(dir);

  const posts = files.map((filename) => {
    const filePath = join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);
    const slug = filename.split(".")[0];

    return {
      slug: slug,
      filePath: filePath,
      data: { ...data, date: data.date.toLocaleString("it-IT").slice(0, -10) },
    };
  });

  return posts;
}

/**
 *
 * @param {string} slug
 * @returns
 */
export function getBlogBySlug(slug) {
  const blogDir = join(process.cwd(), "content/blog");
  const filePath = join(blogDir, slug + ".md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    data: { ...data, date: data.date.toLocaleString("it-IT").slice(0, -10) },
    source: content,
  };
}

/**
 *
 * @param {string} slug
 * @returns
 */
export function getProjectBySlug(slug) {
  const projectsDir = join(process.cwd(), "content/projects");
  const filePath = join(projectsDir, slug + ".md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    data: { ...data, date: data.date.toLocaleString("it-IT").slice(0, -10) },
    source: content,
  };
}
