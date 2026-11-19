export interface FAQItem {
  question: string;
  answer: string;
  category?: "fundamental-research" | "working-with-us";
}

export const FAQS_DATA: FAQItem[] = [
  // -------------------------------------------------------------
  // AEO: Fundamental Equity Research & Investor Education Queries
  // -------------------------------------------------------------
  {
    category: "fundamental-research",
    question: "What is fundamental stock research?",
    answer:
      "Fundamental stock research is an investment discipline that evaluates a company's intrinsic economic value by analyzing its business model, financial statements, balance sheet strength, competitive advantages (moats), industry growth drivers, and corporate governance. Rather than speculating on short-term price charts or market sentiment, fundamental research treats an equity share as fractional ownership in a real-world commercial enterprise.",
  },
  {
    category: "fundamental-research",
    question: "How does fundamental analysis work in practice?",
    answer:
      "Fundamental analysis follows a rigorous four-stage process: (1) Business Understanding—identifying how the company generates revenue and defends its market share; (2) Financial Forensic Audit—examining 5–10 years of balance sheets, profit & loss, cash flows, and notes to accounts; (3) Governance & Capital Allocation Scrutiny—evaluating promoter integrity, executive compensation, debt discipline, and Return on Capital Employed (ROCE); and (4) Valuation & Margin of Safety—calculating fair intrinsic value to ensure investors do not overpay.",
  },
  {
    category: "fundamental-research",
    question: "What should investors examine before investing in an Indian company?",
    answer:
      "Before investing in an Indian equity, investors should examine five critical checkpoints: (1) Promoter Integrity and share pledging levels; (2) Balance Sheet Solvency, ensuring low debt-to-equity and interest coverage above 4x; (3) Operating Cash Flow consistency compared to reported net profits; (4) Return on Capital Employed (ROCE) consistently above 15–18%; and (5) Valuation discipline relative to the company's realistic 3–5 year earnings compounding potential.",
  },
  {
    category: "fundamental-research",
    question: "Why is cash flow and working capital more important than accounting profit?",
    answer:
      "Accounting profit (PAT) is an accrual opinion that can be influenced by revenue recognition policies and uncollected receivables. Operating and free cash flow represents actual cash received into the company's bank accounts. Bloated working capital—where money is trapped in unpaid customer bills (DSO) or unsold inventory (DIO)—can lead to liquidity crises even while reported profits appear healthy. Real corporate compounding requires cash profits that can be reinvested into growth or returned to shareholders.",
  },
  {
    category: "fundamental-research",
    question: "What are small-cap and mid-cap stocks in India, and what are their risks?",
    answer:
      "In India, as categorized by SEBI, mid-cap stocks are companies ranked 101st to 250th by market capitalization, while small-cap stocks are ranked 251st and below. These companies often offer significantly higher runway for compounding than mature large-caps because they operate in expanding niche industries. However, they carry higher risks: operational vulnerability, governance risks, and price volatility. Rigorous forensic research and balance sheet scrutiny are essential to separate durable market leaders from fragile businesses.",
  },
  {
    category: "fundamental-research",
    question: "Why does valuation matter for long-term compounding?",
    answer:
      "Buying a wonderful business at an extravagant valuation can lead to disappointing returns. Even if a business compounds its earnings at 15% annually, paying an excessive price-to-earnings (P/E) multiple exposes investors to multiple-contraction risk—where stock prices stagnate for years while earnings catch up with valuation. A sensible entry price provides a 'Margin of Safety' that protects capital against operational downturns.",
  },
  {
    category: "fundamental-research",
    question: "What is an economic moat, and why is business quality essential?",
    answer:
      "An economic moat is a durable competitive advantage that protects a company's high return on capital from competitive erosion. Common moats include cost advantages, high switching costs for customers, network effects, and intangible assets such as strong brands and regulatory licenses. Without a moat, high corporate profits invite aggressive competition, driving margins down to the cost of capital.",
  },

  // -------------------------------------------------------------
  // Operational & Longview Capital Advisory FAQs
  // -------------------------------------------------------------
  {
    category: "working-with-us",
    question: "Do you handle my money or make trades on my behalf?",
    answer:
      "No. We never hold your money or take custody of your funds. You retain 100% control of your investments in your existing personal Demat and trading account (with Zerodha, Groww, ICICI Direct, HDFC Sky, or any broker you prefer). We provide you with independent, thoroughly researched stock recommendations and guidance—you make the final decision and execute trades yourself.",
  },
  {
    category: "working-with-us",
    question: "How and when are your stock research reports delivered?",
    answer:
      "Subscribers receive 2 comprehensive fundamental stock reports every month directly on WhatsApp and email. In addition, when meaningful company developments occur (such as quarterly earnings results or temporary market mispricings), we send prompt tactical research notes so you always stay informed without being overwhelmed by daily market noise.",
  },
  {
    category: "working-with-us",
    question: "What is the recommended holding period for your research ideas?",
    answer:
      "Our focus is strictly on long-term wealth creation with an ideal holding horizon of 3 to 5+ years. We evaluate businesses on their fundamentals, management integrity, and competitive advantages—not day-trading charts or speculative momentum.",
  },
  {
    category: "working-with-us",
    question: "Can I discuss the research reports directly with Sunny or Harsh?",
    answer:
      "Yes, absolutely. Unlike large brokerage houses where you deal with relationship managers or call centers, Longview Capital offers direct access to our founding team. You can reach out directly on WhatsApp or schedule a call to clarify research theses, discuss portfolio allocation, or ask questions.",
  },
  {
    category: "working-with-us",
    question: "What is Longview Capital's regulatory status with SEBI?",
    answer:
      "Longview Capital has formally submitted its application for SEBI Research Analyst registration (application currently under review with final regulatory allotment expected in 2–3 months). We strictly follow SEBI Research Analyst standards, maintain an owner's mindset, and publish research purely for educational and fundamental analysis purposes.",
  },
  {
    category: "working-with-us",
    question: "How do I subscribe or begin working with Longview Capital?",
    answer:
      "You can start by clicking 'Let's Talk' on our website or messaging Sunny directly on WhatsApp at +91 79847 21288. We will discuss your investment goals, explain our research style, and share a sample report so you can see the depth of our work before you subscribe.",
  },
];
