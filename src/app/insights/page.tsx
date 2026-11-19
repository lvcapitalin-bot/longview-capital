"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Filter,
  Tag,
  BookOpen,
  ShieldCheck
} from "lucide-react";
import { INSIGHTS_ARTICLES, Article } from "@/data/insights";
import { MountainMotif } from "@/components/MountainMotif";

const CATEGORIES = [
  "All",
  "Small & Mid Cap Research",
  "Long-Term Investing",
  "Company Analysis",
  "Market Perspectives",
  "Investment Education"
] as const;

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = INSIGHTS_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="pt-12 pb-10 md:pt-20 md:pb-14 relative overflow-hidden">
        <MountainMotif variant="watermark" className="right-0 top-0 opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
            Research Notes &amp; Commentaries
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-navy leading-tight font-bold">
            Perspectives &amp; Insights
          </h1>
          <div className="w-12 h-0.5 bg-gold mx-auto" />

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-warmgrey leading-relaxed font-light">
            In-depth commentaries on business models, corporate governance, balance sheet forensics, and the psychological discipline of compounding.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 sticky top-[65px] z-20 backdrop-blur-md bg-[#FAF8F5]/90 border-y border-[#E8D2A7]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                    selectedCategory === cat
                      ? "bg-navy text-white shadow-sm"
                      : "bg-white text-warmgrey hover:text-navy border border-[#E8D2A7]/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-warmgrey absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics, moats, tags..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-[#E8D2A7]/80 rounded-full text-xs text-navy placeholder:text-warmgrey focus:outline-none focus:border-gold transition shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E8D2A7]/80 p-8 shadow-sm">
              <BookOpen className="w-12 h-12 text-gold mx-auto mb-3" />
              <h3 className="text-xl font-serif text-navy font-bold mb-2">No Articles Found</h3>
              <p className="text-xs text-warmgrey mb-4">
                No published notes match your search query &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-gold text-white text-xs font-semibold rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-2xl border border-[#E8D2A7]/80 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6 md:p-7">
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between text-[11px] mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] text-gold-dark font-bold uppercase tracking-wider border border-[#E8D2A7]/60">
                        {article.category}
                      </span>
                      <span className="text-warmgrey flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-gold" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-serif text-navy font-bold leading-snug group-hover:text-gold-dark transition mb-3">
                      <Link href={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-xs text-warmgrey leading-relaxed mb-5">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-[#FAF8F5] text-warmgrey px-2 py-0.5 rounded border border-[#E8D2A7]/40"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Card */}
                  <div className="px-6 md:px-7 py-3.5 bg-[#FAF8F5] border-t border-[#E8D2A7]/50 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-white border border-gold flex items-center justify-center text-[10px] font-bold text-navy">
                        {article.author.charAt(0)}
                      </div>
                      <div className="text-left">
                        <span className="font-semibold text-navy block text-[11px]">{article.author}</span>
                        <span className="text-[10px] text-warmgrey">{article.date}</span>
                      </div>
                    </div>

                    <Link
                      href={`/insights/${article.slug}`}
                      className="text-gold-dark font-bold hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition"
                    >
                      <span>Read Note</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
