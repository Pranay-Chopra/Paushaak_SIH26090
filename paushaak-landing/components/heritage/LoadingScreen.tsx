"use client";

import { useEffect, useState } from "react";

const DISPLAY_MS = 3000;
const FADE_MS = 400;

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), DISPLAY_MS);
    const hideTimer = setTimeout(() => setVisible(false), DISPLAY_MS + FADE_MS);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`loading-screen ${fading ? "opacity-0" : "opacity-100"}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="relative z-10 flex flex-row items-center gap-4 text-center sm:gap-6">
        <p className="font-body-hi text-3xl text-[var(--h-navy)] sm:text-4xl">पौशाक</p>
        <span className="script-divider" aria-hidden />
        <p className="font-display-en text-3xl tracking-[0.15em] text-[var(--h-navy)] sm:text-4xl">
          PAUSHAAK
        </p>
        <span className="script-divider" aria-hidden />
        <p className="font-urdu text-3xl text-[var(--h-navy)] sm:text-4xl" dir="rtl" lang="ur">
          پوشاک
        </p>
      </div>

      <div className="royal-bar relative z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/heritage/bar-ray.svg" alt="" aria-hidden className="royal-bar-ray royal-bar-ray--start" />
        <div className="royal-bar-track">
          <div className="royal-bar-fill" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/heritage/bar-ray.svg" alt="" aria-hidden className="royal-bar-ray" />
      </div>
    </div>
  );
}
