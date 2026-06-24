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
  primary: "bg-accent text-white hover:bg-accentDark",
  secondary:
    "border border-white/20 bg-glass-gradient text-white hover:border-accent/60 hover:text-white",
  light: "bg-accent text-white hover:bg-accentDark",
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
        "inline-flex max-w-full items-center justify-center rounded-[4px] text-center font-space font-medium leading-[1.2] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
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
