"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { profile } from "@/data/profile";
import { Reveal, Section } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";

const channels = [
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    value: profile.email,
    icon: Mail,
  },
  {
    href: profile.phoneHref,
    label: "Phone",
    value: profile.phoneDisplay,
    icon: Phone,
  },
  {
    href: profile.linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abdulsamadsaleem",
    icon: LinkedInIcon,
    external: true,
  },
  {
    href: profile.github,
    label: "GitHub",
    value: "github.com/AbdulSamadSaleem1208",
    icon: GitHubIcon,
    external: true,
  },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });

      if (!response.ok) {
        throw new Error("Could not send");
      }

      form.reset();
      setStatus("sent");
    } catch {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio inquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${email}`)}`;
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something valuable."
      intro="Whether you need someone who understands technology, business development, FinTech, or digital products — let’s talk."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-3">
            {channels.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="card contact-link min-w-0"
              >
                <span className="contact-icon">
                  <item.icon size={16} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                    {item.label}
                  </span>
                  <span className="mt-1 block break-all text-sm text-ink">{item.value}</span>
                </span>
              </a>
            ))}
            <a
              href={profile.resumePath}
              download
              className="btn-primary mt-2 inline-flex rounded-full px-5 py-3 text-sm font-medium"
            >
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} className="card rounded-3xl p-6 md:p-8">
            <p className="mb-5 text-sm leading-6 text-muted">
              Messages are delivered to{" "}
              <a href={`mailto:${profile.email}`} className="text-violet hover:underline">
                {profile.email}
              </a>
              . You can also call{" "}
              <a href={profile.phoneHref} className="text-violet hover:underline">
                {profile.phoneDisplay}
              </a>
              .
            </p>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm">
                Name
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-2xl border border-line bg-transparent px-4 py-3 outline-none focus:border-violet"
                />
              </label>
              <label className="text-sm">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-2xl border border-line bg-transparent px-4 py-3 outline-none focus:border-violet"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full rounded-2xl border border-line bg-transparent px-4 py-3 outline-none focus:border-violet"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary mt-5 rounded-full px-6 py-3 text-sm font-medium disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "sent" ? (
              <p className="mt-3 text-sm text-teal">
                Message sent to {profile.email}. I’ll get back to you.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-3 text-sm text-muted">
                Couldn’t send from the site — opening your email app instead.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
