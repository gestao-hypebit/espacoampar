export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const content = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="flex w-max animate-marquee items-center">
        {content.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-6 whitespace-nowrap px-6 font-display text-xl italic sm:text-2xl"
          >
            {text}
            <span aria-hidden="true" className="text-sm not-italic opacity-60">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
