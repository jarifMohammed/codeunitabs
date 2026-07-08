"use client";

import { motion } from "framer-motion";

type SectionDividerProps = {
  variant?: "line" | "gradient" | "glow";
};

export function SectionDivider({ variant = "gradient" }: SectionDividerProps) {
  if (variant === "line") {
    return (
      <div className="mx-auto flex max-w-design items-center gap-4 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-[120px] min-[1800px]:px-[200px]">
        <motion.div
          className="h-px flex-1 bg-white/5"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    );
  }

  if (variant === "glow") {
    return (
      <div className="flex justify-center px-4 py-2 sm:px-8 lg:px-12 xl:px-16 2xl:px-[120px] min-[1800px]:px-[200px]">
        <motion.div
          className="h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent shadow-[0_0_12px_rgba(254,74,0,0.3)]"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-design items-center gap-4 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-[120px] min-[1800px]:px-[200px]">
      <motion.div
        className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
