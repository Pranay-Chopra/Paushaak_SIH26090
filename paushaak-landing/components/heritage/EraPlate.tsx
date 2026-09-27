import { CornerFlourishes } from "@/components/heritage/CornerFlourishes";

export function EraPlate({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-full max-w-sm ${className}`}>
      <div className="aged-frame relative overflow-hidden rounded-sm bg-[var(--h-bg-deep)] p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="aspect-[3/4] w-full rounded-sm object-cover" />
        <CornerFlourishes />
      </div>
      <p className="font-display-en mt-2 text-center text-xs uppercase tracking-[0.15em] text-[var(--h-ink-soft)]">
        {caption}
      </p>
    </div>
  );
}
