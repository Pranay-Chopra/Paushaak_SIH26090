const Flourish = ({ className }: { className: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/heritage/corner-flourish.svg"
    alt=""
    aria-hidden
    className={`pointer-events-none absolute h-10 w-10 opacity-70 ${className}`}
  />
);

export function CornerFlourishes() {
  return (
    <>
      <Flourish className="left-0 top-0" />
      <Flourish className="right-0 top-0 -scale-x-100" />
      <Flourish className="bottom-0 left-0 -scale-y-100" />
      <Flourish className="bottom-0 right-0 -scale-x-100 -scale-y-100" />
    </>
  );
}
