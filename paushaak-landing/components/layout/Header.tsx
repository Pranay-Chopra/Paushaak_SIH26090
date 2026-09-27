import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ThemedImage } from "@/components/ui/ThemedImage";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/sections";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="flex items-center" aria-label="PAUSHAAK home">
          <ThemedImage
            lightSrc="/brand/wordmark-light.svg"
            darkSrc="/brand/wordmark-dark.svg"
            alt="PAUSHAAK"
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.1em] text-text-muted md:flex">
          <Link href="#problem" className="transition-colors hover:text-accent">
            Problem
          </Link>
          <Link href="#solution" className="transition-colors hover:text-accent">
            Solution
          </Link>
          <Link href="#impact" className="transition-colors hover:text-accent">
            Impact
          </Link>
          <Link href="#team" className="transition-colors hover:text-accent">
            Team
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button href={hero.primaryCta.href} variant="solid" className="hidden sm:inline-flex">
            {hero.primaryCta.label}
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
