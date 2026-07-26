import type { MetadataRoute } from "next";
import {
  getAllNewsSlugs,
  getNewsArticleBySlug,
} from "@/lib/news";

const SITE_URL = "https://kkborca.rs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/o-klubu`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/timovi`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/takmicenja`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/vesti`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/galerija`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/partneri`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/postani-clan`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kontakt`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const newsPages: MetadataRoute.Sitemap = getAllNewsSlugs()
    .map((slug) => {
      const article = getNewsArticleBySlug(slug);

      if (!article) {
        return null;
      }

      return {
        url: `${SITE_URL}/vesti/${slug}`,
        lastModified: new Date(article.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    })
    .filter(
      (
        page,
      ): page is NonNullable<typeof page> => page !== null,
    );

  return [...staticPages, ...newsPages];
}