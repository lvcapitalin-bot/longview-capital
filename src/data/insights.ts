export interface Article {
  slug: string;
  title: string;
  category: "Market Perspectives" | "Company Analysis" | "Investment Education" | "Long-Term Investing" | "Small & Mid Cap Research";
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  featured?: boolean;
  coverImage: string;
  tags: string[];
  content: string[];
  keyTakeaways: string[];
  disclosure: string;
}

export const INSIGHTS_ARTICLES: Article[] = [
  {
    slug: "evaluating-management-quality-in-indian-small-caps",
    title: "Evaluating Management Quality in Indian Small & Mid-Caps: A Framework for Long-Term Investors",
    category: "Small & Mid Cap Research",
    date: "November 12, 2026",
    readTime: "7 min read",
    author: "Harsh Nenwani",
    authorRole: "Research Analyst",
    excerpt: "In smaller companies, the character and capital allocation skill of promoters can outweigh industry tailwinds. Here is our structured process for evaluating governance and integrity.",
    featured: true,
    coverImage: "/images/insights/management-quality.svg",
    tags: ["Small Caps", "Corporate Governance", "Capital Allocation", "Fundamental Analysis"],
    content: [
      "When evaluating small and mid-sized enterprises (SMEs and mid-caps) in India, the most significant risk is rarely business model failure—it is governance risk. While large-cap enterprises generally operate with institutional oversight and diversified boards, mid-sized firms frequently remain under the direct steering of founder-promoters.",
      "At Longview Capital, our first checkpoint before conducting any financial modeling is a forensic assessment of management intent and capital discipline.",
      "We examine promoter compensation relative to company net profit, related-party transactions, capital work-in-progress (CWIP) longevity, and historical treatment of minority shareholders across cycles.",
      "A promoter who reinvests retained earnings at incremental returns on capital employed (ROCE) exceeding 18-20% creates substantial compounding runway. Conversely, diversification into unrelated vanity projects or excessive pledging of shares indicates misaligned incentives.",
      "By eliminating businesses with questionable stewardship early, investors protect their portfolio from catastrophic drawdowns and preserve long-term capital compounding."
    ],
    keyTakeaways: [
      "Governance is asymmetric: poor governance can destroy an otherwise brilliant business model.",
      "Scrutinize related-party transactions and promoter salary caps across a multi-year horizon.",
      "High ROCE reinvested back into core moat businesses remains the gold standard of compounding.",
      "Never compromise on integrity for temporary valuation cheapness."
    ],
    disclosure: "Disclaimer: This article is strictly for educational and informational purposes. It does not constitute a recommendation or solicitation to buy or sell any specific securities. Please consult your financial advisor before making any investment decisions."
  },
  {
    slug: "why-we-think-in-years-not-days",
    title: "Why We Think in Years, Not Days: Overcoming Market Noise in a 24/7 Information Cycle",
    category: "Long-Term Investing",
    date: "November 04, 2026",
    readTime: "5 min read",
    author: "Sunny Nenwani",
    authorRole: "Financial Analyst",
    excerpt: "Financial markets reward emotional detachment and patience. We discuss why compressing investment horizons leads to decision fatigue and how to adopt an owner's mindset.",
    featured: true,
    coverImage: "/images/insights/long-term-mindset.svg",
    tags: ["Behavioral Finance", "Compounding", "Investment Discipline"],
    content: [
      "In modern financial media, velocity is mistaken for intelligence. Hourly market commentaries, macroeconomic panic-cycles, and breaking notifications encourage investors to treat equity holdings as lottery slips rather than fractional ownership in living commercial enterprises.",
      "Yet, historical market evidence is unequivocal: the bulk of wealth created in equities accrues to those who give resilient businesses the multi-year runway required to compound earnings.",
      "Consider what happens when you hold an equity for 3 to 7 years. Day-to-day liquidity shocks and sentiment swings cancel each other out. What remains is business performance: revenue growth, operating leverage, return on invested capital, and disciplined balance sheets.",
      "At Longview Capital, we deliberately step off the treadmill of daily prediction. We encourage investors to cultivate an institutional temperament—focused on business fundamentals and comfortable with the passage of time."
    ],
    keyTakeaways: [
      "Trading frequency is inversely correlated with long-term portfolio performance for most investors.",
      "Real businesses execute operational plans over multi-quarter cycles, not intraday swings.",
      "Patience is not passive inaction; it is the active discipline of letting your thesis compound.",
      "Tune out macroeconomic speculation and focus on business competitive advantages."
    ],
    disclosure: "Disclaimer: The views expressed above are educational perspectives on long-term wealth building and do not represent personal financial advice."
  },
  {
    slug: "understanding-the-power-of-working-capital-cycles",
    title: "Understanding the Power of Working Capital Cycles: How Cash Flow Separates Quality from Illusion",
    category: "Company Analysis",
    date: "October 24, 2026",
    readTime: "6 min read",
    author: "Harsh Nenwani",
    authorRole: "Research Analyst",
    excerpt: "Accounting profits can be cosmetic, but cash flow does not lie. Learn how cash conversion cycles reveal the true economic health of manufacturing and consumer businesses.",
    featured: false,
    coverImage: "/images/insights/cashflow-analysis.svg",
    tags: ["Financial Analysis", "Cash Flow", "Forensic Accounting"],
    content: [
      "A company can show increasing revenues and expanding EBITDA margins on paper while steadily sliding into insolvency. How? By locking up capital in bloated inventory and uncollected receivables.",
      "In our fundamental stock analysis at Longview Capital, free cash flow conversion is a non-negotiable metric. We calculate the Cash Conversion Cycle (Days Inventory Outstanding + Days Sales Outstanding - Days Payables Outstanding).",
      "When a business possesses genuine pricing power, it commands customer advances or rapid receivable clearance while negotiating favorable payment terms with suppliers. In contrast, businesses competing purely on credit terms often mask underlying structural weaknesses.",
      "For investors in Indian equities, examining operating cash flows alongside reported net profit is the most reliable filter against earnings manipulation."
    ],
    keyTakeaways: [
      "Reported profit is an accounting opinion; operating cash flow is an economic reality.",
      "A contracting cash conversion cycle indicates growing competitive leverage over suppliers and buyers.",
      "Always verify cumulative Free Cash Flow over a 5-year period against cumulative PAT.",
      "Working capital discipline is vital in small and mid-cap companies facing tighter credit conditions."
    ],
    disclosure: "Disclaimer: This analytical commentary is meant exclusively for educational evaluation of corporate financial statements."
  },
  {
    slug: "the-anatomy-of-a-bear-market-opportunity",
    title: "The Anatomy of a Market Correction: How Patient Investors Position for Long-Term Value",
    category: "Market Perspectives",
    date: "October 10, 2026",
    readTime: "8 min read",
    author: "Sunny Nenwani",
    authorRole: "Financial Analyst",
    excerpt: "Market pullbacks trigger widespread emotional panic, yet they represent the primary mechanism through which exceptional businesses can be acquired at sensible valuations.",
    featured: false,
    coverImage: "/images/insights/market-correction.svg",
    tags: ["Market Psychology", "Valuation", "Risk Management"],
    content: [
      "Every serious investor recognizes the adage to 'be fearful when others are greedy, and greedy when others are fearful.' Yet, when headlines turn red and volatility indexes surge, evolutionary human instincts scream to retreat to cash.",
      "The antidote to emotional panic is a pre-researched watchlist of quality companies with validated moats, robust balance sheets, and visionary leadership.",
      "During market drawdowns, liquidity discounts are applied indiscriminately across the board. Mediocre and world-class companies are sold off together. This creates rare windows of valuation mispricing.",
      "Having liquidity, psychological preparation, and a research-backed thesis allows investors to act with conviction when consensus is paralyzed."
    ],
    keyTakeaways: [
      "Drawdowns are regular features of equity markets, occurring multiple times each decade.",
      "Valuation margin of safety is best obtained when pessimism is widespread.",
      "Maintain a pre-researched shopping list of market leaders with clean balance sheets.",
      "Asset allocation discipline is your greatest psychological shock absorber."
    ],
    disclosure: "Disclaimer: Market investments are subject to market risks. Readers must exercise prudent risk judgment and seek appropriate professional consultation."
  },
  {
    slug: "demystifying-roic-and-economic-moats",
    title: "Demystifying ROIC and Economic Moats: What Makes a Franchise Truly Defensible?",
    category: "Investment Education",
    date: "September 28, 2026",
    readTime: "6 min read",
    author: "Harsh Nenwani",
    authorRole: "Research Analyst",
    excerpt: "High Return on Invested Capital attracts fierce competition. We examine how network effects, high switching costs, and regulatory barriers sustain excess returns over decades.",
    featured: false,
    coverImage: "/images/insights/economic-moats.svg",
    tags: ["ROIC", "Economic Moats", "Competitive Advantages"],
    content: [
      "Capitalism is an engine that aggressively erodes supernormal profits. When a sector exhibits high returns on capital, new entrants rush in with capital, commoditizing margins until returns drop towards the cost of capital.",
      "Only businesses fortified with durable economic moats resist this mean reversion. These moats typically manifest in four distinct forms: network effects, intangible assets (brands, patents, licenses), cost advantages, and high switching costs.",
      "In our fundamental research process, we do not merely calculate past ROIC; we assess whether the moat is widening, stable, or narrowing in the face of technological shifts.",
      "When an investor pairs a widening moat with sensible management and fair entry valuation, the probability of sustained long-term wealth creation multiplies significantly."
    ],
    keyTakeaways: [
      "ROIC measures how efficiently management turns capital into compounding profits.",
      "A moat must be durable enough to withstand aggressive competitive capital entry.",
      "Assess the direction of the moat (widening vs narrowing) rather than relying on static trailing metrics.",
      "Valuation determines your entry price, but moat durability determines your ultimate destination."
    ],
    disclosure: "Disclaimer: Educational content prepared for Longview Capital research subscribers and prospective investors. Not an offer to trade securities."
  }
];
