import { Reveal, Section } from "./ui";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          I can sit with a client, a banker, and an engineer —{" "}
          <span className="gradient-text">and not lose the plot.</span>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="space-y-5 text-base leading-8 text-muted md:text-lg">
            <p>
              I studied Financial Technology at FAST NUCES, Islamabad. That degree is not a footnote
              — it is the reason I understand payments, banking operations, compliance pressure, and
              why a product either earns trust or does not.
            </p>
            <p>
              From there the work split in two directions that most people keep separate. On the
              commercial side I have generated B2B leads, run outbound calls, LinkedIn and email
              outreach, qualified prospects, set demos, written Upwork and Fiverr proposals, and
              managed brand channels. On the build side I have shipped Python financial systems,
              React and Next.js products, machine-learning tools, and AI-assisted business software.
            </p>
            <p>
              That combination is the point. I can talk to a business stakeholder about acquisition
              and pipeline, then turn around and talk to a technical team about APIs, data, and
              product constraints. I am not translating between two worlds I visited once — I have
              worked in both.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="card lift rounded-3xl p-6 md:p-8">
            <p className="kicker">The differentiator</p>
            <ul className="mt-6 space-y-5">
              {[
                ["Business", "Client acquisition, SDR work, proposals, negotiation, marketing.", "#growth"],
                ["Technology", "Web products, Python systems, APIs, QA, AI-assisted builds.", "#skills"],
                ["FinTech", "Degree, banking operations, payments, onboarding, compliance-aware products.", "#fintech"],
              ].map(([title, body, href]) => (
                <li key={title} className="border-b border-line pb-5 last:border-0 last:pb-0">
                  <a href={href} className="block hover:text-violet">
                    <p className="font-medium text-ink">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{body}</p>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
