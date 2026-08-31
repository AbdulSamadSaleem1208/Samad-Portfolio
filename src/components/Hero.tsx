"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { profile } from "@/data/profile";
import { Magnetic } from "./Motion";
import { Portrait } from "./Portrait";

const socials = [
  { href: profile.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: profile.github, label: "GitHub", icon: GitHubIcon },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 mesh" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="pointer-events-none absolute inset-0 cursor-glow" />
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.07] mix-blend-overlay" />
      <div className="drift pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet/20 blur-3xl" />
      <div className="drift pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-cyan/10 blur-3xl" />
      <span className="pointer-events-none absolute top-32 left-[18%] h-1.5 w-1.5 rounded-full bg-violet/70" />
      <span className="pointer-events-none absolute top-48 right-[28%] h-1 w-1 rounded-full bg-cyan/80" />
      <span className="pointer-events-none absolute bottom-24 left-[42%] h-1 w-1 rounded-full bg-violet/60" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="kicker"
          >
            <span className="gradient-text">Business</span>
            <span className="mx-2 text-muted">+</span>
            <span className="gradient-text">Technology</span>
            <span className="mx-2 text-muted">+</span>
            <span className="gradient-text">FinTech</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-5 text-5xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            <a href="#about" className="block">
              Abdul Samad
              <br />
              <span className="gradient-text">Saleem</span>
            </a>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-5 max-w-xl text-lg font-medium leading-8 text-muted md:text-xl"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 max-w-xl text-base leading-7 text-muted"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Magnetic>
              <a href="#work" className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium">
                View My Work
                <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-ghost inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm">
                Let&apos;s Connect
              </a>
            </Magnetic>
            <a
              href={profile.resumePath}
              download
              className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm"
            >
              <Download size={15} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.64 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
          >
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                title={item.label}
                className="group inline-flex items-center gap-2 transition hover:text-violet"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition group-hover:scale-110 group-hover:border-violet group-hover:shadow-[0_0_18px_rgba(139,124,255,0.35)]">
                  <item.icon size={14} />
                </span>
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            ))}
            <span className="text-line">|</span>
            <span>{profile.location}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <Portrait />
        </motion.div>
      </div>
    </section>
  );
}
