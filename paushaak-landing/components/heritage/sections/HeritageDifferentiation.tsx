import { differentiation, plates } from "@/content/heritage";
import { OrnateHeading } from "@/components/heritage/OrnateHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { EraPlate } from "@/components/heritage/EraPlate";

export function HeritageDifferentiation() {
  return (
    <section className="relative px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,260px)_1fr] md:gap-14">
          <Reveal>
            <EraPlate {...plates.street} />
          </Reveal>
          <Reveal>
            <OrnateHeading
              eyebrowHi={differentiation.eyebrowHi}
              eyebrowEn={differentiation.eyebrowEn}
              heading={differentiation.heading}
            />
          </Reveal>
        </div>

        <StaggerReveal className="mt-12">
          {differentiation.points.map((point) => (
            <div key={point.labelEn} className="flex flex-col gap-1 border-t border-[var(--h-border)] py-6 sm:flex-row sm:items-baseline sm:gap-8">
              <p className="font-body-hi w-full shrink-0 text-lg text-[var(--h-navy)] sm:w-72">
                {point.labelHi}
              </p>
              <div>
                <p className="font-display-en text-xs uppercase tracking-[0.1em] text-[var(--h-ink-soft)]">
                  {point.labelEn}
                </p>
                <p className="mt-1 max-w-2xl text-sm text-[var(--h-ink)]">{point.body}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
