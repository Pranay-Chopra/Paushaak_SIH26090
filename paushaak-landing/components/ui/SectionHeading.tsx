export function SectionHeading({
  eyebrow,
  heading,
  align = "left",
}: {
  eyebrow: string;
  heading: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading-serif mt-3 text-4xl text-primary sm:text-5xl">{heading}</h2>
    </div>
  );
}
