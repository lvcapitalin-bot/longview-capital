import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Share2,
  Bookmark,
  CheckCircle2,
  FileText
} from "lucide-react";
import { INSIGHTS_ARTICLES, Article } from "@/data/insights";
import { MountainMotif } from "@/components/MountainMotif";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = INSIGHTS_ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <article className="relative bg-[#FAF8F5] min-h-screen">
      {/* Article Header */}
      <header className="pt-16 pb-16 bg-white border-b border-gold-border/60 relative overflow-hidden">
        <MountainMotif variant="watermark" className="right-0 top-0 opacity-15" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Back link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Insights</span>
          </Link>

          {/* Category & Read Time */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-ivory text-gold-dark font-bold uppercase tracking-wider border border-gold-border/60">
              {article.category}
            </span>
            <span className="text-warmgrey flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold" />
              {article.readTime}
            </span>
            <span className="text-warmgrey flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gold" />
              {article.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy leading-tight font-bold">
            {article.title}
          </h1>

          {/* Author Block */}
          <div className="flex items-center gap-4 pt-4 border-t border-gold-border/50">
            <div className="w-12 h-12 rounded-full bg-powder border-2 border-gold flex items-center justify-center font-serif text-lg font-bold text-navy shrink-0">
              {article.author.charAt(0)}
            </div>
            <div>
              <span className="text-sm font-serif font-bold text-navy block">
                {article.author}
              </span>
              <span className="text-xs text-warmgrey block">
                {article.authorRole} &bull; Longview Capital
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Lead Excerpt */}
        <div className="p-6 bg-white border-l-4 border-gold rounded-r-2xl shadow-subtle mb-10 text-base sm:text-lg text-navy font-serif italic leading-relaxed">
          &ldquo;{article.excerpt}&rdquo;
        </div>

        {/* Body Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg text-navy/90 leading-relaxed font-light">
          {article.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Key Takeaways Card */}
        <div className="my-12 p-8 bg-white rounded-2xl border border-gold-border shadow-card space-y-4">
          <div className="flex items-center gap-2 text-gold">
            <CheckCircle2 className="w-5 h-5" />
            <h3 className="font-serif text-xl font-bold text-navy">
              Key Strategic Takeaways
            </h3>
          </div>
          <ul className="space-y-3 text-sm text-warmgrey">
            {article.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-ivory border border-gold text-gold text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed text-navy font-medium">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Regulatory Disclosure Box */}
        <div className="p-5 bg-ivory rounded-xl border border-gold-border/80 text-xs text-warmgrey space-y-2">
          <div className="flex items-center gap-2 text-navy font-bold">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Research &amp; Regulatory Disclosure</span>
          </div>
          <p className="leading-relaxed italic">
            {article.disclosure}
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-gold-border/60">
          <h3 className="text-2xl font-serif text-navy mb-6">
            Continue Reading Perspectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                className="p-6 bg-white rounded-xl border border-gold-border/70 shadow-subtle hover:shadow-cardHover transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-serif font-bold text-navy hover:text-gold-dark transition mb-2">
                    <Link href={`/insights/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                  <p className="text-xs text-warmgrey line-clamp-2">{rel.excerpt}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gold-border/40 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-warmgrey">{rel.readTime}</span>
                  <Link
                    href={`/insights/${rel.slug}`}
                    className="text-gold-dark font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Read Note</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
