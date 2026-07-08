"use client";

import { motion } from "framer-motion";

import { ActionButton } from "@/components/ui/action-button";
import { AnimateIn } from "@/components/ui/animate-in";

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-title-gradient px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]"
      id="contact"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_48%)]" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-[10%] top-[18%] h-24 w-24 rounded-full bg-white/20 blur-[70px]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <AnimateIn type="fade-up" className="relative z-10 mx-auto flex max-w-[768px] flex-col items-center gap-9 text-center">
        <div className="flex flex-col items-center gap-4">
          <motion.h2
            className="font-montserrat text-[clamp(2rem,8vw,4rem)] font-extrabold leading-[1.2] tracking-[-0.6px] text-bg sm:text-[clamp(2.5rem,4.4vw,4rem)] sm:tracking-[-1.2px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-accentDark to-accentSoft bg-clip-text text-transparent">
              Powerful Together
            </span>
          </motion.h2>
          <motion.p
            className="font-inter text-lg leading-7 text-bg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            From idea to launch, we&apos;ll craft an experience your users will remember.
          </motion.p>
        </div>
        <AnimateIn type="scale-in" delay={220} className="transition-all duration-700 ease-out">
          <ActionButton actionName="bookDemo" size="lg">
            Start a Project
          </ActionButton>
        </AnimateIn>
      </AnimateIn>
    </section>
  );
}
