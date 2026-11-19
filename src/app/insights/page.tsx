import React from "react";
import type { Metadata } from "next";
import InsightsPageClient from "@/components/InsightsPageClient";
import { INSIGHTS_ARTICLES } from "@/data/insights";

export const metadata: Metadata = {
  title: "Indian Equity Research Insights & Market Education | Longview Capital",
  description:
    "Educational commentaries on fundamental stock research, balance sheet forensics, small and mid-cap evaluation, corporate governance, and long-term compounding in Indian equities.",
  keywords: [
    "Fundamental stock research India",
    "Indian stock market research",
    "Small and mid-cap analysis India",
    "Balance sheet forensics",
    "Corporate governance India",
    "Long-term investing strategies",
    "Longview Capital Insights"
  ],
  alternates: {
    canonical: "https://www.lvcapital.in/insights",
  },
  openGraph: {
    title: "Indian Equity Research Insights & Market Education | Longview Capital",
    description:
      "Explore deep-dive perspectives on fundamental stock analysis, forensic balance sheet checks, and patient wealth compounding by Sunny Nenwani and Harsh Nenwani.",
    url: "https://www.lvcapital.in/insights",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Longview Capital Insights - Fundamental Equity Research India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Equity Research Insights & Market Education | Longview Capital",
    description: "Deep-dive perspectives on fundamental stock analysis and patient wealth compounding.",
    images: ["/images/og-image.jpg"],
  },
};

export default function InsightsPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.lvcapital.in/insights#collection",
        url: "https://www.lvcapital.in/insights",
        name: "Indian Equity Research Insights & Market Education",
        description:
          "Educational articles and analytical commentaries on fundamental stock research, small and mid-cap opportunities, and disciplined capital allocation.",
        publisher: {
          "@type": "Organization",
          name: "Longview Capital",
          url: "https://www.lvcapital.in",
        },
        hasPart: INSIGHTS_ARTICLES.map((article) => ({
          "@type": "Article",
          headline: article.title,
          url: `https://www.lvcapital.in/insights/${article.slug}`,
          datePublished: new Date(article.date).toISOString(),
          author: {
            "@type": "Person",
            name: article.author,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.lvcapital.in/insights#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.lvcapital.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: "https://www.lvcapital.in/insights",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <InsightsPageClient />
    </>
  );
}
