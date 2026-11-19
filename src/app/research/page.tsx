import React from "react";
import type { Metadata } from "next";
import ResearchPageClient from "@/components/ResearchPageClient";

export const metadata: Metadata = {
  title: "Equity Research Services India | Small & Mid-Cap Stock Analysis | Longview Capital",
  description:
    "Independent fundamental equity research services in India: 2 monthly deep-dive stock reports, tactical notes, forensic balance sheet checks, and small & mid-cap ideas delivered directly on WhatsApp and email.",
  keywords: [
    "Equity research services India",
    "Fundamental stock research India",
    "Small-cap stock research India",
    "Mid-cap stock research India",
    "Fundamental analysis of Indian stocks",
    "Stock market research analyst India",
    "Equity research Ahmedabad",
    "Longview Capital Research"
  ],
  alternates: {
    canonical: "https://www.lvcapital.in/research",
  },
  openGraph: {
    title: "Equity Research Services India | Small & Mid-Cap Stock Analysis | Longview Capital",
    description:
      "Research built around the bigger picture. 2 deep-dive fundamental reports per month, balance sheet scrutiny, and direct founder access in Ahmedabad, India.",
    url: "https://www.lvcapital.in/research",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Longview Capital - Equity Research Services India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equity Research Services India | Small & Mid-Cap Stock Analysis | Longview Capital",
    description: "2 deep-dive fundamental reports per month, balance sheet scrutiny, and direct founder access.",
    images: ["/images/og-image.jpg"],
  },
};

export default function ResearchPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.lvcapital.in/research#service",
        name: "Fundamental Equity Research Subscription",
        serviceType: "Equity Research & Investment Analysis",
        provider: {
          "@type": "Organization",
          name: "Longview Capital",
          url: "https://www.lvcapital.in",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        description:
          "Independent fundamental stock research subscription delivering 2 in-depth monthly reports, tactical updates, forensic accounting, and direct analyst consultation via WhatsApp and email.",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.lvcapital.in/research#breadcrumb",
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
            name: "Research Services",
            item: "https://www.lvcapital.in/research",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ResearchPageClient />
    </>
  );
}
