import type { LucideIcon } from "lucide-react";

export function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-[#FFF8F1]">
      <Icon size={22} aria-hidden />
    </div>
  );
}
