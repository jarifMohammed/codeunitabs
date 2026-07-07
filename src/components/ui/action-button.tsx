"use client";

import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

import { submitContactIntent, type ContactAction } from "@/services/contact.service";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "light";
type ButtonSize = "sm" | "md" | "lg";

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  actionName: ContactAction;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
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
  onClick,
  ...props
}: ActionButtonProps) {
  async function handleActionClick(event: MouseEvent<HTMLButtonElement>) {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    await submitContactIntent(actionName);
  }

  return (
    <button
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
      onClick={handleActionClick}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
