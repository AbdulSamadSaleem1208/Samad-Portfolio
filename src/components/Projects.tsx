"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./icons";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";
import { Reveal, Section } from "./ui";

function Preview({ category, title }: { category: string; title: string }) {
  const tone =
    category === "fintech"
      ? "from-violet/30 via-cyan/10 to-transparent"
      : category === "ai"
        ? "from-cyan/25 via-violet/10 to-transparent"
        : "from-violet/15 via-ink/5 to-transparent";

  return (
    <div className={`relative mb-5 overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${tone} p-6`}>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <p className="relative font-serif text-4xl text-ink/80 transition duration-500 group-hover:scale-105">
        {title.slice(0, 2)}
      </p>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title={
        <>
          Products at the overlap of money, software, and{" "}
          <span className="gradient-text">intelligence.</span>
        </>
      }
      intro="Click a project to open it on this site. GitHub and live demos sit one step further — the portfolio is the front door."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              filter === cat.id
                ? "btn-primary border-transparent"
                : "btn-ghost border-line text-muted"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal
            key={project.slug}
            delay={index * 0.07}
            className={project.featured && filter === "all" && index === 0 ? "md:col-span-2" : ""}
          >
            <article
              data-cursor="View"
              className={`card lift group h-full overflow-hidden rounded-3xl p-5 md:p-7 ${
                project.featured ? "ring-1 ring-violet/25" : ""
              }`}
            >
              <Link href={`/work/${project.slug}`} className="block">
                <Preview category={project.category} title={project.title} />
                <div className="flex items-start justify-between gap-4">
                  <p className="kicker">
                    {project.featured ? "Featured · " : ""}
                    {project.category === "fintech"
                      ? "FinTech & Business"
                      : project.category === "ai"
                        ? "AI & Machine Learning"
                        : "Web & Software"}
                  </p>
                  <ArrowUpRight
                    className="text-muted transition group-hover:translate-x-1 group-hover:text-violet"
                    size={18}
                  />
                </div>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-ink">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{project.tagline}</p>
              </Link>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs"
                  >
                    <GitHubIcon size={13} />
                    GitHub
                  </a>
                ) : null}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1.5 text-xs text-bg transition hover:-translate-y-0.5"
                  >
                    Live Demo
                    <ArrowUpRight size={12} />
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
