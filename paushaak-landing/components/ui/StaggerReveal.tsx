"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { useGsap } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

// Animates the *direct children* of the wrapped container in as a stagger
// once the container enters the viewport — used for card grids/rows.
export function StaggerReveal({ children, className, stagger = 0.12 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { gsap } = useGsap();

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = ref.current.children;

      const mm = gsap.matchMedia();
      mm.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          full: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduced } = context.conditions as { reduced: boolean };

          if (reduced) {
            gsap.set(items, { opacity: 1, y: 0 });
            return;
          }

          gsap.set(items, { opacity: 0, y: 28 });
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          });
        },
      );

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
