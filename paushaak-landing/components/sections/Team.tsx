import { User } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { team } from "@/content/sections";

export function Team() {
  return (
    <section id="team" className="bg-diamond-pattern bg-surface-tint px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={team.eyebrow} heading={team.heading} align="center" />
        </Reveal>

        <StaggerReveal className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {team.members.map((member, i) => (
            <div key={`${member.name}-${i}`} className="card flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-border text-text-muted">
                <User size={28} aria-hidden />
              </div>
              <p className="mt-4 text-sm font-bold text-primary">{member.name}</p>
              <p className="mt-1 text-xs text-text-muted">{member.role}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
