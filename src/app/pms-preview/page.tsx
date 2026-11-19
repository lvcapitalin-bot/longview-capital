import React from "react";
import Link from "next/link";
import { AlertTriangle, Lock, ShieldCheck, ArrowLeft } from "lucide-react";
import { MountainMotif } from "@/components/MountainMotif";

export const metadata = {
  title: "Portfolio Management (Draft / Compliance Gated) | Longview Capital",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PmsPreviewPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Compliance Watermark Banner */}
        <div className="p-6 bg-rose-50 border-2 border-rose-300 rounded-2xl space-y-2 text-rose-950">
          <div className="flex items-center gap-2 font-bold text-sm text-rose-900 uppercase tracking-wider">
            <Lock className="w-4 h-4 text-rose-700" />
            <span>Unpublished Internal Module &bull; Compliance Review Pending</span>
          </div>
          <p className="text-xs leading-relaxed">
            <strong>Mandatory Regulatory Notice:</strong> This page is a dormant, unpublished framework created for future operational readiness only. Longview Capital does not advertise, solicit, or offer Portfolio Management Services (PMS). SEBI Research Analyst registration (held by Harsh Nenwani) does not permit discretionary or non-discretionary portfolio management. This module will remain strictly unpublished and unlinked from public navigation until a separate SEBI Portfolio Manager registration and requisite regulatory clearances are obtained.
          </p>
        </div>

        {/* Structure of Future PMS Framework */}
        <div className="bg-white rounded-2xl border border-gold-border p-8 md:p-12 shadow-card space-y-8 opacity-90">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-1">
              Future Framework &bull; Ready For Activation
            </span>
            <h1 className="text-3xl font-serif text-navy font-bold">
              Discretionary Portfolio Management (Dormant)
            </h1>
            <p className="text-xs text-warmgrey mt-2">
              Architecture ready for regulatory filing and compliance approval.
            </p>
          </div>

          <div className="space-y-6 text-sm text-warmgrey leading-relaxed border-t border-gold-border/50 pt-6">
            <p>
              When authorized, Longview Capital&apos;s Portfolio Management strategy will mirror our foundational research philosophy: concentrated ownership in high-ROCE businesses with clean balance sheets and multi-year runway.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-ivory rounded-xl border border-gold-border/60 space-y-1">
                <h4 className="text-sm font-serif font-bold text-navy">Longview Focused Compounding Strategy</h4>
                <p className="text-xs text-warmgrey">
                  15-20 high-conviction companies with robust moat attributes and pricing power.
                </p>
              </div>
              <div className="p-4 bg-ivory rounded-xl border border-gold-border/60 space-y-1">
                <h4 className="text-sm font-serif font-bold text-navy">Small &amp; Mid-Cap Discovery Strategy</h4>
                <p className="text-xs text-warmgrey">
                  Emerging leaders with under-researched market positioning and disciplined capital allocation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
