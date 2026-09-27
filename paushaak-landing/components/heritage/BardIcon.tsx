"use client";

import { useState } from "react";
import { bard } from "@/content/heritage";

// Dummy chatbot affordance styled as a court bard/dancer medallion.
// Not wired to anything yet — clicking just reveals the "coming soon" note.
export function BardIcon() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="aged-frame max-w-64 rounded-lg bg-[var(--h-bg)] px-4 py-3 text-sm text-[var(--h-ink)] shadow-lg">
          <p className="font-body-hi text-lg text-[var(--h-navy)]">{bard.label}</p>
          <p className="mt-1 text-xs text-[var(--h-ink-soft)]">{bard.note}</p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={bard.labelEn}
        aria-expanded={open}
        className="h-16 w-16 overflow-hidden rounded-full shadow-lg ring-2 ring-[var(--h-border)] transition-transform hover:scale-105"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/heritage/court-bard.svg" alt={bard.labelEn} className="h-full w-full" />
      </button>
    </div>
  );
}
