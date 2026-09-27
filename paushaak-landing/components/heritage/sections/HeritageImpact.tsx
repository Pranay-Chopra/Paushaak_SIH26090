import { impact } from "@/content/heritage";
import { OrnateHeading } from "@/components/heritage/OrnateHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { CountUp } from "@/components/ui/CountUp";

export function HeritageImpact() {
  return (
    <section id="impact" className="relative border-y border-[var(--h-border)] bg-[var(--h-bg-deep)]/40 px-4 py-20 sm:px-8">
      <div
        className="ink-smudge"
        style={{ width: 110, height: 3, bottom: "10%", right: "14%", transform: "rotate(9deg)" }}
      />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <OrnateHeading eyebrowHi={impact.eyebrowHi} eyebrowEn={impact.eyebrowEn} heading={impact.heading} />
        </Reveal>

        <StaggerReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impact.stats.map((stat) => (
            <div key={stat.label} className="aged-frame rounded-sm bg-[var(--h-bg)] p-5">
              <p className="font-display-en text-3xl text-[var(--h-navy)]">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-[var(--h-ink)]">{stat.label}</p>
            </div>
          ))}
        </StaggerReveal>

        <p className="font-display-en mt-8 text-center text-xs italic text-[var(--h-ink-soft)]">
          {impact.disclaimer}
        </p>
      </div>
    </section>
  );
}
