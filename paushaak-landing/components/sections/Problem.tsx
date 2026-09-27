import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { problem } from "@/content/sections";

export function Problem() {
  return (
    <section id="problem" className="bg-bg px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={problem.eyebrow} heading={problem.heading} />
          <p className="mt-6 max-w-2xl text-base text-text-muted sm:text-lg">{problem.body}</p>
        </Reveal>

        <StaggerReveal className="mt-16 grid gap-10 border-t border-border pt-10 sm:grid-cols-3 sm:gap-8">
          {problem.stats.map((stat) => (
            <div key={stat.label} className="sm:border-l sm:border-border sm:pl-8 sm:first:border-l-0 sm:first:pl-0">
              <p className="heading-serif text-5xl text-accent sm:text-6xl">{stat.value}</p>
              <p className="mt-4 max-w-xs text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
