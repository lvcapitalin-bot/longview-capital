import React from "react";
import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Longview Capital | Fundamental Equity Research & Stock Advisory India",
  description:
    "Longview Capital is an independent equity research and wealth advisory firm based in Bodakdev, Ahmedabad. We empower disciplined Indian investors through rigorous fundamental stock research, balance sheet scrutiny, small and mid-cap analysis, and patient 3–5+ year wealth compounding.",
  keywords: [
    "Fundamental stock research India",
    "Equity research services India",
    "Fundamental analysis of Indian stocks",
    "Long-term investment research India",
    "Small-cap stock research India",
    "Mid-cap stock research India",
    "Stock market research analyst India",
    "Equity research Ahmedabad",
    "Long-term investing strategies",
    "Longview Capital",
    "Harsh Nenwani",
    "Sunny Nenwani"
  ],
  alternates: {
    canonical: "https://www.lvcapital.in",
  },
  openGraph: {
    title: "Longview Capital | Fundamental Equity Research & Stock Advisory India",
    description:
      "Invest With Perspective. Build Wealth With Purpose. Institutional-grade fundamental stock analysis and patient long-term equity research for HNIs, business owners, and professionals.",
    url: "https://www.lvcapital.in",
    siteName: "Longview Capital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Longview Capital - Fundamental Equity Research & Wealth Advisory Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Longview Capital | Fundamental Equity Research & Stock Advisory India",
    description: "Think with clarity. Invest with conviction. Grow with patience. Bodakdev, Ahmedabad.",
    images: ["/images/og-image.jpg"],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
