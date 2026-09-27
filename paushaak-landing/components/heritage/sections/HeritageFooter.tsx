import Link from "next/link";
import { footer } from "@/content/heritage";

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

        <Link
          href="/classic"
          className="font-display-en mt-6 inline-block text-xs uppercase tracking-[0.15em] text-[var(--h-bg)] underline underline-offset-4"
        >
          ← Back to the modern site
        </Link>
      </div>
    </footer>
  );
}
