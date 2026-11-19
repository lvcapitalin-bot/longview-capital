import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { BRAND } from "@/data/brand";

export const metadata = {
  title: "Terms and Conditions | Longview Capital",
  description: "Terms and conditions governing the use of Longview Capital website and research services.",
};

export default function TermsPage() {
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
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-1">
              Legal Framework
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-warmgrey mt-2">
              Last updated: November 2026 &bull; Longview Capital, Ahmedabad
            </p>
          </div>

          <div className="space-y-6 text-sm text-warmgrey leading-relaxed border-t border-gold-border/50 pt-6">
            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">1. Acceptance of Terms</h2>
              <p>
                By accessing this website (www.lvcapital.in) or utilizing research reports published by Longview Capital, you agree to be bound by these Terms and Conditions and all applicable Indian securities market regulations.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">2. Nature of Services</h2>
              <p>
                Longview Capital acts as an independent investment research provider. All research notes, commentaries, and educational analyses are intended solely for the informational and analytical use of registered subscribers.
              </p>
              <p className="font-semibold text-navy">
                Important: Longview Capital does not offer portfolio management services (PMS), does not execute trades on behalf of clients, does not pool funds, and does not promise assured or guaranteed returns.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">3. Intellectual Property Rights</h2>
              <p>
                All content, trademarks, logos, analysis formats, and research publications are the proprietary intellectual property of Longview Capital. Redistribution, re-transmission, sharing on social media groups, or commercial reproduction of our subscription reports without express written authorization is strictly prohibited.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">4. Limitation of Liability</h2>
              <p>
                Securities markets involve substantial risk of volatility and capital impairment. Longview Capital and its partners (Sunny Nenwani, Harsh Nenwani) shall not be liable for any direct, indirect, incidental, or consequential losses incurred by investors arising from investment decisions made based on published research reports. Investors must assess suitability based on their individual financial situation.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">5. Governing Law and Jurisdiction</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any legal disputes arising in relation to this website or our research services shall be subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat, India.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
