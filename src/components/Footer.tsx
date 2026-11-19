import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldAlert, ArrowUpRight } from "lucide-react";
import { LongviewLogo } from "./LongviewLogo";
import { BRAND } from "@/data/brand";
import { COMPLIANCE_INFO } from "@/data/compliance";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gold-border/80 text-navy relative overflow-hidden">
      {/* Top Gold Trim */}
      <div className="h-1 w-full bg-gradient-to-r from-navy via-gold to-navy" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <LongviewLogo size="lg" showTagline={true} />
            <p className="text-sm text-warmgrey leading-relaxed pr-4 pt-2">
              An independent investment research and wealth advisory brand based in Ahmedabad, India. We advocate an owner&apos;s mindset: understanding businesses from first principles, respecting valuations, and embracing patience.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">
                Brand Philosophy
              </span>
              <p className="text-xs text-navy/90 italic font-serif mt-1">
                &ldquo;Good investing is not about predicting tomorrow. It is about understanding value and having the conviction to stay invested for the long term.&rdquo;
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy border-b border-gold-border/60 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {BRAND.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-warmgrey hover:text-navy hover:underline transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/compliance"
                  className="text-warmgrey hover:text-navy hover:underline transition"
                >
                  Compliance & Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research Focus (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy border-b border-gold-border/60 pb-2">
              Research Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/research#long-term" className="text-warmgrey hover:text-navy transition block">
                  Long-Term Wealth Creation
                </Link>
              </li>
              <li>
                <Link href="/research#fundamental" className="text-warmgrey hover:text-navy transition block">
                  Fundamental Stock Analysis
                </Link>
              </li>
              <li>
                <Link href="/research#small-mid-cap" className="text-warmgrey hover:text-navy transition block">
                  Small & Mid Cap Opportunities
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-warmgrey hover:text-navy transition block">
                  Market Perspectives & Insights
                </Link>
              </li>
              <li>
                <Link href="/compliance#investor-charter" className="text-warmgrey hover:text-navy transition block">
                  Investor Charter for Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy border-b border-gold-border/60 pb-2">
              Ahmedabad Office
            </h4>
            <div className="space-y-2.5 text-xs text-warmgrey">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-[12px]">
                  5, First Floor, Akash Towers,<br />
                  Judges Bunglow Road, Bodakdev,<br />
                  Ahmedabad - 380054, Gujarat, India.
                </address>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  className="text-navy hover:underline font-medium text-[12px]"
                >
                  {BRAND.contact.email}
                </a>
              </div>

              <div className="space-y-1 pt-1 border-t border-gold-border/40">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Sunny Nenwani: <a href="tel:+917984721288" className="text-navy font-semibold hover:underline">+91 79847 21288</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Harsh Nenwani: <a href="tel:+918000521297" className="text-navy font-semibold hover:underline">+91 80005 21297</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosures & Compliance Box */}
        <div className="bg-ivory border border-gold-border/80 rounded-xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div className="space-y-2 text-[11px] text-warmgrey leading-relaxed">
              <p>
                <strong className="text-navy">Regulatory Disclosures:</strong> Longview Capital has submitted an application for SEBI Research Analyst registration ({COMPLIANCE_INFO.sebiRegistrationNumber}). During the interim application processing period, all research publications and educational materials are provided for fundamental research and informational purposes only. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. Investments in securities are subject to market risks; read all scheme/offering related documents carefully before investing.
              </p>
              <p>
                <strong className="text-navy">Important Disclaimer on Portfolio Management:</strong> Research Analyst registration does not authorize Portfolio Management Services (PMS) or discretionary capital management. Longview Capital does not manage individual client portfolios or take custody of client funds. All ideas are research-only publications.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-[11px] font-medium text-navy">
                <Link href="/compliance#scores" className="hover:text-gold-dark underline">
                  SEBI SCORES Portal
                </Link>
                <span>•</span>
                <Link href="/compliance#grievance" className="hover:text-gold-dark underline">
                  Grievance Redressal Process
                </Link>
                <span>•</span>
                <Link href="/compliance#investor-charter" className="hover:text-gold-dark underline">
                  Investor Charter
                </Link>
                <span>•</span>
                <Link href="/risk-disclosures" className="hover:text-gold-dark underline">
                  Risk Disclosures
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line: Copyright, Tagline & Legal */}
        <div className="pt-6 border-t border-gold-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warmgrey">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Longview Capital. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-serif italic font-medium text-gold-dark">Think. Invest. Grow.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-navy transition">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-navy transition">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/compliance" className="hover:text-navy transition">
              Compliance
            </Link>
            <span>•</span>
            <Link href="/risk-disclosures" className="hover:text-navy transition">
              Risk Disclosure
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Accent Bar matching business card */}
      <div className="w-full flex h-2">
        <div className="bg-gold w-3/4" />
        <div className="bg-navy w-1/4" />
      </div>
    </footer>
  );
};
