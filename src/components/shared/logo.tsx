import Link from "next/link";
import { Zap } from "lucide-react";

export function Logo() {
  return (
    <Link
      aria-label="Darken home"
      className="inline-flex items-center gap-2 font-space text-xl font-bold text-white"
      href="/"
    >
      <span className="grid size-8 place-items-center rounded-[6px] bg-accent text-white shadow-accent">
        <Zap aria-hidden="true" className="size-5 fill-current" />
      </span>
      <span>Darken</span>
    </Link>
  );
}
