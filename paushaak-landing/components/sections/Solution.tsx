import { Glasses, Mic, Scale, Wand2 } from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { solution } from "@/content/sections";

const icons = [Mic, Wand2, Glasses, Scale];

export function Solution() {
  return (
    <section id="solution" className="bg-surface-tint px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={solution.eyebrow} heading={solution.heading} />
        </Reveal>

        <StaggerReveal className="mt-12 grid gap-6 sm:grid-cols-2">
          {solution.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={step.title} className="card flex gap-4">
                <IconBadge icon={Icon} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    Step {i + 1}
                  </p>
                  <p className="heading-serif mt-1 text-xl text-primary sm:text-2xl">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">{step.body}</p>
                </div>
              </div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
