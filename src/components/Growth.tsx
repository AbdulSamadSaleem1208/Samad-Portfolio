import { growthCapabilities } from "@/data/skills";
import { Reveal, Section } from "./ui";

export function Growth() {
  return (
    <Section
      id="growth"
      eyebrow="Business Development & Growth"
      title="I know how a conversation becomes a client."
      intro="No vanity metrics. These are capabilities I have actually practiced — outbound, qualification, proposals, and brand — drawn from TechDot Global and Dakia.ai."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {growthCapabilities.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04}>
            <a href="#contact" className="card lift group block h-full rounded-3xl p-5">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-gold uppercase">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-medium text-ink transition group-hover:text-violet">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
