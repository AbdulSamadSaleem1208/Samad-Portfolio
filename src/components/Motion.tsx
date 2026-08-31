"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

export function Magnetic({
  children,
  className,
  strength = 6,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - box.left - box.width / 2;
        const y = event.clientY - box.top - box.height / 2;
        target.current = {
          x: Math.max(-strength, Math.min(strength, x * 0.12)),
          y: Math.max(-strength, Math.min(strength, y * 0.12)),
        };
      }}
      onMouseLeave={() => {
        target.current = { x: 0, y: 0 };
      }}
    >
      {children}
    </div>
  );
}

const emptySubscribe = () => () => undefined;

function useFinePointer() {
  return useSyncExternalStore(
    emptySubscribe,
    () =>
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [hover, setHover] = useState(false);
  const enabled = useFinePointer();

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("has-custom-cursor");

    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let frame = 0;

    const tick = () => {
      x += (tx - x) * 0.09;
      y += (ty - y) * 0.09;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      document.documentElement.style.setProperty("--mx", `${x}px`);
      document.documentElement.style.setProperty("--my", `${y}px`);
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: MouseEvent) => {
      tx = event.clientX;
      ty = event.clientY;
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const tagged = target?.closest("[data-cursor]") as HTMLElement | null;
      const clickable = target?.closest("a, button");
      setHover(Boolean(tagged || clickable));
      setLabel(tagged?.dataset.cursor ?? (clickable ? "Open" : ""));
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={dot} aria-hidden className="pointer-events-none fixed top-0 left-0 z-[80] hidden md:block">
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/70 bg-violet/15 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hover ? "h-14 w-14" : "h-3 w-3"
        }`}
      />
      {hover && label ? (
        <span className="absolute top-2 left-2 text-[10px] font-medium tracking-[0.18em] text-ink uppercase">
          {label}
        </span>
      ) : null}
    </div>
  );
}
