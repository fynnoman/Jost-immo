type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  tone?: "light" | "dark";
};

/**
 * Faint, large "Platzhalter" watermark for image containers.
 * Drop inside a `relative` container that holds an <Image />.
 */
export default function PlaceholderMark({ size = "lg", tone = "light" }: Props) {
  const sizeClass =
    size === "xl"
      ? "text-[14vw] md:text-[10vw]"
      : size === "lg"
      ? "text-[16vw] md:text-[9vw] lg:text-[7vw]"
      : size === "md"
      ? "text-6xl md:text-8xl"
      : "text-4xl md:text-5xl";

  const color =
    tone === "dark" ? "text-black/25" : "text-white/25";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center overflow-hidden select-none"
    >
      <span
        className={`font-display font-medium uppercase tracking-[0.14em] leading-none ${sizeClass} ${color} whitespace-nowrap drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]`}
        style={{ transform: "rotate(-8deg)" }}
      >
        Platzhalter
      </span>
    </div>
  );
}
