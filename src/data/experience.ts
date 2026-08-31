export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  date: string;
  chapter: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "techdot-bd",
    company: "TechDot Global",
    role: "Business Development & Technology Executive",
    location: "Pakistan",
    date: "Nov 2026",
    chapter: "Business + Technology",
    points: [
      "Drove client acquisition through Upwork and Fiverr, writing proposals and managing bid-to-conversation workflows.",
      "Managed TechDot Global’s LinkedIn and Instagram presence, creating branded posts in Canva.",
      "Supported full-stack client projects, including dashboards and custom platforms.",
      "Performed QA testing and contributed to website development and optimization.",
    ],
  },
  {
    id: "dakia",
    company: "Dakia.ai",
    role: "SDR & Business Development Intern",
    location: "Pakistan",
    date: "Aug 2026",
    chapter: "Sales Development",
    points: [
      "Generated B2B leads through outbound calls, LinkedIn, and email outreach.",
      "Qualified prospects against business needs and scheduled product demos.",
      "Supported broader business development efforts across the sales cycle.",
    ],
  },
  {
    id: "vibe-coder",
    company: "TechDot Global — Vibe Coder",
    role: "Junior Developer",
    location: "Pakistan",
    date: "Jul 2026",
    chapter: "Digital Products",
    points: [
      "Built AI-assisted websites and business systems using React, Next.js, TypeScript, and Supabase.",
      "Developed and deployed scalable projects, including admin dashboards, management systems, and custom web applications.",
    ],
  },
  {
    id: "soneri",
    company: "Soneri Bank",
    role: "Banking Operations Associate",
    location: "Islamabad, Pakistan",
    date: "Aug 2024",
    chapter: "Finance",
    points: [
      "Facilitated account openings and processed cash transactions with accuracy.",
      "Resolved account inquiries while maintaining regulatory compliance.",
      "Supported day-to-day customer financial services on the banking floor.",
    ],
  },
  {
    id: "rda",
    company: "Rawalpindi Development Authority",
    role: "Full-Stack Developer",
    location: "Rawalpindi, Pakistan",
    date: "Jul 2024",
    chapter: "Technology",
    points: [
      "Built Python-based financial systems and secure RESTful APIs for a government authority.",
      "Delivered automated reporting solutions to replace manual operational workflows.",
      "Developed an attendance management system with a Python front end and SQL back end for tracking, logging, and reporting.",
    ],
  },
];

export const careerPath = [
  { label: "FinTech Education", detail: "FAST NUCES", href: "#education" },
  { label: "Public-Sector Tech", detail: "RDA", href: "#rda" },
  { label: "Banking Operations", detail: "Soneri Bank", href: "#soneri" },
  { label: "Digital Products", detail: "TechDot Global", href: "#vibe-coder" },
  { label: "Sales Development", detail: "Dakia.ai", href: "#dakia" },
  { label: "Business + Technology", detail: "Client growth", href: "#techdot-bd" },
] as const;
