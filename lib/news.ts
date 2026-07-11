import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const NEWS_DIRECTORY = path.join(process.cwd(), "content", "vesti");

export type NewsArticle = {
  title: string;
  slug: string;
  category: string;
  date: string;
  displayDate: string;
  excerpt: string;
  image: string;
  featured: boolean;
  externalUrl?: string;
  content: string;
};

function readArticleFile(fileName: string): NewsArticle {
  const fullPath = path.join(NEWS_DIRECTORY, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: String(data.title ?? ""),
    slug: String(data.slug ?? fileName.replace(/\.mdx$/, "")),
    category: String(data.category ?? "Vesti"),
    date: String(data.date ?? ""),
    displayDate: String(data.displayDate ?? data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    image: String(data.image ?? "/images/home/hero.jpg"),
    featured: Boolean(data.featured),
    externalUrl: data.externalUrl
      ? String(data.externalUrl)
      : undefined,
    content,
  };
}

export function getAllNewsArticles(): NewsArticle[] {
  if (!fs.existsSync(NEWS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs
    .readdirSync(NEWS_DIRECTORY)
    .filter((fileName) => fileName.endsWith(".mdx"));

  return fileNames
    .map(readArticleFile)
    .sort(
      (firstArticle, secondArticle) =>
        new Date(secondArticle.date).getTime() -
        new Date(firstArticle.date).getTime()
    );
}

export function getFeaturedArticle(): NewsArticle | undefined {
  const articles = getAllNewsArticles();

  return articles.find((article) => article.featured) ?? articles[0];
}

export function getNewsArticleBySlug(
  slug: string
): NewsArticle | undefined {
  return getAllNewsArticles().find(
    (article) => article.slug === slug
  );
}

export function getAllNewsSlugs(): string[] {
  return getAllNewsArticles().map((article) => article.slug);
}