export interface TeamMember {
  name: string;
  role: string;
  qualification: string;
  phone: string;
  email: string;
  bio: string;
  badge?: string;
  imagePlaceholderText: string;
  highlights: string[];
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const BRAND = {
  name: "Longview Capital",
  tagline: "Think. Invest. Grow.",
  headline: "Invest With Perspective. Build Wealth With Purpose.",
  subheadline:
    "At Longview Capital, we believe successful investing begins with understanding businesses, thinking independently and looking beyond the noise of the markets.",
  storyLead:
    "We bring together thoughtful research and a disciplined, long-term investment approach to help investors make informed decisions.",
  extendedStory: [
    "At Longview Capital, we believe wealth creation is a journey that requires patience, discipline and perspective.",
    "Markets move every day. Businesses evolve over years. We believe investors should focus on the latter.",
    "Our approach is rooted in understanding businesses, identifying opportunities and looking beyond short-term market noise.",
    "Through fundamental research and a long-term investment perspective, we aim to help investors make more informed decisions.",
    "We believe that meaningful wealth is built through thoughtful decisions, not constant activity.",
    "Think with clarity. Invest with conviction. Grow with patience."
  ],
  supportingPhilosophy:
    "Good investing is not about predicting tomorrow. It is about understanding value and having the conviction to stay invested for the long term.",
  
  contact: {
    address: {
      line1: "5, First Floor, Akash Towers",
      line2: "Judges Bunglow Road, Bodakdev",
      city: "Ahmedabad",
      pincode: "380054",
      state: "Gujarat",
      country: "India",
      full: "5, First Floor, Akash Towers, Judges Bunglow Road, Bodakdev, Ahmedabad – 380054, Gujarat, India",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Longview+Capital,+Akash+Towers,+Judges+Bunglow+Rd,+Bodakdev,+Ahmedabad,+Gujarat+380054&t=&z=16&ie=UTF8&iwloc=&output=embed",
      googleBusinessProfileUrl: "https://share.google/plPQqs2RZ8KI2oewS",
      googleMapsDirectionsUrl: "https://share.google/plPQqs2RZ8KI2oewS",
    },
    email: "lvcapital.in@gmail.com",
    website: "www.lvcapital.in",
    websiteUrl: "https://www.lvcapital.in",
    whatsappDefaultNumber: "917984721288",
    whatsappMessage:
      "Hello Longview Capital, I would like to schedule a consultation regarding your investment research services.",
  },

  team: [
    {
      name: "Sunny Nenwani",
      role: "Financial Analyst",
      qualification: "",
      phone: "+91 79847 21288",
      email: "lvcapital.in@gmail.com",
      bio: "Focused on helping investors approach the markets with clarity, perspective and a long-term mindset.",
      badge: "Financial Analyst",
      imagePlaceholderText: "Sunny Nenwani",
      highlights: [
        "Strategic investor dialogue & perspective alignment",
        "Disciplined asset awareness & risk temperament",
        "Client relationship management & long-term orientation"
      ]
    },
    {
      name: "Harsh Nenwani",
      role: "Research Analyst",
      qualification: "",
      phone: "+91 80005 21297",
      email: "lvcapital.in@gmail.com",
      bio: "Focused on fundamental research, business analysis and identifying investment opportunities through a disciplined research process.",
      badge: "Research Analyst",
      imagePlaceholderText: "Harsh Nenwani",
      highlights: [
        "Rigorous fundamental equity analysis & balance sheet scrutiny",
        "Business moat, management track-record & corporate governance evaluation",
        "Small & Mid Cap research with risk-adjusted valuation frameworks"
      ]
    }
  ] as TeamMember[],

  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Research", href: "/research" },
    { label: "Our Philosophy", href: "/philosophy" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],

  researchServices: [
    {
      id: "long-term",
      title: "Long-Term Investment Research",
      description: "Research focused on identifying businesses with sound fundamentals and long-term compounding potential.",
      cta: "Explore Research",
      href: "/research#long-term",
      icon: "ShieldCheck",
      features: [
        "Focus on resilient business models with strong cash flows",
        "Detailed management quality and governance review",
        "Multidecade economic tailwinds analysis"
      ]
    },
    {
      id: "fundamental-analysis",
      title: "Fundamental Stock Analysis",
      description: "An independent approach to understanding businesses, financial performance, valuations and growth opportunities.",
      cta: "Our Approach",
      href: "/research#fundamental",
      icon: "BarChart3",
      features: [
        "Deep-dive financial statement analysis & forensic checks",
        "Valuation discipline across historical multiples & DCF logic",
        "Clear articulation of business drivers and operational levers"
      ]
    },
    {
      id: "small-mid-cap",
      title: "Small & Mid Cap Opportunities",
      description: "Research-led exploration of promising small and mid-sized businesses, with an emphasis on fundamentals and risk awareness.",
      cta: "Learn More",
      href: "/research#small-mid-cap",
      icon: "TrendingUp",
      features: [
        "Screening under-researched companies with niche market leadership",
        "Emphasis on balance sheet strength and working capital cycles",
        "Honest assessment of liquidity, volatility and downside risks"
      ]
    }
  ],

  differentiators: [
    {
      title: "Long-Term Thinking",
      description: "We look beyond daily market movements to identify durable economic advantages.",
      icon: "Clock"
    },
    {
      title: "Research-Driven Approach",
      description: "Our focus is on understanding businesses from first principles, not reacting to headlines.",
      icon: "Search"
    },
    {
      title: "Independent Perspective",
      description: "Decisions should be based on uncompromised analysis, completely detached from market hype.",
      icon: "Compass"
    },
    {
      title: "Disciplined Investing",
      description: "Patience and consistency matter more than frantic transaction volume.",
      icon: "Target"
    }
  ],

  philosophyPillars: [
    {
      step: "01",
      pillar: "Think",
      headline: "Think with Clarity",
      text: "Look beyond market noise. Understand the business, its fundamentals, governance quality and competitive advantages.",
      icon: "Eye"
    },
    {
      step: "02",
      pillar: "Invest",
      headline: "Invest with Conviction",
      text: "Make informed decisions backed by rigorous research, reasonable valuations and emotional discipline.",
      icon: "Scale"
    },
    {
      step: "03",
      pillar: "Grow",
      headline: "Grow with Patience",
      text: "Give quality investment ideas the time, runway and patience they need to compound sustainably.",
      icon: "Sprout"
    }
  ],

  subscriptionDeliverables: [
    {
      title: "2 Regular Research Reports / Month",
      description: "Comprehensive fundamental deep-dives on high-conviction businesses with thesis, risks and valuation."
    },
    {
      title: "Tactical Research Notes",
      description: "Occasional timely updates when specific market conditions or mispriced opportunities warrant analysis."
    },
    {
      title: "WhatsApp & Email Delivery",
      description: "Direct, instant delivery to your preferred channels so you never miss an institutional-grade report."
    },
    {
      title: "Quarterly Performance & Thesis Tracking",
      description: "Ongoing business updates during earnings season to monitor thesis validation and operational progress."
    }
  ]
};
