import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { BRAND } from "@/data/brand";

export const metadata = {
  title: "Privacy Policy | Longview Capital",
  description: "Privacy policy and client data protection practices of Longview Capital.",
};

export default function PrivacyPolicyPage() {
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
              Data Protection &bull; Information Privacy
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
              Privacy Policy
            </h1>
            <p className="text-xs text-warmgrey mt-2">
              Last updated: November 2026 &bull; Longview Capital, Ahmedabad
            </p>
          </div>

          <div className="space-y-6 text-sm text-warmgrey leading-relaxed border-t border-gold-border/50 pt-6">
            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">1. Introduction</h2>
              <p>
                Longview Capital (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy, confidentiality, and security of our website visitors, clients, and subscribers. This Privacy Policy outlines our procedures regarding the collection, use, and disclosure of personal information when you use our website (www.lvcapital.in) and research subscription services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">2. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when submitting an enquiry, requesting a sample research report, or subscribing to our publications. This may include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Full Name and contact details (email address, mobile phone number).</li>
                <li>City and state of residence.</li>
                <li>Investor profile category and approximate investment experience.</li>
                <li>Communication records and messages sent via our forms or WhatsApp.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">3. Purpose and Use of Information</h2>
              <p>
                The information collected is strictly utilized to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Respond to your genuine enquiries and schedule private consultations.</li>
                <li>Dispatch sample research notes and institutional previews requested by you.</li>
                <li>Deliver research publications via WhatsApp or email to authorized subscribers.</li>
                <li>Comply with applicable statutory and regulatory requirements under SEBI regulations.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">4. Data Confidentiality &amp; Non-Disclosure</h2>
              <p>
                We do not sell, rent, monetize, or trade your personal information to third-party telemarketers or advertisers. Information is disclosed only to authorized founding team members or where legally mandated by statutory authorities such as SEBI or Indian judicial bodies.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy">5. Contact Information</h2>
              <p>
                For any privacy concerns or request for deletion of your records, please contact our Grievance Officer at <a href={`mailto:${BRAND.contact.email}`} className="text-gold-dark font-medium underline">{BRAND.contact.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
