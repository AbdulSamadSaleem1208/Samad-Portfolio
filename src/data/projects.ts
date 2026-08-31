export type ProjectCategory = "fintech" | "ai" | "software";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  featured: boolean;
  date: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  features: string[];
  github?: string;
  live?: string;
  repoName?: string;
};

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "fintech", label: "FinTech & Business" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "software", label: "Web & Software" },
];

export const projects: Project[] = [
  {
    slug: "easy-tax",
    title: "Easy Tax",
    tagline: "AI-powered tax filing for Pakistan’s salaried sector",
    category: "fintech",
    featured: true,
    date: "Aug 2025 – May 2026",
    problem:
      "Salaried professionals in Pakistan still face a fragmented, document-heavy tax filing process that is easy to get wrong and hard to complete on time.",
    solution:
      "A full-stack tax filing platform that uses OCR and machine learning to extract data from financial documents, map it to FBR-compliant reporting, and produce a structured filing workflow.",
    role: "Final Year Project — full-stack product across frontend, data mapping, and security.",
    technologies: [
      "React",
      "Laravel",
      "Python",
      "OCR",
      "Machine Learning",
      "OAuth",
      "TLS",
    ],
    features: [
      "Document upload and automated extraction for salaried-sector filings",
      "Python-based data mapping toward FBR-compliant reporting",
      "React frontend on a Laravel architecture",
      "OAuth authentication and TLS encryption for financial data",
    ],
  },
  {
    slug: "agroscore-ai",
    title: "AgroScoreAI",
    tagline: "Agri-fintech credit intelligence for wheat farmers",
    category: "fintech",
    featured: true,
    date: "Apr 2026",
    problem:
      "Smallholder wheat farmers are often financially invisible to lenders because they lack salary slips, tax records, and conventional collateral.",
    solution:
      "A fintech platform that combines digital onboarding, mobile-wallet transaction analysis, and payment workflows with an explainable credit-scoring prototype for farmers, banks, and field officers.",
    role: "Product builder — frontend prototype, scoring flow, multilingual experience, and bank portal.",
    technologies: ["HTML", "CSS", "JavaScript", "Digital Onboarding", "Payment Workflows"],
    features: [
      "Digital onboarding with role-based access for farmers, banks/MFIs, and field officers",
      "Mobile wallet transaction analysis and payment workflow design",
      "Explainable AI credit scoring with risk bands and decision classes",
      "Loan simulator, partner-oriented bank portal, and compliance-based verification",
      "Four-language support: English, Urdu, Pashto, and Balochi",
    ],
    github: "https://github.com/AbdulSamadSaleem1208/AgroScore-AI",
    live: "https://agro-score-ai-six.vercel.app",
    repoName: "AgroScore-AI",
  },
  {
    slug: "ml-pro",
    title: "ML PRO",
    tagline: "No-code machine learning platform for datasets and models",
    category: "ai",
    featured: true,
    date: "May 2025",
    problem:
      "Business and finance users who want to train models still have to drop into notebooks, libraries, and custom evaluation scripts.",
    solution:
      "A Python and Streamlit platform for no-code dataset uploads, model training, interactive visualization, performance evaluation, and downloadable results.",
    role: "Developer — platform design, ML workflow, theming, and evaluation UI.",
    technologies: ["Python", "Streamlit", "scikit-learn", "Data Visualization"],
    features: [
      "Upload CSV or Excel datasets without writing code",
      "Select features and targets, then train Linear Regression or Random Forest models",
      "Interactive visualizations including correlations and feature importance",
      "Performance evaluation with downloadable results and a custom-designed UI",
    ],
    github: "https://github.com/AbdulSamadSaleem1208/Multi-Themed-Financial-Machine-Learning-",
    live: "https://lhwypaoufv9zquhlclahzs.streamlit.app/",
    repoName: "Multi-Themed-Financial-Machine-Learning-",
  },
  {
    slug: "predictive-analytics",
    title: "Predictive Analytics Portfolio",
    tagline: "Logistic regression for medical classification",
    category: "ai",
    featured: false,
    date: "Apr 2025",
    problem:
      "Raw classification datasets rarely perform well without disciplined cleaning, feature work, and model selection.",
    solution:
      "A logistic regression workflow in Python (scikit-learn) for breast cancer prediction, covering cleaning, feature engineering, visualization, and feature selection.",
    role: "Machine learning practitioner — data preparation through model optimization.",
    technologies: ["Python", "scikit-learn", "Logistic Regression", "Feature Engineering"],
    features: [
      "Data cleaning and structured preprocessing",
      "Feature engineering and feature selection",
      "Visualization of relationships that inform the model",
      "Logistic Regression optimized for classification accuracy",
    ],
  },
  {
    slug: "quickbooks-workflows",
    title: "QuickBooks-style Workflows",
    tagline: "Small-business accounting in a single dashboard",
    category: "fintech",
    featured: true,
    date: "GitHub",
    problem:
      "Small teams still split sales, purchases, payroll, inventory, and reporting across disconnected tools.",
    solution:
      "A full-featured accounting web application covering chart of accounts, sales and purchases, expenses, payroll, inventory, and financial reporting.",
    role: "Full-stack builder — Next.js application, data model, reporting, and auth.",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "SQLite"],
    features: [
      "Live financial overview with revenue, costs, and net profit",
      "Chart of accounts, invoices, bills, expenses, payroll, and inventory",
      "Profit & Loss, Balance Sheet, General Ledger, and Cash Flow reports",
      "Role-based access for admin and accountant workflows",
    ],
    github: "https://github.com/AbdulSamadSaleem1208/QuickBooks-style-workflows",
    repoName: "QuickBooks-style-workflows",
  },
  {
    slug: "msk-aesthetics",
    title: "MSK Aesthetics",
    tagline: "Secure operations dashboard for inventory, quotes, and sales",
    category: "software",
    featured: true,
    date: "GitHub",
    problem:
      "A growing aesthetics business was running inventory, quotes, sales, and restocking from spreadsheets — slow, error-prone, and hard to control.",
    solution:
      "A role-based operations dashboard that centralizes inventory, quotes, sales, and restocking with Supabase authentication and row-level security.",
    role: "Developer — React/TypeScript frontend, Supabase data layer, and access control.",
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    features: [
      "Centralized inventory, sales, quotes, and restock workflows",
      "Supabase authentication with protected routes",
      "Row Level Security so users only see permitted data",
      "Analytics snapshots for operational decisions",
    ],
    github: "https://github.com/AbdulSamadSaleem1208/MSKAesthetics-",
    repoName: "MSKAesthetics-",
  },
  {
    slug: "tehsil-procurement",
    title: "Tehsil.ai Procurement",
    tagline: "Purchase orders, approvals, and budget tracking in one place",
    category: "software",
    featured: false,
    date: "GitHub",
    problem:
      "Procurement breaks down when purchase orders, exceptions, and multi-role approvals live in email threads and spreadsheets.",
    solution:
      "A procurement system with role-based approvals, exception handling, and budget/PO tracking — from PO lines to final sign-off.",
    role: "Developer — Next.js frontend, Express API, and Supabase-backed approval flows.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Express", "PostgreSQL"],
    features: [
      "PO upload and remaining-budget tracking",
      "Purchase requests tied to projects and documents",
      "Role-based approval chains including high-value thresholds",
      "Exception handling for projects created without a PO",
    ],
    github: "https://github.com/AbdulSamadSaleem1208/Tehsil.ai-Procurement",
    repoName: "Tehsil.ai-Procurement",
  },
  {
    slug: "attendance-system",
    title: "Attendance Management System",
    tagline: "Python + SQL attendance tracking for a public authority",
    category: "software",
    featured: false,
    date: "Jul 2024",
    problem:
      "Employee attendance at RDA needed reliable logging and reporting instead of fragmented manual records.",
    solution:
      "An attendance management system with a Python front end and SQL back end for logging attendance and generating reports.",
    role: "Full-stack developer during the Rawalpindi Development Authority engagement.",
    technologies: ["Python", "SQL"],
    features: [
      "Attendance logging with an intuitive interface",
      "SQL-backed storage for operational records",
      "Report generation for management visibility",
    ],
    github: "https://github.com/AbdulSamadSaleem1208/Attendance-Management-System",
    repoName: "Attendance-Management-System",
  },
  {
    slug: "attendance-app",
    title: "Attendance App",
    tagline: "Geo-fencing, Face ID, and fingerprint attendance on Supabase",
    category: "software",
    featured: false,
    date: "GitHub",
    problem:
      "Location-aware attendance still needs identity checks — presence at a site is not the same as a verified person.",
    solution:
      "An attendance application using geo-fencing, Face ID, and fingerprint tracking, with Supabase as the backend.",
    role: "Developer — frontend application and Supabase integration.",
    technologies: ["JavaScript", "Supabase", "Geo-fencing"],
    features: [
      "Location-based attendance with geo-fencing",
      "Face ID and fingerprint verification",
      "Supabase-backed data layer",
    ],
    github: "https://github.com/AbdulSamadSaleem1208/AttendanceApp-SupaBase",
    live: "https://attendanceappadmin-frontend.vercel.app",
    repoName: "AttendanceApp-SupaBase",
  },
  {
    slug: "sim-swap-research",
    title: "SIM-Swap Account Takeover",
    tagline: "Research on mobile-wallet attacks in FinTech systems",
    category: "fintech",
    featured: false,
    date: "GitHub",
    problem:
      "Mobile wallets can be compromised through SIM-swap account takeover, a risk that sits at the center of digital payments.",
    solution:
      "Research covering vulnerabilities, literature review, and proactive cybersecurity directions for FinTech systems.",
    role: "Researcher — literature review and FinTech security analysis.",
    technologies: ["Jupyter Notebook", "FinTech Security Research"],
    features: [
      "Study of SIM-swap attacks against mobile wallets",
      "Literature review of FinTech system vulnerabilities",
      "Exploration of proactive cybersecurity responses",
    ],
    github:
      "https://github.com/AbdulSamadSaleem1208/Mitigating-SIM-Swap-Account-Takeover-in-Mobile-Wallets",
    repoName: "Mitigating-SIM-Swap-Account-Takeover-in-Mobile-Wallets",
  },
  {
    slug: "secure-fintech",
    title: "Secure FinTech App",
    tagline: "Authentication and controls for financial data handling",
    category: "fintech",
    featured: false,
    date: "GitHub",
    problem:
      "FinTech products fail first at the identity layer — weak passwords, open sessions, and unsanitized input.",
    solution:
      "A Streamlit fintech dashboard focused on secure data handling, authentication, testing, and reporting.",
    role: "Developer — authentication, encryption, and security testing.",
    technologies: ["Python", "Streamlit", "MongoDB", "bcrypt"],
    features: [
      "Password hashing, session timeout, and account lockout",
      "Input sanitization and file-upload validation",
      "Encrypted handling of sensitive values and audit logging",
    ],
    github: "https://github.com/AbdulSamadSaleem1208/secure-fintech-app",
    repoName: "secure-fintech-app",
  },
];

export const repoToSlug: Record<string, string> = Object.fromEntries(
  projects.filter((p) => p.repoName).map((p) => [p.repoName as string, p.slug]),
);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
