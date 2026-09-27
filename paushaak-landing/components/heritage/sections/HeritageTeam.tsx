import { User } from "lucide-react";
import { team } from "@/content/heritage";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";

export function HeritageTeam() {
  return (
    <section id="team" className="relative px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center">
            <p className="font-body-hi text-sm tracking-wide text-[var(--h-navy)]">
              {team.eyebrowHi}{" "}
              <span className="font-display-en text-xs uppercase tracking-[0.15em] text-[var(--h-ink-soft)]">
                · {team.eyebrowEn}
              </span>
            </p>
            <h2 className="font-display-hi mt-2 text-4xl text-[var(--h-navy)] sm:text-5xl">{team.heading}</h2>
            <p className="font-display-en mt-1 text-sm uppercase tracking-[0.15em] text-[var(--h-ink-soft)]">
              {team.headingEn}
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {team.members.map((member, i) => (
            <div key={`${member.name}-${i}`} className="flex flex-col items-center text-center">
              <div className="aged-frame flex h-20 w-20 items-center justify-center rounded-full bg-[var(--h-bg-deep)]">
                <User size={28} className="text-[var(--h-navy)]" aria-hidden />
              </div>
              <p className="font-display-en mt-3 text-sm text-[var(--h-navy)]">{member.name}</p>
              <p className="font-display-en text-xs italic text-[var(--h-ink-soft)]">{member.role}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
