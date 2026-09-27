import { solution, plates } from "@/content/heritage";
import { OrnateHeading } from "@/components/heritage/OrnateHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { EraPlate } from "@/components/heritage/EraPlate";

export function HeritageSolution() {
  return (
    <section id="solution" className="relative border-y border-[var(--h-border)] bg-[var(--h-bg-deep)]/40 px-4 py-20 sm:px-8">
      <div
        className="ink-smudge"
        style={{ width: 160, height: 2, top: "38%", left: "18%", transform: "rotate(-6deg)" }}
      />

      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_minmax(0,260px)] md:gap-14">
          <Reveal>
            <OrnateHeading
              eyebrowHi={solution.eyebrowHi}
              eyebrowEn={solution.eyebrowEn}
              heading={solution.heading}
            />
          </Reveal>
          <Reveal>
            <EraPlate {...plates.wedding} className="md:order-last" />
          </Reveal>
        </div>

        <StaggerReveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solution.steps.map((step, i) => (
            <div key={step.labelEn} className="aged-frame rounded-sm bg-[var(--h-bg)] p-5 text-center">
              <p className="font-display-en text-xs text-[var(--h-ink-soft)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-body-hi mt-2 text-2xl text-[var(--h-navy)]">{step.labelHi}</p>
              <p className="font-display-en text-xs uppercase tracking-[0.1em] text-[var(--h-ink-soft)]">
                {step.labelEn}
              </p>
              <p className="mt-3 text-sm text-[var(--h-ink)]">{step.body}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
