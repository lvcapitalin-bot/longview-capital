"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Search,
  FileText,
  Mail,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  HelpCircle,
  FileCheck,
  MessageSquare,
  XCircle,
  MessageCircle,
  Filter,
  Scale
} from "lucide-react";
import { BRAND } from "@/data/brand";
import { MountainMotif } from "@/components/MountainMotif";
import { SampleReportModal } from "@/components/SampleReportModal";
import { ConsultationModal } from "@/components/ConsultationModal";
import { FAQSection } from "@/components/FAQSection";

export default function ResearchPage() {
  const [isSampleOpen, setIsSampleOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const sunnyWhatsappUrl = `https://wa.me/${BRAND.contact.whatsappDefaultNumber}?text=${encodeURIComponent(
    "Hello Sunny, I would like to learn more about subscribing to Longview Capital's stock research."
  )}`;

  return (
    <div className="relative bg-[#FAF8F5]">
      {/* 1. HERO SECTION */}
      <section className="pt-12 pb-14 md:pt-20 md:pb-18 relative overflow-hidden">
        <MountainMotif variant="watermark" className="right-0 top-0 opacity-25" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
            Independent Equity Research
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-navy leading-tight font-bold">
            Research Built Around the Bigger Picture.
          </h1>
          <div className="w-12 h-0.5 bg-gold mx-auto" />

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-warmgrey leading-relaxed font-light">
            We believe investment research should help you understand what you own, why you own it, and what makes a company worth holding for years.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => setIsSampleOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 bg-gold hover:bg-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request Sample Report</span>
            </button>
            <button
              onClick={() => setIsConsultOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-[#FAF8F4] text-navy border border-[#E8D2A7] font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition"
            >
              <span>Enquire About Subscriptions</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE EVALUATE */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
              Selection Criteria
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
              What We Actually Evaluate
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto my-2" />
            <p className="text-xs sm:text-sm text-warmgrey">
              Before any company enters our research coverage, it must pass strict business quality, financial integrity, and valuation checks.
            </p>
          </div>

          <div className="space-y-6">
            {/* 1. Long-Term Investment Research */}
            <div
              id="long-term"
              className="scroll-mt-24 bg-white border border-[#E8D2A7]/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gold block">
                        01 &bull; Criteria
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif text-navy font-bold">
                        Long-Term Research
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-warmgrey leading-relaxed">
                    Designed for investors seeking 3 to 5+ year business compounding rather than quarterly earnings gambling.
                  </p>
                  <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8D2A7]/60 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800 block">
                      What We Strictly Avoid
                    </span>
                    <ul className="space-y-1.5 text-xs text-warmgrey">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>Daily tips, momentum hype, or headline trading</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>Turnaround stories with unproven cash flows</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-[#FAF8F5] rounded-xl border border-[#E8D2A7]/70 p-6 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy block border-b border-[#E8D2A7]/50 pb-2">
                    Key Qualifying Parameters
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>Sustained ROCE &amp; ROE</span>
                      </h4>
                      <p className="text-warmgrey leading-relaxed pl-5">
                        Consistent capital efficiency across industry cycles, not temporary commodity spikes.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>Reinvestment Runway</span>
                      </h4>
                      <p className="text-warmgrey leading-relaxed pl-5">
                        Expanding addressable markets where profits can be reinvested at high returns.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>Defensible Moat</span>
                      </h4>
                      <p className="text-warmgrey leading-relaxed pl-5">
                        Pricing power, customer switching costs, or distribution barriers protecting margins.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>Owner Alignment</span>
                      </h4>
                      <p className="text-warmgrey leading-relaxed pl-5">
                        High promoter ownership without debt pledges or questionable related-party transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Fundamental Stock Analysis */}
            <div
              id="fundamental"
              className="scroll-mt-24 bg-white border border-[#E8D2A7]/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold shrink-0">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gold block">
                        02 &bull; Methodology
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif text-navy font-bold">
                        Fundamental Stock Analysis
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-warmgrey leading-relaxed">
                    A thorough audit of balance sheets, cash conversion cycles, and valuation safety buffers before issuing any report.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-[#FAF8F5] rounded-xl border border-[#E8D2A7]/70 p-6 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy block border-b border-[#E8D2A7]/50 pb-2">
                    Financial Rigor
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>Cash Flow Reality Check</span>
                      </h4>
                      <p className="text-warmgrey leading-relaxed pl-5">
                        Ensuring accounting net profits convert into actual cash in the company&apos;s bank account.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>Working Capital Scrutiny</span>
                      </h4>
                      <p className="text-warmgrey leading-relaxed pl-5">
                        Checking receivables and inventory to confirm cash is not trapped in sluggish operations.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>Conservative Debt</span>
                      </h4>
                      <p className="text-warmgrey leading-relaxed pl-5">
                        Verifying that debt levels remain safe even in high-interest rate environments.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>Valuation Safety Margin</span>
                      </h4>
                      <p className="text-warmgrey leading-relaxed pl-5">
                        Ensuring you pay a price that offers realistic room for capital growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Small & Mid Cap Opportunities */}
            <div
              id="small-mid-cap"
              className="scroll-mt-24 bg-white border border-[#E8D2A7]/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold shrink-0">
                      <Search className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gold block">
                        03 &bull; Focus Area
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif text-navy font-bold">
                        Small &amp; Mid Cap Opportunities
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-warmgrey leading-relaxed">
                    Finding under-researched niche leaders with market share expansion runway, backed by proven promoter track records.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-[#FAF8F5] rounded-xl border border-[#E8D2A7]/70 p-6 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy block border-b border-[#E8D2A7]/50 pb-2">
                    Niche Focus
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>Under-Followed Leaders</span>
                      </h4>
                      <p className="text-warmgrey leading-relaxed pl-5">
                        Discovering specialized businesses before institutional herds catch on.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>Clean Promoters</span>
                      </h4>
                      <p className="text-warmgrey leading-relaxed pl-5">
                        Ensuring founders reinvest profits wisely and respect minority investors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT SUBSCRIBERS RECEIVE */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
              Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
              What Subscribers Receive
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto my-2" />
            <p className="text-xs sm:text-sm text-warmgrey">
              Everything you need to invest with conviction, delivered directly to your phone and inbox.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <div className="p-6 bg-white border border-[#E8D2A7]/80 rounded-2xl shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-navy">2 Full Research Reports Every Month</h4>
              <p className="text-xs text-warmgrey leading-relaxed">
                Detailed fundamental reports covering business models, accounting forensics, promoter records, and fair entry valuations.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E8D2A7]/80 rounded-2xl shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-navy">Tactical Opportunity Updates</h4>
              <p className="text-xs text-warmgrey leading-relaxed">
                Prompt updates when temporary market sell-offs create attractive buying opportunities in high-conviction companies.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E8D2A7]/80 rounded-2xl shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-navy">Quarterly Earnings Reviews</h4>
              <p className="text-xs text-warmgrey leading-relaxed">
                Ongoing tracking of company results so you know how the business is actually performing against our original thesis.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E8D2A7]/80 rounded-2xl shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-navy">Explicit Risks &amp; Exit Triggers</h4>
              <p className="text-xs text-warmgrey leading-relaxed">
                We clearly document what could go wrong and specify what red flags would prompt our advice to sell.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E8D2A7]/80 rounded-2xl shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-navy">Direct WhatsApp &amp; Email Delivery</h4>
              <p className="text-xs text-warmgrey leading-relaxed">
                Executive summaries and complete PDF reports sent directly to your WhatsApp and email.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E8D2A7]/80 rounded-2xl shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-navy">Direct Founder Access</h4>
              <p className="text-xs text-warmgrey leading-relaxed">
                Clarify any research question directly with Sunny or Harsh over phone or WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAMPLE REPORT SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8D2A7]/80 rounded-2xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold block">
                Preview Before You Subscribe
              </span>
              <h3 className="text-2xl font-serif text-navy font-bold">
                Experience Our Research Format
              </h3>
              <p className="text-xs sm:text-sm text-warmgrey max-w-lg leading-relaxed">
                Review a sample report to see our forensic balance sheet checks, owner evaluations, and risk framework before subscribing.
              </p>
            </div>

            <button
              onClick={() => setIsSampleOpen(true)}
              className="px-6 py-3.5 bg-gold hover:bg-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition shrink-0 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request Sample Report</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <FAQSection />

      {/* Modals */}
      <SampleReportModal isOpen={isSampleOpen} onClose={() => setIsSampleOpen(false)} />
      <ConsultationModal isOpen={isConsultOpen} onClose={() => setIsConsultOpen(false)} />
    </div>
  );
}
