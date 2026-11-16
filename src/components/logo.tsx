import { Link2 } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid size-9 place-items-center rounded-xl bg-ink text-esg shadow-[0_6px_16px_-8px_rgb(11_18_14_/_0.9)]">
        <Link2 className="size-5" strokeWidth={2.4} aria-hidden />
      </span>
      <span className="text-[1.0625rem] font-extrabold tracking-[-0.02em] text-ink">
        Elosu
      </span>
    </span>
  );
}
