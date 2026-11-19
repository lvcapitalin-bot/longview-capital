import { MetadataRoute } from "next";
import { INSIGHTS_ARTICLES } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lvcapital.in";

  const coreRoutes = [
    { route: "", changeFrequency: "daily" as const, priority: 1.0 },
    { route: "/research", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/insights", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/philosophy", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/compliance", changeFrequency: "monthly" as const, priority: 0.6 },
    { route: "/risk-disclosures", changeFrequency: "monthly" as const, priority: 0.5 },
    { route: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.4 },
    { route: "/terms", changeFrequency: "yearly" as const, priority: 0.4 },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const articlePages = INSIGHTS_ARTICLES.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...coreRoutes, ...articlePages];
}
