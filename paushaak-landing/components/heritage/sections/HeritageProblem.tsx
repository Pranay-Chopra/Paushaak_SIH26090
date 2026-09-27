import { problem } from "@/content/heritage";
import { OrnateHeading } from "@/components/heritage/OrnateHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";

export function HeritageProblem() {
  return (
    <section id="problem" className="relative px-4 py-20 sm:px-8">
      <div
        className="ink-smudge"
        style={{ width: 170, height: 2, top: "6%", right: "8%", transform: "rotate(-8deg)" }}
      />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <OrnateHeading eyebrowHi={problem.eyebrowHi} eyebrowEn={problem.eyebrowEn} heading={problem.heading} />
        </Reveal>

        <StaggerReveal className="mt-12 grid gap-8 border-t border-[var(--h-border)] pt-8 sm:grid-cols-3">
          {problem.stats.map((stat) => (
            <div key={stat.sub} className="sm:border-l sm:border-[var(--h-border)] sm:pl-6 sm:first:border-l-0 sm:first:pl-0">
              <p className="font-display-en text-4xl text-[var(--h-navy)]">{stat.value}</p>
              <p className="font-body-hi mt-2 text-lg text-[var(--h-navy)]">{stat.labelHi}</p>
              <p className="mt-1 text-sm text-[var(--h-ink)]">{stat.sub}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
