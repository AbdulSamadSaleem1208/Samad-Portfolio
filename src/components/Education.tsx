import { Reveal, Section } from "./ui";

const schools = [
  {
    name: "FAST NUCES — Islamabad",
    credential: "Bachelor’s in Financial Technology",
    dates: "Aug 2022 – Jun 2026",
    href: "https://www.nu.edu.pk/",
  },
  {
    name: "Beaconhouse Margalla Campus — Islamabad",
    credential: "O/A-Levels",
    dates: "Aug 2018 – Aug 2021",
    href: "https://www.beaconhouse.net/",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="A FinTech degree, not a generic CS placeholder.">
      <div className="grid gap-4 md:grid-cols-2">
        {schools.map((school, index) => (
          <Reveal key={school.name} delay={index * 0.06}>
            <a
              href={school.href}
              target="_blank"
              rel="noreferrer"
              className="card lift group block rounded-3xl p-6 md:p-8"
            >
              <p className="text-xs font-medium text-gold">{school.dates}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink transition group-hover:text-violet">{school.name}</h3>
              <p className="mt-2 text-sm text-muted">{school.credential}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
