"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
};

// Swaps between hand-authored light/dark SVG variants — never recolors via CSS
// filters, since the dark variants have corrected contrast, not just inverted colors.
export function ThemedImage({ lightSrc, darkSrc, alt, className }: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Same hydration-safe pattern as ThemeToggle — resolvedTheme is unknown until mount.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const src = mounted && resolvedTheme === "dark" ? darkSrc : lightSrc;

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} />;
}
