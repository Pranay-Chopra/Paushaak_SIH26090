"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useGsap } from "@/lib/gsap";

type Props = {
  items: string[];
};

export function Marquee({ items }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGsap();

  useGSAP(
    () => {
      if (!trackRef.current) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: trackRef },
  );

  const line = items.join("   ·   ") + "   ·   ";

  return (
    <div className="overflow-hidden border-y border-border bg-surface-tint py-3">
      <div ref={trackRef} className="flex w-max whitespace-nowrap">
        <span className="px-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
          {line}
        </span>
        <span
          className="px-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted"
          aria-hidden
        >
          {line}
        </span>
      </div>
    </div>
  );
}
