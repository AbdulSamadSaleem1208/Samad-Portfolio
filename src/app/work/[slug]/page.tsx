import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { getProject, projects } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const category =
    project.category === "fintech"
      ? "FinTech & Business"
      : project.category === "ai"
        ? "AI & Machine Learning"
        : "Web & Software";

  return (
    <>
      <Navbar />
      <main id="main" className="pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-5 md:px-8">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted hover:text-gold">
            <ArrowLeft size={14} />
            All work
          </Link>
          <p className="kicker mt-8">{category}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">{project.title}</h1>
          <p className="mt-4 text-lg text-muted">{project.tagline}</p>
          <p className="mt-3 text-sm text-gold">{project.date}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-gold hover:text-gold"
              >
                <GitHubIcon size={15} />
                GitHub
              </a>
            ) : null}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
              >
                Live Demo
                <ArrowUpRight size={15} />
              </a>
            ) : null}
          </div>

          <dl className="mt-12 space-y-8">
            <div>
              <dt className="kicker">Problem</dt>
              <dd className="mt-3 text-base leading-8 text-muted">{project.problem}</dd>
            </div>
            <div>
              <dt className="kicker">Solution</dt>
              <dd className="mt-3 text-base leading-8 text-muted">{project.solution}</dd>
            </div>
            <div>
              <dt className="kicker">My role</dt>
              <dd className="mt-3 text-base leading-8 text-muted">{project.role}</dd>
            </div>
          </dl>

          <div className="mt-12">
            <p className="kicker">Key features</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {project.features.map((feature) => (
                <li key={feature} className="border-b border-line pb-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <p className="kicker">Technologies</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-line px-3 py-1.5 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
