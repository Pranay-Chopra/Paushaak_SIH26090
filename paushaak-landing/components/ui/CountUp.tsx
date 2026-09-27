"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useGsap } from "@/lib/gsap";

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export function CountUp({ value, prefix = "", suffix = "", decimals, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const { gsap } = useGsap();
  const places = decimals ?? (Number.isInteger(value) ? 0 : 1);

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
          const el = ref.current;
          if (!el) return;

          if (reduced) {
            el.textContent = `${prefix}${value.toFixed(places)}${suffix}`;
            return;
          }

          const counter = { n: 0 };
          gsap.to(counter, {
            n: value,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              el.textContent = `${prefix}${counter.n.toFixed(places)}${suffix}`;
            },
          });
        },
      );

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={className}>
      {prefix}
      {(0).toFixed(places)}
      {suffix}
    </span>
  );
}
