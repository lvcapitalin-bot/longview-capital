export interface ComplianceOfficer {
  name: string;
  designation: string;
  email: string;
  phone: string;
  address: string;
}

export const COMPLIANCE_INFO = {
  sebiRegistrationNumber: "Application Filed with SEBI — In Process / Pending Allotment (Expected in 2–3 Months)",
  researchAnalystName: "Harsh Nenwani",
  registeredEntityName: "Longview Capital",
  registeredOffice: "5, First Floor, Akash Towers, Judges Bunglow Road, Bodakdev, Ahmedabad – 380054, Gujarat, India",
  corporateEmail: "lvcapital.in@gmail.com",
  contactNumber: "+91 80005 21297",
  
  complianceOfficer: {
    name: "Harsh Nenwani",
    designation: "Principal Compliance Officer & Research Analyst",
    email: "lvcapital.in@gmail.com",
    phone: "+91 80005 21297",
    address: "5, First Floor, Akash Towers, Judges Bunglow Road, Bodakdev, Ahmedabad – 380054, Gujarat, India",
  } as ComplianceOfficer,

  grievanceOfficer: {
    name: "Sunny Nenwani",
    designation: "Grievance Redressal Officer",
    email: "lvcapital.in@gmail.com",
    phone: "+91 79847 21288",
    address: "5, First Floor, Akash Towers, Judges Bunglow Road, Bodakdev, Ahmedabad – 380054, Gujarat, India",
  } as ComplianceOfficer,

  pmsDisclaimer:
    "IMPORTANT REGULATORY NOTICE: Longview Capital has submitted an application for SEBI Research Analyst registration (application currently under review and pending allotment). Research Analyst regulations in no manner authorize the provision of Portfolio Management Services (PMS), discretionary asset management, or handling of client capital. Longview Capital does not pool funds, does not manage client brokerage accounts, and does not accept monies for portfolio management. All publications are currently for educational and fundamental research analysis purposes.",

  generalDisclaimer:
    "Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The securities quoted are for illustration only and are not recommendatory.",

  grievanceProcedure: [
    {
      step: 1,
      title: "Direct Grievance to Longview Capital",
      description: "Clients can file their grievances directly by emailing lvcapital.in@gmail.com or contacting our Grievance Redressal Officer. All grievances are acknowledged within 24-48 hours and resolved within 7 to 21 working days."
    },
    {
      step: 2,
      title: "Escalation to SEBI SCORES Portal",
      description: "If the resolution is not received within 30 days or if you are not satisfied with the resolution, you may lodge a complaint on SEBI SCORES (SEBI Complaints Redress System) at https://scores.sebi.gov.in."
    },
    {
      step: 3,
      title: "Online Dispute Resolution (ODR) Portal",
      description: "Investors can also initiate dispute resolution through the SMART ODR Portal (Securities Market Approach for Resolution Through ODR Portal) at https://smartodr.in."
    }
  ],

  investorCharter: {
    mission: "To protect the interests of investors by providing genuine, well-researched, independent fundamental stock research and fostering a disciplined long-term investing ethos.",
    vision: "To become a trusted research partner for Indian investors through transparency, integrity, and analytical excellence.",
    servicesProvided: [
      "Publishing independent fundamental equity research reports.",
      "Providing detailed investment rationale, business analysis, and associated downside risks.",
      "Maintaining high standards of diligence, honesty, and corporate governance scrutiny.",
      "Clear articulation of methodology and valuation models without making unrealistic or assured return promises."
    ],
    rightsOfInvestors: [
      "Right to receive unbiased, independent research reports based on fundamental facts.",
      "Right to know all material conflict of interest disclosures as mandated by SEBI (Research Analysts) Regulations, 2014.",
      "Right to receive transparent grievance redressal mechanisms and timely responses.",
      "Right to privacy and data protection as per applicable Indian data protection laws."
    ],
    dosAndDonts: {
      dos: [
        "Always read the full research report including risk factors and disclosures before investing.",
        "Assess whether the research ideas align with your personal risk profile and investment horizon.",
        "Ensure all subscription fees are paid through legitimate banking channels only (NEFT/RTGS/UPI) to the official account.",
        "Keep track of research updates and ongoing business performance tracking."
      ],
      donts: [
        "Do not expect assured, guaranteed or risk-free returns from equity investments.",
        "Do not trade based on unverified tips, rumors, or social media sensationalism.",
        "Do not share your trading terminal passwords, OTPs, or broker credentials with anyone, including research analysts.",
        "Do not make investment decisions without evaluating downside business volatility."
      ]
    }
  }
};
