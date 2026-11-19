"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { LongviewLogo } from "./LongviewLogo";
import { BRAND } from "@/data/brand";
import { ConsultationModal } from "./ConsultationModal";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F4]/95 backdrop-blur-md shadow-sm border-b border-gold-border/80 py-3"
            : "bg-[#FAF8F4] border-b border-gold-border/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <LongviewLogo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {BRAND.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-navy font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold"
                      : "text-navy/80 hover:text-navy hover:after:w-full"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Primary CTA: Let's Talk */}
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-gold hover:bg-gold-dark rounded-lg transition-all duration-200 shadow-sm hover:shadow-goldGlow"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-gold rounded-lg"
            >
              Let&apos;s Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy hover:text-gold transition rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-30 lg:hidden bg-[#FAF8F4] overflow-y-auto border-b border-gold-border px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {BRAND.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 border-b border-gold-border/40 flex items-center justify-between ${
                    isActive ? "text-gold-dark font-bold" : "text-navy"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-warmgrey">&rarr;</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsConsultationOpen(true);
              }}
              className="w-full py-3 px-4 flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white rounded-lg text-sm font-semibold shadow-sm"
            >
              <span>Book a Consultation (Let&apos;s Talk)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Direct Advisors Phone in Mobile Menu */}
          <div className="mt-8 pt-6 border-t border-gold-border/60">
            <span className="text-[11px] font-bold text-warmgrey uppercase tracking-widest block mb-3">
              Direct Advisory Line (Ahmedabad)
            </span>
            <div className="space-y-2 text-xs text-navy">
              <a
                href={`tel:${BRAND.team[0].phone}`}
                className="flex items-center gap-2 py-1 text-navy hover:text-gold"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>{BRAND.team[0].name} ({BRAND.team[0].role}): <strong>{BRAND.team[0].phone}</strong></span>
              </a>
              <a
                href={`tel:${BRAND.team[1].phone}`}
                className="flex items-center gap-2 py-1 text-navy hover:text-gold"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>{BRAND.team[1].name} ({BRAND.team[1].role}): <strong>{BRAND.team[1].phone}</strong></span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Global Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
};
