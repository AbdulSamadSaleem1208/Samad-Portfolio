"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { careerPath, experience } from "@/data/experience";
import { Reveal, Section } from "./ui";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 80%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <Section
      id="experience"
      eyebrow="Career"
      title={
        <>
          Finance, then technology, then growth —{" "}
          <span className="gradient-text">on purpose.</span>
        </>
      }
      intro="The path is not a pile of internships. It is a sequence: financial systems, product engineering, sales development, and business-technology work."
    >
      <Reveal>
        <div className="mb-12 flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible">
          {careerPath.map((step, index) => (
            <a
              key={step.label}
              href={step.href}
              className="card lift min-w-[160px] rounded-2xl px-4 py-3"
            >
              <p className="text-[10px] font-semibold tracking-[0.18em] text-violet uppercase">
                0{index + 1}
              </p>
              <p className="mt-1 text-sm text-ink">{step.label}</p>
              <p className="text-xs text-muted">{step.detail}</p>
            </a>
          ))}
        </div>
      </Reveal>

      <div ref={ref} className="relative">
        <div className="absolute top-0 bottom-0 left-[11px] w-px bg-line md:left-[19px]" />
        <motion.div
          style={{ height }}
          className="absolute top-0 left-[11px] w-px origin-top bg-gradient-to-b from-violet to-cyan md:left-[19px]"
        />
        <div className="space-y-8">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06} x={index % 2 === 0 ? -18 : 18}>
              <article id={item.id} className="relative grid scroll-mt-28 gap-4 pl-10 md:grid-cols-[200px_1fr] md:gap-10 md:pl-14">
                <span className="absolute top-1.5 left-0 h-6 w-6 rounded-full border border-violet bg-bg shadow-[0_0_16px_rgba(139,124,255,0.45)] md:h-10 md:w-10" />
                <div>
                  <p className="text-xs font-medium text-violet">{item.date}</p>
                  <p className="mt-2 text-xs tracking-[0.16em] text-muted uppercase">
                    {item.chapter}
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/abdulsamadsaleem/"
                  target="_blank"
                  rel="noreferrer"
                  className="card lift group block rounded-3xl p-6 md:p-8"
                >
                  <h3 className="text-2xl font-semibold tracking-tight text-ink transition group-hover:text-violet">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {item.company} · {item.location}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">
                    {item.points.map((point) => (
                      <li key={point} className="pl-4 before:mr-2 before:text-violet before:content-['–']">
                        {point}
                      </li>
                    ))}
                  </ul>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
