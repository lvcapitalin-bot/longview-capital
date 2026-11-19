import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ShieldCheck,
  FileText,
  AlertTriangle,
  UserCheck,
  CheckCircle2,
  ExternalLink,
  Phone,
  Mail,
  Building
} from "lucide-react";
import { BRAND } from "@/data/brand";
import { COMPLIANCE_INFO } from "@/data/compliance";
import { MountainMotif } from "@/components/MountainMotif";

export const metadata = {
  title: "Regulatory Compliance & Disclosures | Longview Capital",
  description:
    "SEBI regulatory disclosures, Investor Charter, Grievance Redressal Mechanism, SCORES link, and mandatory disclosures for Longview Capital.",
};

export default function CompliancePage() {
  return (
    <div className="relative bg-[#FAF8F4] min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-16 bg-white border-b border-gold-border/60 relative overflow-hidden">
        <MountainMotif variant="watermark" className="right-0 top-0 opacity-15" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy font-bold">
            Compliance, Disclosures &amp; Investor Charter
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-warmgrey leading-relaxed">
            Longview Capital is committed to the highest standards of regulatory compliance, ethical research conduct, and investor grievance transparency.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* 1. SEBI Registration & Credentials */}
        <section className="bg-white rounded-2xl border border-gold-border p-8 shadow-card space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-ivory border border-gold-border flex items-center justify-center text-gold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold">Regulatory Authorization</span>
              <h2 className="text-xl font-serif font-bold text-navy">SEBI Registration Details</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm bg-ivory p-6 rounded-xl border border-gold-border/70">
            <div>
              <span className="text-warmgrey text-[11px] uppercase tracking-wider block">Entity Name</span>
              <strong className="text-navy">{COMPLIANCE_INFO.registeredEntityName}</strong>
            </div>
            <div>
              <span className="text-warmgrey text-[11px] uppercase tracking-wider block">Registered Research Analyst</span>
              <strong className="text-navy">{COMPLIANCE_INFO.researchAnalystName} (BBA – Finance)</strong>
            </div>
            <div>
              <span className="text-warmgrey text-[11px] uppercase tracking-wider block">SEBI Registration Number</span>
              <strong className="text-gold-dark font-mono text-xs">{COMPLIANCE_INFO.sebiRegistrationNumber}</strong>
            </div>
            <div>
              <span className="text-warmgrey text-[11px] uppercase tracking-wider block">Registered Office</span>
              <span className="text-navy">{COMPLIANCE_INFO.registeredOffice}</span>
            </div>
          </div>

          <p className="text-xs text-warmgrey leading-relaxed">
            {COMPLIANCE_INFO.generalDisclaimer}
          </p>
        </section>

        {/* 2. Critical Clarification: NO PMS / Portfolio Management */}
        <section className="bg-amber-50/70 rounded-2xl border-2 border-amber-200 p-8 shadow-subtle space-y-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="text-lg font-serif font-bold text-amber-950">
                Notice Regarding Portfolio Management Services (PMS)
              </h3>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
                {COMPLIANCE_INFO.pmsDisclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Grievance Redressal Mechanism & SCORES */}
        <section id="grievance" className="bg-white rounded-2xl border border-gold-border p-8 shadow-card space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-ivory border border-gold-border flex items-center justify-center text-gold">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold">Client Protection</span>
              <h2 className="text-xl font-serif font-bold text-navy">Grievance Redressal Mechanism</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPLIANCE_INFO.grievanceProcedure.map((proc) => (
              <div key={proc.step} className="p-5 bg-ivory rounded-xl border border-gold-border/70 space-y-2">
                <span className="w-7 h-7 rounded-full bg-gold text-white font-bold text-xs flex items-center justify-center">
                  {proc.step}
                </span>
                <h4 className="text-sm font-serif font-bold text-navy">{proc.title}</h4>
                <p className="text-xs text-warmgrey leading-relaxed">{proc.description}</p>
              </div>
            ))}
          </div>

          {/* Officers Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gold-border/50">
            <div className="p-5 bg-white border border-gold-border/70 rounded-xl space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold block">
                Principal Compliance Officer
              </span>
              <h5 className="text-sm font-serif font-bold text-navy">{COMPLIANCE_INFO.complianceOfficer.name}</h5>
              <p className="text-xs text-warmgrey">{COMPLIANCE_INFO.complianceOfficer.designation}</p>
              <div className="text-xs space-y-1 pt-1 text-navy">
                <p>Email: <a href={`mailto:${COMPLIANCE_INFO.complianceOfficer.email}`} className="text-gold-dark font-medium underline">{COMPLIANCE_INFO.complianceOfficer.email}</a></p>
                <p>Phone: {COMPLIANCE_INFO.complianceOfficer.phone}</p>
              </div>
            </div>

            <div className="p-5 bg-white border border-gold-border/70 rounded-xl space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold block">
                Grievance Redressal Officer
              </span>
              <h5 className="text-sm font-serif font-bold text-navy">{COMPLIANCE_INFO.grievanceOfficer.name}</h5>
              <p className="text-xs text-warmgrey">{COMPLIANCE_INFO.grievanceOfficer.designation}</p>
              <div className="text-xs space-y-1 pt-1 text-navy">
                <p>Email: <a href={`mailto:${COMPLIANCE_INFO.grievanceOfficer.email}`} className="text-gold-dark font-medium underline">{COMPLIANCE_INFO.grievanceOfficer.email}</a></p>
                <p>Phone: {COMPLIANCE_INFO.grievanceOfficer.phone}</p>
              </div>
            </div>
          </div>

          {/* External Links */}
          <div id="scores" className="flex flex-wrap gap-4 pt-4 text-xs font-semibold">
            <a
              href="https://scores.sebi.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy-light transition"
            >
              <span>SEBI SCORES Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold" />
            </a>
            <a
              href="https://smartodr.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gold-border text-navy rounded-lg hover:bg-ivory transition"
            >
              <span>SMART ODR Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold" />
            </a>
          </div>
        </section>

        {/* 4. Investor Charter */}
        <section id="investor-charter" className="bg-white rounded-2xl border border-gold-border p-8 shadow-card space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-ivory border border-gold-border flex items-center justify-center text-gold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold">SEBI Prescribed Norms</span>
              <h2 className="text-xl font-serif font-bold text-navy">Investor Charter for Research Analysts</h2>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-warmgrey leading-relaxed">
            <div className="p-4 bg-ivory rounded-xl border border-gold-border/60">
              <strong className="text-navy block mb-1">A. Mission and Vision Statement:</strong>
              <p><strong>Mission:</strong> {COMPLIANCE_INFO.investorCharter.mission}</p>
              <p className="mt-1"><strong>Vision:</strong> {COMPLIANCE_INFO.investorCharter.vision}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Dos */}
              <div className="p-5 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>DOs for Investors</span>
                </h4>
                <ul className="space-y-2 text-xs text-emerald-950">
                  {COMPLIANCE_INFO.investorCharter.dosAndDonts.dos.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div className="p-5 bg-rose-50/50 border border-rose-200 rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>DON&apos;Ts for Investors</span>
                </h4>
                <ul className="space-y-2 text-xs text-rose-950">
                  {COMPLIANCE_INFO.investorCharter.dosAndDonts.donts.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
