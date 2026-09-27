"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mirrors next-themes' documented hydration-safe pattern: server and first client
  // render must agree (both "unmounted") since resolvedTheme is unknown until mount.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-surface-tint cursor-pointer"
    >
      {mounted ? (
        isDark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />
      ) : (
        <span className="block h-[18px] w-[18px]" />
      )}
    </button>
  );
}
