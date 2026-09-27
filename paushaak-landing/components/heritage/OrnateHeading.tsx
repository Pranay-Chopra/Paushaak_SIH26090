export function OrnateHeading({
  eyebrowHi,
  eyebrowEn,
  heading,
  align = "left",
}: {
  eyebrowHi: string;
  eyebrowEn: string;
  heading: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-body-hi text-sm tracking-wide text-[var(--h-navy)]">
        {eyebrowHi}{" "}
        <span className="font-display-en text-xs uppercase tracking-[0.15em] text-[var(--h-ink-soft)]">
          · {eyebrowEn}
        </span>
      </p>
      <h2 className="font-display-en mt-2 text-3xl leading-tight text-[var(--h-navy)] sm:text-4xl">
        {heading}
      </h2>
    </div>
  );
}
