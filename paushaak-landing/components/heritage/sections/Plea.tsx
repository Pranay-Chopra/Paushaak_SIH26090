import { plea, plates } from "@/content/heritage";
import { Couplet } from "@/components/heritage/Couplet";
import { Reveal } from "@/components/ui/Reveal";
import { EraPlate } from "@/components/heritage/EraPlate";

export function Plea() {
  return (
    <section id="plea" className="relative border-y border-[var(--h-border)] bg-[var(--h-bg-deep)]/40 px-4 py-20 sm:px-8">
      <div
        className="ink-smudge"
        style={{ width: 90, height: 2, top: "12%", right: "15%", transform: "rotate(14deg)" }}
      />

      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[minmax(0,280px)_1fr] md:gap-14">
        <Reveal>
          <EraPlate {...plates.court} />
        </Reveal>

        <Reveal>
          <p className="font-body-hi text-center text-base text-[var(--h-navy)] md:text-left">
            {plea.eyebrowHi}{" "}
            <span className="font-display-en text-xs uppercase tracking-[0.15em] text-[var(--h-ink-soft)]">
              · {plea.eyebrowEn}
            </span>
          </p>
          <div className="mt-8">
            <Couplet lines={plea.coupletHi} translation={plea.coupletEn} />
          </div>
          <p className="font-display-en mt-8 text-center text-lg italic leading-relaxed text-[var(--h-ink)] md:text-left">
            {plea.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
