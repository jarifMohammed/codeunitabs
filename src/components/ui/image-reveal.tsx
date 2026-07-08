"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "bottom" | "top";
  delay?: number;
};

const clipVariants = {
  left: { hidden: { clipPath: "inset(0 100% 0 0)" }, visible: { clipPath: "inset(0 0% 0 0)" } },
  right: { hidden: { clipPath: "inset(0 0% 0 100%)" }, visible: { clipPath: "inset(0 0% 0 0%)" } },
  bottom: { hidden: { clipPath: "inset(100% 0 0 0)" }, visible: { clipPath: "inset(0% 0 0 0)" } },
  top: { hidden: { clipPath: "inset(0 0 100% 0)" }, visible: { clipPath: "inset(0 0 0% 0)" } },
};

export function ImageReveal({
  children,
  className,
  direction = "bottom",
  delay = 0,
}: ImageRevealProps) {
  return (
    <motion.div
      className={className}
      variants={clipVariants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
