import { hero } from "@/content/heritage";
import { CornerFlourishes } from "@/components/heritage/CornerFlourishes";
import { Couplet } from "@/components/heritage/Couplet";

export function HeritageHero() {
  return (
    <section className="hero-tapestry-bg relative flex min-h-svh flex-col justify-center px-4 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="font-display-en mb-8 text-center text-xs uppercase tracking-[0.2em] text-[var(--h-navy)] sm:text-sm">
          {hero.eyebrow}
        </p>
        <div className="ink-smudge" style={{ width: 130, top: "2%", left: "6%", transform: "rotate(-10deg)" }} />

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="aged-frame relative overflow-hidden rounded-sm bg-[var(--h-bg-deep)] p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hero.painting.src}
                alt={hero.painting.alt}
                className="w-full rounded-sm object-cover"
              />
              <CornerFlourishes />
            </div>
            <p className="font-display-en mt-2 text-center text-[10px] uppercase tracking-[0.15em] text-[var(--h-ink-soft)]">
              {hero.painting.credit}
            </p>
          </div>

          <div className="cloth-patch">
            <h1 className="font-display-hi text-5xl leading-[1.1] text-[var(--h-navy)] sm:text-6xl">
              {hero.headingHi}
            </h1>
            <p className="font-display-en mt-2 text-sm uppercase tracking-[0.15em] text-[var(--h-ink-soft)]">
              {hero.headingEn}
            </p>
            <p className="mt-6 max-w-lg text-lg italic text-[var(--h-ink)]">{hero.subhead}</p>

            <div className="mt-8">
              <Couplet lines={hero.coupletHi} translation={hero.coupletEn} />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={hero.primaryCta.href}
                className="rounded-sm bg-[var(--h-navy)] px-6 py-3 text-[var(--h-bg)] shadow-md transition-transform hover:scale-[1.02]"
              >
                <span className="font-body-hi block text-lg">{hero.primaryCta.label}</span>
                <span className="font-display-en block text-[10px] uppercase tracking-[0.15em] opacity-80">
                  {hero.primaryCta.sub}
                </span>
              </a>
              <a
                href={hero.secondaryCta.href}
                className="rounded-sm border border-[var(--h-navy)] px-6 py-3 text-[var(--h-navy)] transition-colors hover:bg-[var(--h-navy)] hover:text-[var(--h-bg)]"
              >
                <span className="font-body-hi block text-lg">{hero.secondaryCta.label}</span>
                <span className="font-display-en block text-[10px] uppercase tracking-[0.15em] opacity-80">
                  {hero.secondaryCta.sub}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
