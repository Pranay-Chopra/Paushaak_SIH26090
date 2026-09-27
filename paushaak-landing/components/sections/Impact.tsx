import { Building2, CalendarClock, Percent, Users } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { impact } from "@/content/sections";

const icons = [Percent, Users, Building2, CalendarClock];

export function Impact() {
  return (
    <section id="impact" className="bg-diamond-pattern bg-surface-tint px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={impact.eyebrow} heading={impact.heading} />
        </Reveal>

        {impact.pieChartConfirm && (
          <Reveal className="mt-8 rounded-2xl border border-dashed border-border bg-surface p-6 text-sm text-text-muted">
            Slide 5 market breakdown (pie chart) — pending final figures from the pitch deck.
          </Reveal>
        )}

        <StaggerReveal className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impact.stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div key={stat.label} className="card">
                <IconBadge icon={Icon} />
                <p className="heading-serif mt-5 text-4xl text-primary">
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
              </div>
            );
          })}
        </StaggerReveal>

        <p className="mt-8 text-center text-xs text-text-muted">{impact.disclaimer}</p>
      </div>
    </section>
  );
}
