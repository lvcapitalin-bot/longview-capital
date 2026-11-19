"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Filter,
  Search,
  Scale,
  RefreshCw,
  MessageCircle
} from "lucide-react";
import { BRAND } from "@/data/brand";
import { MountainMotif } from "@/components/MountainMotif";
import { ConsultationModal } from "@/components/ConsultationModal";

export default function AboutPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const sunnyWhatsappUrl = `https://wa.me/${BRAND.contact.whatsappDefaultNumber}?text=${encodeURIComponent(
    "Hello Sunny, I would like to learn more about Longview Capital."
  )}`;

  return (
    <div className="relative bg-[#FAF8F5]">
      {/* 1. HERO SECTION */}
      <section className="pt-12 pb-14 md:pt-20 md:pb-18 relative overflow-hidden">
        <MountainMotif variant="watermark" className="right-0 top-0 opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
            About Longview Capital
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-navy leading-tight font-bold">
            A Patient Perspective on Investing.
          </h1>
          <div className="w-12 h-0.5 bg-gold mx-auto" />

          <div className="max-w-2xl mx-auto space-y-3 text-warmgrey text-sm sm:text-base leading-relaxed font-light">
            <p>
              Longview Capital was founded on a simple principle: <strong className="text-navy font-semibold">investing is about owning real businesses, not trading tickers.</strong>
            </p>
            <p>
              In a world crowded with rapid market commentary and speculative tips, we focus on what creates lasting value—fundamental research, owner integrity, and long-term compounding.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY & PRINCIPLES (WHY LONGVIEW CAPITAL WAS FOUNDED) */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
                The Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
                Why Longview Capital Was Founded
              </h2>
              <div className="w-12 h-0.5 bg-gold" />

              <div className="space-y-3 text-xs sm:text-sm text-warmgrey leading-relaxed">
                <p>
                  Longview Capital was established in Ahmedabad to provide an unhurried, thoughtful alternative to speculative stock noise. Today, investors are flooded with endless trading tips, social media hype, and confusing financial jargon.
                </p>
                <p>
                  We believe meaningful wealth creation is a multi-year marathon rooted in real company earnings—not a gamble on what the market will do tomorrow morning.
                </p>
                <p>
                  By taking an owner&apos;s perspective, examining real balance sheets, and keeping fees clear and independent, we help our clients invest with genuine conviction.
                </p>
                <blockquote className="p-4 bg-white border-l-4 border-gold rounded-r-xl text-navy italic font-serif text-sm sm:text-base">
                  &ldquo;Think with clarity. Invest with conviction. Grow with patience.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Visual Branding Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#E8D2A7]/80 rounded-2xl p-7 shadow-sm relative">
                <MountainMotif variant="card-accent" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold block mb-2">
                  Our Brand Mark
                </span>
                <h3 className="text-xl font-serif text-navy font-bold mb-3">
                  The Mountain Vantage Point
                </h3>
                <p className="text-xs text-warmgrey leading-relaxed mb-5">
                  Our emblem shows an observer on a mountain peak looking through a spyglass. When you elevate your vantage point above daily market noise, short-term volatility becomes secondary to the broad, rewarding horizon of compounding.
                </p>

                <div className="space-y-2.5 border-t border-[#E8D2A7]/50 pt-4 text-xs text-navy font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>Independent Research Integrity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>Zero Brokerage or Trade Churning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>Focus on Real Business Value</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 4-STEP RESEARCH PROCESS (HOW WE CHOOSE STOCKS) */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
              How We Choose Stocks
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
              Our 4-Step Research Process
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto my-2" />
            <p className="text-xs sm:text-sm text-warmgrey">
              A straightforward framework to find solid businesses and avoid costly mistakes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 shadow-sm hover:shadow-md transition space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold font-serif font-bold text-base">
                  01
                </div>
                <h3 className="font-serif font-bold text-navy text-lg leading-snug">
                  Filter Out Risky Companies
                </h3>
                <p className="text-xs text-warmgrey leading-relaxed">
                  We immediately discard companies burdened with high debt, promoter share pledging, or aggressive accounting.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E8D2A7]/40 text-[11px] font-semibold text-gold-dark flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5" />
                <span>Capital Protection First</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 shadow-sm hover:shadow-md transition space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold font-serif font-bold text-base">
                  02
                </div>
                <h3 className="font-serif font-bold text-navy text-lg leading-snug">
                  Study the Business &amp; Owners
                </h3>
                <p className="text-xs text-warmgrey leading-relaxed">
                  We analyze how the company earns money, why customers stay loyal, and whether management treats shareholders fairly.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E8D2A7]/40 text-[11px] font-semibold text-gold-dark flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5" />
                <span>Moat &amp; Governance Check</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 shadow-sm hover:shadow-md transition space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold font-serif font-bold text-base">
                  03
                </div>
                <h3 className="font-serif font-bold text-navy text-lg leading-snug">
                  Check the Valuation
                </h3>
                <p className="text-xs text-warmgrey leading-relaxed">
                  Even great companies can be poor investments if bought too expensively. We only recommend buying with a margin of safety.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E8D2A7]/40 text-[11px] font-semibold text-gold-dark flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5" />
                <span>Sensible Entry Price</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 shadow-sm hover:shadow-md transition space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-navy font-serif font-bold text-base">
                  04
                </div>
                <h3 className="font-serif font-bold text-navy text-lg leading-snug">
                  Monitor &amp; Update Quarterly
                </h3>
                <p className="text-xs text-warmgrey leading-relaxed">
                  We review every financial quarter, tracking business execution and advising our subscribers whenever an update or exit is required.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E8D2A7]/40 text-[11px] font-semibold text-navy flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-navy" />
                <span>Continuous Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEET THE TEAM */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
              The Founders
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
              Meet Sunny &amp; Harsh
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto my-2" />
            <p className="text-xs sm:text-sm text-warmgrey">
              The founding team combining fundamental research diligence and personalized wealth guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Sunny Nenwani */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7] p-7 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#FAF8F5] border-2 border-gold flex items-center justify-center font-serif text-xl font-bold text-navy shrink-0 shadow-sm">
                    SN
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-navy font-bold">Sunny Nenwani</h3>
                    <p className="text-xs font-bold text-gold-dark uppercase tracking-wider">
                      Financial Analyst
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-warmgrey leading-relaxed">
                  <p className="text-navy font-medium italic">
                    &ldquo;Focused on helping investors approach the markets with clarity, perspective and a long-term mindset.&rdquo;
                  </p>
                  <p>
                    Sunny works closely with clients to understand their financial horizons, keeping portfolio allocations aligned with long-term goals rather than short-term market anxiety.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8D2A7]/50 flex flex-wrap items-center justify-between gap-2 text-xs">
                <a
                  href="tel:+917984721288"
                  className="font-bold text-navy hover:text-gold flex items-center gap-1.5 whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>+91 79847 21288</span>
                </a>
                <a
                  href={sunnyWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold flex items-center gap-1 whitespace-nowrap shrink-0 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp Sunny</span>
                </a>
              </div>
            </div>

            {/* Harsh Nenwani */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7] p-7 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#FAF8F5] border-2 border-gold flex items-center justify-center font-serif text-xl font-bold text-navy shrink-0 shadow-sm">
                    HN
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-navy font-bold">Harsh Nenwani</h3>
                    <p className="text-xs font-bold text-gold-dark uppercase tracking-wider">
                      Research Analyst
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-warmgrey leading-relaxed">
                  <p className="text-navy font-medium italic">
                    &ldquo;Focused on fundamental research, business analysis and identifying investment opportunities through a disciplined research process.&rdquo;
                  </p>
                  <p>
                    Harsh leads the analytical research at Longview Capital, performing forensic balance sheet checks, corporate governance audits, and valuation modeling across Small and Mid-Cap companies.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8D2A7]/50 flex flex-wrap items-center justify-between gap-2 text-xs">
                <a
                  href="tel:+918000521297"
                  className="font-bold text-navy hover:text-gold flex items-center gap-1.5 whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>+91 80005 21297</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsConsultationOpen(true)}
                  className="px-3.5 py-1.5 bg-navy hover:bg-navy-light text-white rounded-lg font-bold whitespace-nowrap shrink-0 transition"
                >
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-14 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
            Ready to Invest With Perspective?
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto my-2" />
          <p className="text-xs sm:text-sm text-warmgrey max-w-lg mx-auto">
            Connect with our team in Ahmedabad to discuss our research subscriptions or schedule a personalized consultation.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-8 py-3.5 bg-gold hover:bg-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition"
            >
              Let&apos;s Talk
            </button>
            <a
              href={sunnyWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Sunny</span>
            </a>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultInterest="General Enquiry"
      />
    </div>
  );
}
