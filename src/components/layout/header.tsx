"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { navigationItems } from "@/constants/navigation";
import { ActionButton } from "@/components/ui/action-button";
import { Logo } from "@/components/shared/logo";
import { cn } from "@/utils/cn";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 py-3 sm:px-8 lg:px-12 xl:px-16 2xl:px-[120px] min-[1800px]:px-[200px] animate-header-slide">
      <div className="mx-auto flex h-[70px] max-w-design items-center justify-between rounded-[4px] border border-white/10 bg-white/[0.05] p-3 backdrop-blur transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.07]">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex xl:gap-12">
          {navigationItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname === item.href;

            return (
              <Link
                className={cn(
                  "font-space relative transition-colors duration-300 hover:text-white group",
                  active ? "text-white" : "text-navMuted",
                )}
                href={item.href}
                key={item.label}
              >
                {item.label}
                {/* animated underline */}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ease-out",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <ActionButton actionName="bookDemo" size="sm" variant="secondary">
            Request a Consultation
          </ActionButton>
        </div>
        <button
          aria-label="Open navigation menu"
          className="grid size-11 place-items-center rounded-[4px] border border-white/10 text-white lg:hidden transition-all duration-300 hover:border-accent/40 hover:bg-white/5 active:scale-95"
          type="button"
        >
          <Menu aria-hidden="true" className="size-5" />
        </button>
      </div>
    </header>
  );
}
