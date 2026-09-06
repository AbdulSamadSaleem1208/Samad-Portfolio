"use client";

import Image from "next/image";
import { profile } from "@/data/profile";

export function Portrait() {
  return (
    <a
      href={profile.linkedin}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${profile.name} on LinkedIn`}
      className="group relative mx-auto block w-[240px] sm:w-[280px] lg:mx-0 lg:w-[320px]"
    >
      <div className="float-y relative">
        <div className="spin-slow absolute -inset-1 rounded-full bg-[conic-gradient(from_120deg,var(--violet),var(--cyan),#6366f1,var(--violet))] opacity-90" />
        <div className="absolute -inset-6 rounded-full bg-violet/20 blur-2xl transition group-hover:bg-cyan/20" />
        <div className="group relative overflow-hidden rounded-full border border-white/10 bg-bg p-1.5 shadow-[0_20px_60px_-24px_rgba(91,77,255,0.65)]">
          <div className="relative aspect-square overflow-hidden rounded-full">
            <Image
              src={profile.photo}
              alt={`${profile.name}, professional portrait`}
              fill
              priority
              sizes="320px"
              className="object-cover object-[center_22%]"
            />
          </div>
        </div>
      </div>
    </a>
  );
}
