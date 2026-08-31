"use client";

import { Reveal, Section } from "./ui";

const pillars = [
  {
    title: "Financial Technology degree",
    body: "Bachelor’s in Financial Technology, FAST NUCES Islamabad (Aug 2022 – Jun 2026).",
    href: "#education",
  },
  {
    title: "Banking operations",
    body: "Account openings, cash processing, inquiries, and regulatory compliance at Soneri Bank.",
    href: "#soneri",
  },
  {
    title: "Digital payments & onboarding",
    body: "AgroScoreAI work on digital onboarding, mobile-wallet analysis, payment workflows, and verification.",
    href: "/work/agroscore-ai",
  },
  {
    title: "Tax & reporting systems",
    body: "Easy Tax — FBR-oriented filing for Pakistan’s salaried sector, with OCR, mapping, OAuth, and TLS.",
    href: "/work/easy-tax",
  },
  {
    title: "Financial systems engineering",
    body: "Python financial systems, REST APIs, and automated reporting at Rawalpindi Development Authority.",
    href: "/work/attendance-system",
  },
  {
    title: "Accounting product thinking",
    body: "A QuickBooks-style platform covering ledgers, invoices, payroll, inventory, and financial reports.",
    href: "/work/quickbooks-workflows",
  },
];

export function Fintech() {
  return (
    <Section
      id="fintech"
      eyebrow="FinTech"
      title={
        <>
          I did not pick up finance as a hobby.{" "}
          <span className="gradient-text">I trained in it, then built on it.</span>
        </>
      }
      intro="Digital payments, banking operations, tax workflows, onboarding, and financial systems — this is the academic and professional core of the profile."
    >
      <div className="relative mb-8 overflow-hidden rounded-3xl border border-line p-5">
        <svg className="h-28 w-full text-violet/40" viewBox="0 0 800 120" fill="none" aria-hidden>
          <path className="dash-flow" d="M20 70 C120 20 180 110 280 60 S460 20 560 72 S720 110 780 48" stroke="currentColor" strokeWidth="1.2" />
          <path className="dash-flow" d="M20 48 C140 90 220 20 320 64 S500 110 620 40 S740 20 780 80" stroke="var(--cyan)" strokeWidth="1.1" opacity="0.7" />
          {[80, 200, 340, 480, 620, 740].map((x, i) => (
            <circle key={x} cx={x} cy={i % 2 === 0 ? 52 : 72} r="4" fill="currentColor" className="origin-center" />
          ))}
        </svg>
        <p className="text-center text-xs tracking-[0.2em] text-muted uppercase">
          Payments · Onboarding · Compliance · Reporting
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <a href={item.href} className="card lift group block h-full rounded-3xl p-6">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-cyan uppercase">
                FinTech 0{index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink transition group-hover:text-violet">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
