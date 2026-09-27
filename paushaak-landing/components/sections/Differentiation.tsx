import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { differentiation } from "@/content/sections";

export function Differentiation() {
  return (
    <section className="bg-bg px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading eyebrow={differentiation.eyebrow} heading={differentiation.heading} />
        </Reveal>

        <StaggerReveal className="mt-14">
          {differentiation.points.map((point, i) => (
            <div
              key={point.title}
              className="spec-row flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="heading-serif shrink-0 text-2xl text-accent sm:w-16">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <p className="heading-serif text-xl text-primary sm:text-2xl">{point.title}</p>
                <p className="mt-2 max-w-2xl text-sm text-text-muted sm:text-base">{point.body}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
