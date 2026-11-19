import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FAQS_DATA } from "@/data/faqs";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Longview Capital | Fundamental Equity Research & Stock Advisory India",
  description:
    "Longview Capital is an independent investment research and wealth advisory firm in Bodakdev, Ahmedabad. We empower disciplined Indian investors through rigorous fundamental stock research, balance sheet scrutiny, small and mid-cap analysis, and patient 3–5+ year wealth compounding.",
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
    "Sunny Nenwani",
    "Wealth Advisory Bodakdev Ahmedabad"
  ],
  authors: [{ name: "Longview Capital" }, { name: "Harsh Nenwani" }, { name: "Sunny Nenwani" }],
  creator: "Longview Capital",
  publisher: "Longview Capital",
  metadataBase: new URL("https://www.lvcapital.in"),
  alternates: {
    canonical: "https://www.lvcapital.in",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    yandex: undefined,
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
  icons: {
    icon: "/favicon.png?v=3",
    apple: "/favicon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Structured Schema for Google Search, Knowledge Graph & AI Overviews (Google AI, Gemini, ChatGPT, Perplexity)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["FinancialService", "LocalBusiness"],
        "@id": "https://www.lvcapital.in/#organization",
        name: "Longview Capital",
        legalName: "Longview Capital",
        url: "https://www.lvcapital.in",
        logo: "https://www.lvcapital.in/images/logo-transparent.png",
        image: "https://www.lvcapital.in/images/og-image.jpg",
        description:
          "Independent fundamental stock research and wealth advisory firm based in Bodakdev, Ahmedabad, Gujarat, India. Founded by Sunny Nenwani and Harsh Nenwani. Focus on fundamental analysis, balance sheet scrutiny, and 3-5+ year compounding.",
        telephone: "+91-7984721288",
        email: "lvcapital.in@gmail.com",
        priceRange: "₹₹₹",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:30",
            closes: "18:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "14:00",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "5, First Floor, Akash Towers, Judges Bunglow Road, Bodakdev",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          postalCode: "380054",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.0407987,
          longitude: 72.5186673,
        },
        hasMap: "https://maps.google.com/?cid=1234567890",
        founder: [
          {
            "@type": "Person",
            name: "Sunny Nenwani",
            jobTitle: "Financial Analyst",
            telephone: "+91-7984721288",
            worksFor: {
              "@id": "https://www.lvcapital.in/#organization",
            },
          },
          {
            "@type": "Person",
            name: "Harsh Nenwani",
            jobTitle: "Research Analyst",
            telephone: "+91-8000521297",
            worksFor: {
              "@id": "https://www.lvcapital.in/#organization",
            },
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Ahmedabad",
          },
          {
            "@type": "State",
            name: "Gujarat",
          },
          {
            "@type": "Country",
            name: "India",
          },
        ],
        knowsAbout: [
          "Fundamental Stock Research India",
          "Equity Research Services India",
          "Fundamental Analysis of Indian Stocks",
          "Small-cap Stock Research India",
          "Mid-cap Stock Research India",
          "Balance Sheet Scrutiny",
          "Corporate Governance & Management Integrity",
          "Working Capital and Cash Flow Analysis",
          "Valuation Discipline & Margin of Safety",
          "Long-term Wealth Compounding"
        ],
        sameAs: [
          "https://wa.me/917984721288"
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.lvcapital.in/#website",
        url: "https://www.lvcapital.in",
        name: "Longview Capital",
        publisher: {
          "@id": "https://www.lvcapital.in/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.lvcapital.in/insights?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.lvcapital.in/#faq",
        mainEntity: FAQS_DATA.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${manrope.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-navy antialiased selection:bg-gold/20 selection:text-navy">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
