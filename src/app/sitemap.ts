import { MetadataRoute } from "next";
import { INSIGHTS_ARTICLES } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lvcapital.in";

  const staticPages = [
    "",
    "/about",
    "/research",
    "/philosophy",
    "/insights",
    "/contact",
    "/compliance",
    "/privacy-policy",
    "/terms",
    "/risk-disclosures",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const articlePages = INSIGHTS_ARTICLES.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}
