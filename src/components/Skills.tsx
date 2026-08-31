"use client";

import { useState } from "react";
import { skillGroups } from "@/data/skills";
import { Reveal, Section } from "./ui";

export function Skills() {
  const [active, setActive] = useState<(typeof skillGroups)[number]["id"]>("business");
  const group = skillGroups.find((item) => item.id === active) ?? skillGroups[0];

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          Only what the work actually{" "}
          <span className="gradient-text">supports.</span>
        </>
      }
    >
      <div className="flex flex-wrap gap-2">
        {skillGroups.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === item.id ? "btn-primary border-transparent" : "btn-ghost border-line text-muted"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <Reveal key={group.id}>
        <article className="card mt-6 rounded-3xl p-6 md:p-8">
          <h3 className="text-2xl font-semibold tracking-tight text-ink">{group.title}</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line px-3 py-1.5 text-sm text-muted transition hover:-translate-y-0.5 hover:border-violet hover:text-violet hover:shadow-[0_0_16px_rgba(139,124,255,0.25)]"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
