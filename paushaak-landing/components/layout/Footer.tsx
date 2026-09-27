import { ThemedImage } from "@/components/ui/ThemedImage";
import { footer } from "@/content/sections";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-tint">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="max-w-md">
            <ThemedImage
              lightSrc="/brand/wordmark-light.svg"
              darkSrc="/brand/wordmark-dark.svg"
              alt="PAUSHAAK"
              className="h-6 w-auto"
            />
            <p className="mt-4 text-sm text-text-muted">{footer.mission}</p>
          </div>

          <div className="flex gap-6 text-xs font-semibold uppercase tracking-[0.1em] text-text-muted">
            <a href={footer.links.pitchDeck.href} className="transition-colors hover:text-accent">
              {footer.links.pitchDeck.label}
            </a>
            <a href={footer.links.contact.href} className="transition-colors hover:text-accent">
              {footer.links.contact.label}
            </a>
            <a href={footer.links.repo.href} className="transition-colors hover:text-accent">
              {footer.links.repo.label}
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-xs text-text-muted">{footer.tag}</p>
      </div>
    </footer>
  );
}
