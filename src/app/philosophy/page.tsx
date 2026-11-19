import React from "react";
import type { Metadata } from "next";
import PhilosophyPageClient from "@/components/PhilosophyPageClient";

export const metadata: Metadata = {
  title: "Long-Term Investment Philosophy & Strategies | Longview Capital",
  description:
    "Our foundational doctrine: business quality before stock price, balance sheet durability over market hype, and patient 3–5+ year compounding. Discover why Longview Capital thinks in years, not days.",
  keywords: [
    "Long-term investing strategies",
    "Investment philosophy India",
    "Fundamental analysis doctrine",
    "Compounding in Indian stocks",
    "Margin of safety investing",
    "Longview Capital Philosophy"
  ],
  alternates: {
    canonical: "https://www.lvcapital.in/philosophy",
  },
  openGraph: {
    title: "Long-Term Investment Philosophy & Strategies | Longview Capital",
    description:
      "The long view changes everything. Explore our 5 pillars of patient compounding and test our interactive holding visualizer.",
    url: "https://www.lvcapital.in/philosophy",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Longview Capital Investment Philosophy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Long-Term Investment Philosophy & Strategies | Longview Capital",
    description: "Business before stock price, patience over noise, fundamentals over hype.",
    images: ["/images/og-image.jpg"],
  },
};

export default function PhilosophyPage() {
  const philosophyJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.lvcapital.in/philosophy#webpage",
        url: "https://www.lvcapital.in/philosophy",
        name: "Long-Term Investment Philosophy & Strategies",
        description:
          "Foundational investment doctrine of Longview Capital: Business Before Stock Price, Patience Over Noise, Fundamentals Over Hype, Discipline Over Emotion, and Compounding Takes Time.",
        publisher: {
          "@type": "Organization",
          name: "Longview Capital",
          url: "https://www.lvcapital.in",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.lvcapital.in/philosophy#breadcrumb",
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
            name: "Our Philosophy",
            item: "https://www.lvcapital.in/philosophy",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(philosophyJsonLd) }}
      />
      <PhilosophyPageClient />
    </>
  );
}
