export function Couplet({ lines, translation }: { lines: readonly string[]; translation: string }) {
  return (
    <blockquote className="border-l-2 border-[var(--h-navy)] pl-5">
      {lines.map((line) => (
        <p key={line} className="font-body-hi text-xl leading-relaxed text-[var(--h-ink)] sm:text-2xl">
          {line}
        </p>
      ))}
      <p className="font-display-en mt-3 text-sm italic text-[var(--h-ink-soft)]">{translation}</p>
    </blockquote>
  );
}
