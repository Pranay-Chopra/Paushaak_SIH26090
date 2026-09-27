import { introVideo } from "@/content/heritage";
import { OrnateHeading } from "@/components/heritage/OrnateHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/heritage/VideoPlayer";

export function HeritageIntroVideo() {
  return (
    <section id="watch" className="relative border-y border-[var(--h-border)] bg-[var(--h-bg-deep)]/40 px-4 py-20 sm:px-8">
      <div
        className="ink-smudge"
        style={{ width: 100, height: 2, top: "10%", left: "10%", transform: "rotate(10deg)" }}
      />

      <div className="mx-auto max-w-4xl">
        <Reveal>
          <OrnateHeading
            eyebrowHi={introVideo.eyebrowHi}
            eyebrowEn={introVideo.eyebrowEn}
            heading={introVideo.heading}
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="aged-frame relative mt-12 aspect-video overflow-hidden rounded-sm bg-[var(--h-bg)]">
            {introVideo.videoSrc ? (
              <VideoPlayer src={introVideo.videoSrc} poster={introVideo.poster} />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-[var(--h-ink)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--h-border)] bg-[var(--h-navy)]">
                  <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-[var(--h-bg)]" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="font-display-en text-xs uppercase tracking-[0.15em] text-[var(--h-ink-soft)]">
                  Video coming soon
                </p>
              </div>
            )}
          </div>
          <p className="font-display-en mt-4 text-center text-sm italic text-[var(--h-ink-soft)]">
            {introVideo.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
