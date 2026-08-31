import { ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { profile } from "@/data/profile";
import { Reveal, Section } from "./ui";

export function Social() {
  return (
    <Section
      id="profiles"
      eyebrow="Profiles"
      title="Two rooms. Same person."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card lift group flex h-full flex-col justify-between rounded-3xl p-8"
          >
            <div className="flex items-center justify-between">
              <LinkedInIcon size={22} className="text-gold" />
              <ArrowUpRight className="text-muted transition group-hover:text-gold" />
            </div>
            <div className="mt-12">
              <p className="kicker">LinkedIn</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">My professional journey</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Roles, education, and the commercial path — business development, banking, and FinTech.
              </p>
            </div>
          </a>
        </Reveal>
        <Reveal delay={0.08}>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="card lift group flex h-full flex-col justify-between rounded-3xl p-8"
          >
            <div className="flex items-center justify-between">
              <GitHubIcon size={22} className="text-teal" />
              <ArrowUpRight className="text-muted transition group-hover:text-teal" />
            </div>
            <div className="mt-12">
              <p className="kicker !text-teal">GitHub</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">My technical work</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Repositories for FinTech products, machine learning, and production web systems. Featured
                projects open here first.
              </p>
            </div>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
