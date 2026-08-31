"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./icons";
import { projects } from "@/data/projects";
import { filterRepos, type GithubRepo } from "@/lib/github";
import { Reveal, Section } from "./ui";

const fallback: GithubRepo[] = projects
  .filter((project) => project.github && project.repoName)
  .map((project, index) => ({
    id: index + 1,
    name: project.repoName as string,
    description: project.tagline,
    html_url: project.github as string,
    homepage: project.live ?? null,
    language: project.technologies[0] ?? null,
    stargazers_count: 0,
    updated_at: "",
    fork: false,
    portfolioPath: `/work/${project.slug}`,
  }));

export function GithubWork() {
  const [repos, setRepos] = useState<GithubRepo[]>(fallback.slice(0, 8));

  useEffect(() => {
    fetch("https://api.github.com/users/AbdulSamadSaleem1208/repos?per_page=100&sort=updated", {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => (res.ok ? res.json() : []))
      .then((data: GithubRepo[]) => {
        const live = filterRepos(data).slice(0, 8);
        if (live.length > 0) setRepos(live);
      })
      .catch(() => undefined);
  }, []);

  return (
    <Section
      id="github"
      eyebrow="GitHub, connected"
      title="Repositories route through this site."
      intro="Open a mapped project and you land on the portfolio case study. The GitHub repo stays one click away."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {repos.map((repo, index) => {
          const href = repo.portfolioPath ?? repo.html_url;
          const internal = Boolean(repo.portfolioPath);

          return (
            <Reveal key={repo.id} delay={index * 0.03}>
              <article className="card lift flex items-start justify-between gap-4 rounded-2xl p-5">
                <div>
                  {internal ? (
                    <Link href={href} className="font-medium text-ink hover:text-gold">
                      {repo.name}
                    </Link>
                  ) : (
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-ink hover:text-gold"
                    >
                      {repo.name}
                    </a>
                  )}
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                    {repo.description ?? "Repository on GitHub"}
                  </p>
                  <p className="mt-3 text-xs text-muted">
                    {internal ? "Opens on this website" : "Opens on GitHub"}
                    {repo.language ? ` · ${repo.language}` : ""}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 text-muted">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub: ${repo.name}`}
                    className="rounded-full border border-line p-2 hover:border-gold hover:text-gold"
                  >
                    <GitHubIcon size={14} />
                  </a>
                  {internal ? (
                    <Link
                      href={href}
                      aria-label={`Open ${repo.name} on this website`}
                      className="rounded-full border border-line p-2 hover:border-gold hover:text-gold"
                    >
                      <ArrowUpRight size={14} />
                    </Link>
                  ) : null}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
