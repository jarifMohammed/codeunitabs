"use client";

import type { ReactNode, CSSProperties } from "react";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/utils/cn";

type AnimationType = "fade-up" | "fade-down" | "slide-left" | "slide-right" | "scale-in" | "fade";

type AnimateInProps = {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
};

const animationMap: Record<AnimationType, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-6",
    visible: "opacity-100 translate-y-0",
  },
  "slide-left": {
    hidden: "opacity-0 -translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  "slide-right": {
    hidden: "opacity-0 translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  "scale-in": {
    hidden: "opacity-0 scale-90",
    visible: "opacity-100 scale-100",
  },
  "fade": {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
};

export function AnimateIn({
  children,
  type = "fade-up",
  delay = 0,
  duration = 700,
  className,
  style,
  threshold = 0.12,
  as: Tag = "div",
}: AnimateInProps) {
  const { ref, inView } = useInView<HTMLElement>({ threshold });
  const anim = animationMap[type];

  const El = Tag as "div";

  return (
    <El
      // @ts-expect-error - generic element ref
      ref={ref}
      className={cn(
        "transition-all ease-out",
        inView ? anim.visible : anim.hidden,
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: inView ? `${delay}ms` : "0ms",
        ...style,
      }}
    >
      {children}
    </El>
  );
}
