import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      aria-label="home"
      className="inline-flex items-center gap-2 font-space text-xl font-bold text-white"
      href="/"
    >
      <Image
        src="/logo-mark.png"
        alt="Code Unit Labs logo mark"
        width={36}
        height={32}
        className="h-8 w-auto"
        priority
      />
      <span className="text-accent">CodeUnitLabs</span>
    </Link>
  );
}

