"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useGsap } from "@/lib/gsap";
import { ThemedImage } from "@/components/ui/ThemedImage";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/sections";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { gsap } = useGsap();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Scroll-linked parallax — disabled entirely under reduced-motion, and
      // toned down below the md breakpoint (heavy parallax reads as jank on mobile).
      mm.add(
        {
          desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { desktop } = context.conditions as { desktop: boolean };
          const backDelta = desktop ? 15 : 6;
          const contentDelta = desktop ? 60 : 20;

          gsap
            .timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            })
            .to(backRef.current, { yPercent: backDelta, ease: "none" }, 0)
            .to(contentRef.current, { yPercent: contentDelta, opacity: 0, ease: "none" }, 0);
        },
      );

      // Entrance animation — independent of scroll, runs once on mount.
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const tl = gsap.timeline({ delay: 0.1 });
      [tagRef.current, headlineRef.current, subheadRef.current, ctaRef.current].forEach(
        (el, i) => {
          if (!el) return;
          tl.fromTo(
            el,
            { opacity: 0, y: reduced ? 0 : 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            i * 0.1,
          );
        },
      );

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-bg"
    >
      <div ref={backRef} className="leatherette absolute inset-0" aria-hidden />

      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <div className="glow mb-7">
          <ThemedImage
            lightSrc="/brand/icon-mark-light.svg"
            darkSrc="/brand/icon-mark-dark.svg"
            alt="PAUSHAAK icon mark"
            className="h-16 w-16"
          />
        </div>
        <p ref={tagRef} className="eyebrow mb-6 max-w-xl justify-center">
          {hero.tagline}
        </p>
        <h1
          ref={headlineRef}
          className="heading-serif max-w-4xl text-5xl leading-[1.05] text-primary sm:text-6xl md:text-7xl"
        >
          {hero.headline}
        </h1>
        <p ref={subheadRef} className="mt-7 max-w-2xl text-base text-text-muted sm:text-lg">
          {hero.subhead}
        </p>
        <div ref={ctaRef} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href={hero.primaryCta.href} variant="solid" withArrow>
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.label}
          </Button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </section>
  );
}
