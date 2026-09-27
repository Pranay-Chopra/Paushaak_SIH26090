import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  withArrow?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "solid", withArrow, className = "" }: Props) {
  const variantClass = variant === "solid" ? "btn-solid" : "btn-outline";
  return (
    <a href={href} className={`btn ${variantClass} ${className}`}>
      {children}
      {withArrow && <ArrowRight size={14} aria-hidden />}
    </a>
  );
}
