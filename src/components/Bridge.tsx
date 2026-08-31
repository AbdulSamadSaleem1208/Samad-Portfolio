"use client";

import { Reveal, Section } from "./ui";

const business = [
  "Business Development",
  "Sales",
  "Lead Generation",
  "Client Acquisition",
  "Negotiation",
  "Marketing",
];

const technology = [
  "AI",
  "FinTech",
  "Web Development",
  "Python",
  "Machine Learning",
  "Digital Products",
];

export function Bridge() {
  return (
    <Section
      id="bridge"
      eyebrow="Why I am different"
      title={
        <>
          Most candidates understand either business or technology.{" "}
          <span className="gradient-text">I have worked in both.</span>
        </>
      }
    >
      <div className="relative grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <Reveal>
          <a href="#growth" className="card lift block h-full rounded-3xl p-6 md:p-8">
            <p className="kicker">Business</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight gradient-text">Commercial side</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {business.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-violet/30 bg-gold-soft px-3 py-1.5 text-sm text-violet"
                >
                  {item}
                </span>
              ))}
            </div>
          </a>
        </Reveal>

        <Reveal delay={0.08} className="relative hidden items-center justify-center lg:flex">
          <svg className="absolute -left-16 h-24 w-32 text-violet/50" viewBox="0 0 120 80" fill="none">
            <path className="dash-flow" d="M0 40 C40 40 80 40 120 40" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="60" cy="40" r="4" fill="currentColor" className="origin-center" />
          </svg>
          <div className="relative grid h-28 w-28 place-items-center">
            <span className="absolute inset-0 rounded-full border border-violet/40" />
            <span className="absolute inset-3 animate-pulse rounded-full border border-cyan/40" />
            <span className="font-serif text-3xl gradient-text">+</span>
          </div>
          <svg className="absolute -right-16 h-24 w-32 text-cyan/50" viewBox="0 0 120 80" fill="none">
            <path className="dash-flow" d="M0 40 C40 40 80 40 120 40" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </Reveal>

        <Reveal delay={0.12}>
          <a href="#skills" className="card lift block h-full rounded-3xl p-6 md:p-8">
            <p className="kicker !text-cyan">Technology</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-cyan">Build side</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {technology.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan/30 bg-teal-soft px-3 py-1.5 text-sm text-cyan"
                >
                  {item}
                </span>
              ))}
            </div>
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.16}>
        <div className="relative mt-4 overflow-hidden rounded-3xl border border-violet/25 bg-bg-soft px-6 py-10 text-center md:px-12">
          <a href="#contact" className="relative block">
          <div className="pointer-events-none absolute inset-0 mesh opacity-60" />
          <p className="relative kicker">The result</p>
          <h3 className="relative mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            <span className="gradient-text">Business + Technology</span>
          </h3>
          <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
            I can originate a conversation, qualify a need, and stay useful after the handshake —
            because I also know how the product, the data, and the financial workflow actually work.
          </p>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
