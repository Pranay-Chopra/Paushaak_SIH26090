import { hero, links } from "@/content/heritage";
import { CornerFlourishes } from "@/components/heritage/CornerFlourishes";
import { Couplet } from "@/components/heritage/Couplet";

export function HeritageHero() {
  return (
    <section className="hero-tapestry-bg relative flex min-h-svh flex-col justify-center px-4 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
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
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--h-navy)] text-[var(--h-navy)] transition-colors hover:bg-[var(--h-navy)] hover:text-[var(--h-bg)]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.61-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>
              <a
                href={links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube video"
                className="flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--h-navy)] text-[var(--h-navy)] transition-colors hover:bg-[var(--h-navy)] hover:text-[var(--h-bg)]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M21.6 7.2s-.21-1.49-.86-2.14c-.82-.86-1.74-.86-2.16-.91C15.6 4 12 4 12 4h-.01s-3.6 0-6.58.15c-.42.05-1.34.05-2.16.91-.65.65-.86 2.14-.86 2.14S2.16 8.94 2.16 10.68v1.63c0 1.74.23 3.48.23 3.48s.21 1.49.86 2.14c.82.86 1.9.83 2.38.92 1.72.17 7.32.21 7.37.21s3.6-.01 6.58-.15c.42-.05 1.34-.05 2.16-.91.65-.65.86-2.14.86-2.14s.23-1.74.23-3.48v-1.63c0-1.74-.23-3.48-.23-3.48zM9.75 14.35V8.65l5.75 2.86-5.75 2.84z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
