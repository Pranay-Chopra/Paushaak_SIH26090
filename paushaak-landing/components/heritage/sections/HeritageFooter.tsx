import { footer, links } from "@/content/heritage";

export function HeritageFooter() {
  return (
    <footer className="relative bg-[var(--h-ink)] pb-16 text-center">
      <div className="footer-band" aria-hidden />

      <div className="px-4 pt-16 sm:px-8">
        <p className="font-display-hi text-2xl text-[var(--h-bg)]">{footer.colophonHi}</p>
        <p className="font-display-en mt-1 text-sm italic text-[var(--h-border)]">{footer.colophonEn}</p>

        <hr className="ink-rule mx-auto mt-8 max-w-xs" />

        <p className="font-display-en mt-8 text-xs uppercase tracking-[0.1em] text-[var(--h-border)]">
          {footer.tag}
        </p>

        <div className="mt-6 flex items-center justify-center gap-6">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display-en text-xs uppercase tracking-[0.15em] text-[var(--h-bg)] underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display-en text-xs uppercase tracking-[0.15em] text-[var(--h-bg)] underline underline-offset-4"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
