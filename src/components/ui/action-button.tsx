"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, type HTMLMotionProps, useMotionValue, useSpring } from "framer-motion";

import { submitContactIntent, type ContactAction } from "@/services/contact.service";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "light";
type ButtonSize = "sm" | "md" | "lg";

type ActionButtonProps = Omit<HTMLMotionProps<"button">, "size"> & {
  actionName: ContactAction;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  magnetic?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-[0_4px_14px_0_rgba(254,74,0,0.39)] hover:shadow-[0_6px_20px_rgba(254,74,0,0.4)] hover:bg-accentSoft border border-accentSoft/50",
  secondary:
    "bg-transparent text-white border border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40 hover:shadow-[0_4px_14px_0_rgba(255,255,255,0.05)]",
  light:
    "bg-white text-bg border border-transparent shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] hover:bg-white/90 hover:shadow-[0_6px_20px_rgba(255,255,255,0.4)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 py-2 text-sm",
  md: "min-h-12 px-5 py-3 text-sm sm:min-h-[51px] sm:px-6 sm:py-4 sm:text-base",
  lg: "min-h-12 px-6 py-3 text-base sm:min-h-14 sm:px-8 sm:py-4 sm:text-xl",
};

export function ActionButton({
  actionName,
  variant = "primary",
  size = "md",
  className,
  children,
  magnetic = true,
}: ActionButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  async function handleClick() {
    await submitContactIntent(actionName);
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!magnetic) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      className={cn(
        "inline-flex max-w-full items-center justify-center rounded-lg text-center font-semibold tracking-wide",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5",
        "active:translate-y-0 active:scale-[0.98]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      style={{ x: springX, y: springY }}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      type="button"
    >
      {children}
    </motion.button>
  );
}
