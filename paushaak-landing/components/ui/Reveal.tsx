"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { useGsap } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  delay?: number;
  y?: number;
};

// Generic scroll-linked reveal: fades/slides an element up as it enters the
// viewport. Reverses on scroll-out so re-entering the section replays it.
export function Reveal({ children, className, as = "div", delay = 0, y = 32 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { gsap } = useGsap();

  useGSAP(
    () => {
      if (!ref.current) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          full: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduced } = context.conditions as { reduced: boolean };

          gsap.set(ref.current, reduced ? {} : { opacity: 0, y });

          if (reduced) return;

          gsap.to(ref.current, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        },
      );

      return () => mm.revert();
    },
    { scope: ref },
  );

  const Tag = as;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
