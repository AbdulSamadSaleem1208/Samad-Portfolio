import { profile } from "@/data/profile";

const facts = [
  {
    label: "Who I am",
    value: "Business + FinTech + Technology professional",
    href: "#about",
  },
  {
    label: "What I do",
    value: "Client acquisition, product building, and financial-tech systems",
    href: "#growth",
  },
  {
    label: "Core skills",
    value: "BD, sales development, Python, React, ML, banking operations",
    href: "#skills",
  },
  {
    label: "Experience",
    value: "TechDot Global · Dakia.ai · Soneri Bank · RDA",
    href: "#experience",
  },
];

export function RecruiterStrip() {
  return (
    <section aria-label="Profile at a glance" className="relative border-y border-line bg-bg-soft/50 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 md:grid-cols-2 md:px-8 lg:grid-cols-5">
        {facts.map((fact) => (
          <a key={fact.label} href={fact.href} className="group block">
            <p className="kicker">{fact.label}</p>
            <p className="mt-2 text-sm leading-6 text-ink transition group-hover:text-violet">
              {fact.value}
            </p>
          </a>
        ))}
        <div className="min-w-0">
          <p className="kicker">Contact</p>
          <p className="mt-2 text-sm leading-6">
            <a href={`mailto:${profile.email}`} className="block break-all text-violet hover:underline">
              {profile.email}
            </a>
            <a href={profile.phoneHref} className="block text-violet hover:underline">
              {profile.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
