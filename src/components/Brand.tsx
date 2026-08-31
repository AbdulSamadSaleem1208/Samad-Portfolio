import { profile } from "@/data/profile";
import { Reveal } from "./ui";

const stack = [
  { label: "FinTech", href: "#fintech" },
  { label: "Technology", href: "#skills" },
  { label: "Business Development", href: "#growth" },
  { label: "AI", href: "#work" },
];

export function Brand() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 mesh" />
      <div className="pointer-events-none absolute inset-0 cursor-glow" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="kicker text-center">Personal brand</p>
          <div className="mt-10 flex flex-col items-center gap-4">
            {stack.map((item, index) => (
              <div key={item.label} className="text-center">
                <a href={item.href} className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl">
                  {item.label}
                </a>
                {index < stack.length - 1 ? (
                  <p className="mt-3 text-xs tracking-[0.3em] text-violet">+</p>
                ) : null}
              </div>
            ))}
            <p className="mt-2 text-xs tracking-[0.3em] text-cyan">==</p>
            <a href="#about" className="mt-2 text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              {profile.name}
            </a>
            <p className="mt-4 max-w-xl text-center text-sm leading-7 text-muted md:text-base">
              A commercial operator who can build, and a builder who can sell — with FinTech as the
              native language.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
