"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Landmark, PieChart, TrendingUp } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { marketBusiness } from "@/content/sections";

const icons = [Landmark, TrendingUp, PieChart];

export function MarketBusiness() {
  const lineRef = useRef<SVGLineElement>(null);
  const { gsap } = useGsap();

  useGSAP(() => {
    if (!lineRef.current) return;

    const mm = gsap.matchMedia();
    mm.add(
      {
        reduced: "(prefers-reduced-motion: reduce)",
        full: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { reduced } = context.conditions as { reduced: boolean };

        if (reduced) {
          gsap.set(lineRef.current, { strokeDashoffset: 0 });
          return;
        }

        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      },
    );

    return () => mm.revert();
  });

  return (
    <section className="bg-bg px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={marketBusiness.eyebrow} heading={marketBusiness.heading} />
        </Reveal>

        <div className="relative mt-16">
          <svg
            className="pointer-events-none absolute left-0 top-6 hidden h-2 w-full md:block"
            viewBox="0 0 100 2"
            preserveAspectRatio="none"
            aria-hidden
          >
            <line
              ref={lineRef}
              x1="16"
              y1="1"
              x2="84"
              y2="1"
              stroke="var(--accent)"
              strokeWidth="0.5"
              pathLength={100}
              strokeDasharray={100}
              strokeDashoffset={100}
            />
          </svg>

          <div className="grid gap-8 md:grid-cols-3">
            {marketBusiness.fundingStages.map((stage, i) => {
              const Icon = icons[i];
              return (
                <div key={stage.stage} className="flex flex-col items-center text-center">
                  <IconBadge icon={Icon} />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">
                    {stage.stage}
                  </p>
                  <p className="heading-serif mt-1 text-xl text-primary">{stage.mechanism}</p>
                  <p className="mt-2 text-sm text-text-muted">{stage.note}</p>
                </div>
              );
            })}
          </div>
        </div>

        <Reveal className="card mt-16">
          <p className="heading-serif text-xl text-primary">
            {marketBusiness.revenueModel.heading}
          </p>
          <p className="mt-2 text-sm text-text-muted">{marketBusiness.revenueModel.current}</p>
          <p className="mt-1 text-sm text-text-muted">{marketBusiness.revenueModel.expansion}</p>
        </Reveal>
      </div>
    </section>
  );
}
