"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Search,
  Clock,
  Target,
  FileText,
  Mail,
  Phone,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Lock,
  Layers,
  Award,
  Users,
  Briefcase,
  Stethoscope,
  Compass,
  AlertTriangle,
  Scale
} from "lucide-react";
import { BRAND } from "@/data/brand";
import { MountainMotif } from "@/components/MountainMotif";
import { ConsultationModal } from "@/components/ConsultationModal";
import { CompoundingVisualizer } from "@/components/CompoundingVisualizer";
import { FAQSection } from "@/components/FAQSection";

export default function HomePageClient() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [modalDefaultInterest, setModalDefaultInterest] = useState("Equity Research Subscription");

  const openEnquiry = (interest = "Equity Research Subscription") => {
    setModalDefaultInterest(interest);
    setIsConsultationOpen(true);
  };

  const sunnyWhatsappUrl = `https://wa.me/${BRAND.contact.whatsappDefaultNumber}?text=${encodeURIComponent(
    "Hello Sunny, I would like to schedule a consultation regarding Longview Capital's investment research services."
  )}`;

  return (
    <div className="relative bg-[#FAF8F5]">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <MountainMotif
          variant="watermark"
          className="top-0 right-0 -mr-16 -mt-8 opacity-25"
          opacity={0.25}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-navy leading-[1.12] tracking-tight font-bold">
              Invest With Perspective. <br />
              <span className="gold-gradient-text italic font-normal">
                Build Wealth With Purpose.
              </span>
            </h1>

            {/* Direct, High-Signal Subheading (No Fluff) */}
            <p className="text-base sm:text-lg text-warmgrey max-w-2xl mx-auto font-light leading-relaxed">
              We provide independent, fundamental stock research for HNIs, business owners, and professionals who prioritize business value over short-term market noise.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={() => setIsConsultationOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 bg-gold hover:bg-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-goldGlow transition duration-200 flex items-center justify-center gap-2"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/research"
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-[#FAF8F4] text-navy border border-[#E8D2A7] font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition duration-200 flex items-center justify-center gap-2"
              >
                <span>Explore Our Research</span>
                <ArrowUpRight className="w-4 h-4 text-gold" />
              </Link>
            </div>

            {/* Credential Indicators Ribbon (SEBI Registration In Process) */}
            <div className="pt-6 border-t border-[#E8D2A7]/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-navy font-semibold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span>SEBI Registration In Process</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Target className="w-4 h-4 text-gold shrink-0" />
                <span>Zero Speculative Tips</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>3–5+ Year Compounding Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE INVESTMENT CALCULATOR */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-6 space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold block">
              Calculate Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-navy font-bold">
              See How Long-Term Investing Grows Your Wealth
            </h2>
            <p className="text-xs sm:text-sm text-warmgrey">
              Adjust the sliders below to see the impact of patient 3 to 10+ year compounding.
            </p>
          </div>

          <CompoundingVisualizer />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TWO MAIN SERVICES */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
              How We Help You Invest
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto my-2" />
            <p className="text-xs sm:text-sm text-warmgrey">
              Choose the model that matches how you prefer to build long-term wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* SERVICE 1: SUBSCRIPTION-BASED EQUITY RESEARCH */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7] shadow-[0_8px_30px_-10px_rgba(16,37,66,0.06)] hover:border-gold transition duration-200 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-1.5 w-full bg-gold" />
                <div className="p-7 sm:p-8 space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold shrink-0">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E8D2A7]/70">
                      Subscription
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-navy font-bold mb-2">
                      Equity Research Subscription
                    </h3>
                    <p className="text-xs sm:text-sm text-warmgrey leading-relaxed">
                      Regular, fundamental stock research ideas delivered on a subscription basis—built for self-directed investors looking for disciplined, long-term equity opportunities.
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs text-navy font-medium border-t border-[#E8D2A7]/50 pt-4">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>2 regular fundamental stock reports every month + tactical notes when opportunities arise</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>Focus on long-term wealth creation &amp; Small and Mid-Cap businesses</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>Complete thesis, balance-sheet checks, valuations &amp; downside risks</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>Direct delivery via WhatsApp &amp; Email with ongoing updates</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-2">
                <Link
                  href="/research"
                  className="w-full py-3.5 px-6 bg-gold hover:bg-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm hover:shadow-goldGlow transition flex items-center justify-center gap-2"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* SERVICE 2: PERSONALIZED WEALTH ADVISORY */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7] shadow-[0_8px_30px_-10px_rgba(16,37,66,0.06)] hover:border-navy/40 transition duration-200 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-1.5 w-full bg-navy" />
                <div className="p-7 sm:p-8 space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-navy shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-navy bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E8D2A7]/70">
                      Personalized
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-navy font-bold mb-2">
                      Personalized Wealth Advisory
                    </h3>
                    <p className="text-xs sm:text-sm text-warmgrey leading-relaxed">
                      One-on-one wealth management advice tailored to your individual risk profile, financial goals, liquidity needs, and long-term investment horizon.
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs text-navy font-medium border-t border-[#E8D2A7]/50 pt-4">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                      <span>Structured around your risk profile, goals &amp; time horizon</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                      <span>Disciplined asset allocation &amp; long-term wealth perspective</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                      <span>Periodic reviews &amp; steady guidance across market cycles</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                      <span>Confidential, direct consultation with our advisory team</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-2">
                <button
                  type="button"
                  onClick={() => openEnquiry("Personalized Wealth Advisory")}
                  className="w-full py-3.5 px-6 bg-navy hover:bg-navy-light text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition flex items-center justify-center gap-2"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </button>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-warmgrey text-center mt-6 max-w-2xl mx-auto">
            Research services are provided under applicable regulatory norms. All advisory engagements are subject to client suitability and regulatory requirements.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT YOU GET IN EVERY REPORT (CLEAN LUXURY EDITORIAL STYLE) */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
              Inside Our Research
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
              What You Get in Every Stock Report
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto my-2" />
            <p className="text-xs sm:text-sm text-warmgrey">
              Every report is written in clear, plain language so you always understand why a business is worth owning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold font-bold text-sm">
                01
              </div>
              <h3 className="font-serif font-bold text-navy text-lg">
                How the Company Makes Money
              </h3>
              <p className="text-xs text-warmgrey leading-relaxed">
                A simple breakdown of what products or services they sell, who their customers are, and why they stand out against competitors.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold font-bold text-sm">
                02
              </div>
              <h3 className="font-serif font-bold text-navy text-lg">
                Financial Health &amp; Debt Check
              </h3>
              <p className="text-xs text-warmgrey leading-relaxed">
                We verify bank balances, debt levels, and actual cash flows to ensure the company has the financial strength to survive tough times.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold font-bold text-sm">
                03
              </div>
              <h3 className="font-serif font-bold text-navy text-lg">
                Promoter &amp; Owner Track Record
              </h3>
              <p className="text-xs text-warmgrey leading-relaxed">
                We study who runs the business, their personal integrity, and whether they have a proven history of treating shareholders fairly.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold font-bold text-sm">
                04
              </div>
              <h3 className="font-serif font-bold text-navy text-lg">
                Fair Value &amp; Suggested Entry Price
              </h3>
              <p className="text-xs text-warmgrey leading-relaxed">
                We calculate what the business is realistically worth, so you know the right price to buy and avoid overpaying for market hype.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 shadow-sm hover:shadow-md transition space-y-3 md:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-navy font-bold text-sm">
                05
              </div>
              <h3 className="font-serif font-bold text-navy text-lg">
                Risks &amp; When We Would Recommend Selling
              </h3>
              <p className="text-xs text-warmgrey leading-relaxed">
                We clearly highlight what could go wrong, industry headwinds, and the exact red flags that would trigger our advice to exit the position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHO WE WORK WITH (INVESTOR PERSONAS) */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
              Investor Profiles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
              Who We Work With
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto my-2" />
            <p className="text-xs sm:text-sm text-warmgrey">
              Built for people who want to grow their wealth steadily without daily market stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Persona 1: Business Owners */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-7 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-navy text-xl">
                  Business Owners &amp; Founders
                </h3>
                <p className="text-xs text-warmgrey leading-relaxed">
                  You spend your energy building your own business. We help deploy your business profits into other proven, listed companies so your capital compounds outside your core venture.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E8D2A7]/40 text-[11px] font-semibold text-navy flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                <span>Zero distraction from your business</span>
              </div>
            </div>

            {/* Persona 2: Working Professionals & Doctors */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-7 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-navy text-xl">
                  Professionals &amp; Doctors
                </h3>
                <p className="text-xs text-warmgrey leading-relaxed">
                  You have high professional commitments and zero time to track stock charts or news feeds. We provide easy-to-read research so your monthly savings grow securely over 3–5+ years.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E8D2A7]/40 text-[11px] font-semibold text-navy flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                <span>Disciplined, stress-free investing</span>
              </div>
            </div>

            {/* Persona 3: Self-Directed Investors */}
            <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-7 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center text-gold">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-navy text-xl">
                  Self-Directed Stock Investors
                </h3>
                <p className="text-xs text-warmgrey leading-relaxed">
                  You enjoy investing in the stock market but want institutional-level balance sheet checks, forensic numbers, and objective thesis—without commission conflicts.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E8D2A7]/40 text-[11px] font-semibold text-navy flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                <span>100% unbiased, high-conviction ideas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. HOW WE THINK ABOUT INVESTING */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Header Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
                Our Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold leading-tight">
                How We Think About Investing
              </h2>
              <div className="w-12 h-0.5 bg-gold" />
              <p className="text-xs sm:text-sm text-warmgrey leading-relaxed">
                Stock markets fluctuate every single day, but real businesses grow over years. We focus entirely on understanding the underlying company, its management honesty, and buying at a fair price.
              </p>
              <div className="pt-2">
                <Link
                  href="/philosophy"
                  className="inline-flex items-center gap-2 text-xs font-bold text-navy hover:text-gold-dark transition"
                >
                  <span>Explore Our Full Philosophy</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </Link>
              </div>
            </div>

            {/* Right Three Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Think */}
              <div className="bg-white rounded-2xl border border-[#E8D2A7]/70 p-6 shadow-sm hover:shadow-md transition space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center font-serif text-navy font-bold text-base">
                  01
                </div>
                <h3 className="text-xl font-serif font-bold text-navy">Think</h3>
                <p className="text-xs text-warmgrey leading-relaxed">
                  Look beyond daily market noise. Understand the real business, who buys from them, and how safely they are financed.
                </p>
              </div>

              {/* Invest */}
              <div className="bg-white rounded-2xl border border-[#E8D2A7]/70 p-6 shadow-sm hover:shadow-md transition space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center font-serif text-navy font-bold text-base">
                  02
                </div>
                <h3 className="text-xl font-serif font-bold text-navy">Invest</h3>
                <p className="text-xs text-warmgrey leading-relaxed">
                  Make decisions backed by deep numbers, honest management, and price discipline—not social media trends.
                </p>
              </div>

              {/* Grow */}
              <div className="bg-white rounded-2xl border border-[#E8D2A7]/70 p-6 shadow-sm hover:shadow-md transition space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8D2A7] flex items-center justify-center font-serif text-navy font-bold text-base">
                  03
                </div>
                <h3 className="text-xl font-serif font-bold text-navy">Grow</h3>
                <p className="text-xs text-warmgrey leading-relaxed">
                  Give quality companies the patience they need to compound. Lasting wealth is built patiently, not overnight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. MEET THE FOUNDERS */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
              The Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
              Meet the Founders
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto my-2" />
            <p className="text-xs sm:text-sm text-warmgrey">
              Direct access to Sunny and Harsh in Ahmedabad. No intermediaries, no call centers.
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

                <p className="text-xs sm:text-sm text-warmgrey leading-relaxed">
                  Focused on helping investors approach the markets with clarity, perspective and a long-term mindset.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8D2A7]/50 flex items-center justify-between gap-2 text-xs">
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

                <p className="text-xs sm:text-sm text-warmgrey leading-relaxed">
                  Focused on fundamental research, business analysis and identifying investment opportunities through a disciplined research process.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8D2A7]/50 flex items-center justify-between gap-2 text-xs">
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

          <div className="mt-8 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-bold text-navy hover:text-gold-dark transition"
            >
              <span>Know More About Our Story &amp; Values</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <FAQSection />

      {/* ========================================================================= */}
      {/* 9. FINAL CONVERSATION CTA */}
      {/* ========================================================================= */}
      <section className="py-14 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
            Start a Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
            Every Good Investment Journey Begins With a Conversation.
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto my-2" />
          <p className="text-xs sm:text-sm text-warmgrey max-w-xl mx-auto leading-relaxed">
            Let&apos;s understand your investment objectives and explore how thoughtful research can support your long-term journey.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
            <button
              type="button"
              onClick={() => setIsConsultationOpen(true)}
              className="px-8 py-3.5 bg-gold hover:bg-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition"
            >
              Book a Consultation
            </button>

            <a
              href={sunnyWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Global Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultInterest={modalDefaultInterest}
      />
    </div>
  );
}
