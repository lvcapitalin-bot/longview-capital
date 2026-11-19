import React from "react";
import type { Metadata } from "next";
import AboutPageClient from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "About Longview Capital | Fundamental Equity Research Firm Ahmedabad",
  description:
    "Learn about Longview Capital, founded by Sunny Nenwani and Harsh Nenwani in Bodakdev, Ahmedabad. Discover our research methodology, owner's mindset, and independent approach to Indian equities.",
  keywords: [
    "About Longview Capital",
    "Equity research Ahmedabad",
    "Sunny Nenwani",
    "Harsh Nenwani",
    "Investment research Bodakdev",
    "Fundamental stock research India",
    "Indian stock market research analyst"
  ],
  alternates: {
    canonical: "https://www.lvcapital.in/about",
  },
  openGraph: {
    title: "About Longview Capital | Fundamental Equity Research Firm Ahmedabad",
    description:
      "A patient perspective on investing. Founded by Sunny Nenwani and Harsh Nenwani to provide an unhurried, research-backed alternative to speculative market noise.",
    url: "https://www.lvcapital.in/about",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Longview Capital - Sunny Nenwani & Harsh Nenwani Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Longview Capital | Fundamental Equity Research Firm Ahmedabad",
    description: "A patient perspective on investing. Founded by Sunny Nenwani and Harsh Nenwani.",
    images: ["/images/og-image.jpg"],
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.lvcapital.in/about#webpage",
        url: "https://www.lvcapital.in/about",
        name: "About Longview Capital",
        description:
          "Founding story, investment philosophy, and leadership profiles of Longview Capital in Ahmedabad, Gujarat.",
        publisher: {
          "@type": "Organization",
          name: "Longview Capital",
          url: "https://www.lvcapital.in",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.lvcapital.in/about#breadcrumb",
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
            name: "About Us",
            item: "https://www.lvcapital.in/about",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutPageClient />
    </>
  );
}
