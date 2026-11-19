import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FAQS_DATA } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Longview Capital | Independent Stock Research & Wealth Advisory | Ahmedabad",
  description:
    "Longview Capital is an independent investment research and wealth advisory firm based in Bodakdev, Ahmedabad. We empower long-term investors through fundamental equity research, balance sheet scrutiny, and patient compounding. Think. Invest. Grow.",
  keywords: [
    "Long-term investment research India",
    "Fundamental stock research",
    "Equity research services India",
    "Small and Mid Cap research Ahmedabad",
    "Investment research Ahmedabad",
    "Longview Capital",
    "SEBI Registration In Process",
    "Harsh Nenwani",
    "Sunny Nenwani",
    "Wealth Advisory Bodakdev Ahmedabad"
  ],
  authors: [{ name: "Longview Capital" }],
  creator: "Longview Capital",
  publisher: "Longview Capital",
  metadataBase: new URL("https://www.lvcapital.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Longview Capital | Independent Stock Research & Wealth Advisory",
    description:
      "Invest With Perspective. Build Wealth With Purpose. Fundamental stock research for HNIs, business owners, and professionals in Ahmedabad.",
    url: "https://www.lvcapital.in",
    siteName: "Longview Capital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Longview Capital - Invest With Perspective. Build Wealth With Purpose.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Longview Capital | Independent Stock Research & Wealth Advisory",
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
  // Rich Structured Schema for Google Search & AI Overviews (Google AI, Gemini, ChatGPT, Perplexity)
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
          "Independent fundamental stock research and personalized wealth advisory firm based in Bodakdev, Ahmedabad, India. Founded by Sunny Nenwani and Harsh Nenwani. SEBI Research Analyst registration application under process.",
        telephone: "+91-7984721288",
        email: "lvcapital.in@gmail.com",
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
        founder: [
          {
            "@type": "Person",
            name: "Sunny Nenwani",
            jobTitle: "Financial Analyst",
            telephone: "+91-7984721288",
          },
          {
            "@type": "Person",
            name: "Harsh Nenwani",
            jobTitle: "Research Analyst",
            telephone: "+91-8000521297",
          },
        ],
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        knowsAbout: [
          "Equity Research",
          "Fundamental Stock Analysis",
          "Small and Mid Cap Equities",
          "Wealth Advisory",
          "Portfolio Asset Allocation"
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
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
