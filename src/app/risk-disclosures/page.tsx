import React from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, ShieldAlert } from "lucide-react";
import { COMPLIANCE_INFO } from "@/data/compliance";

export const metadata = {
  title: "Risk Disclosures | Longview Capital",
  description: "Mandatory equity investment risk disclosures and market volatility warnings.",
};

export default function RiskDisclosuresPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark hover:underline mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-2xl border border-gold-border p-8 md:p-12 shadow-card space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-1">
                SEBI Statutory Disclosure
              </span>
              <h1 className="text-3xl font-serif text-navy font-bold">
                Mandatory Risk Disclosures
              </h1>
              <p className="text-xs text-warmgrey mt-1">
                Applicable to all readers, subscribers, and prospective investors.
              </p>
            </div>
          </div>

          <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
            {COMPLIANCE_INFO.generalDisclaimer}
          </div>

          <div className="space-y-6 text-sm text-warmgrey leading-relaxed border-t border-gold-border/50 pt-6">
            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">1. Equity Market Risks &amp; Volatility</h2>
              <p>
                Investing in equities involves risks including the possible loss of principal capital. Stock prices fluctuate based on numerous factors including macro-economic developments, interest rates, currency volatility, regulatory shifts, and corporate earnings trajectory.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">2. Small and Mid-Cap Specific Risks</h2>
              <p>
                Small and mid-cap companies typically demonstrate higher volatility and lower trading liquidity compared to established large-cap enterprises. During market downturns, liquidity can contract sharply, which may affect exit timing. Longview Capital conducts thorough balance sheet scrutiny, but business risks remain inherent.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">3. Past Performance Disclaimer</h2>
              <p>
                Past performance of any business, sector, or research recommendation is not indicative of future results. No statement on this website or in any research publication should be construed as an assurance, guarantee, or promise of positive returns.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">4. No Discretionary Portfolio Management</h2>
              <p>
                Subscribers retain 100% discretion and autonomy over their brokerage trading accounts. Longview Capital does not execute trades, does not hold custody of investor funds, and does not provide discretionary Portfolio Management Services (PMS).
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
