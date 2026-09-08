import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  variant?: "light" | "dark" | "gold";
};

export default function GlassCard({
  children,
  className = "",
  variant = "light",
  ...rest
}: Props) {
  const base =
    variant === "dark" ? "glass-dark text-white" : variant === "gold" ? "glass-gold" : "glass";
  return (
    <div
      {...rest}
      className={`${base} rounded-2xl p-6 md:p-8 transition-transform duration-300 ease-emil hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </div>
  );
}
