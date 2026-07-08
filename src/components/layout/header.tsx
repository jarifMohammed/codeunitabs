"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

import { navigationItems } from "@/constants/navigation";
import { ActionButton } from "@/components/ui/action-button";
import { Logo } from "@/components/shared/logo";
import { cn } from "@/utils/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-8 lg:px-12 xl:px-16 2xl:px-[120px] min-[1800px]:px-[200px] transition-all duration-500",
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent",
      )}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
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
    </motion.header>
  );
}
