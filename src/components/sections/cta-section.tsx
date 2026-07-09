"use client";

import { motion } from "framer-motion";

import { ActionButton } from "@/components/ui/action-button";
import { AnimateIn } from "@/components/ui/animate-in";

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#020101] via-[#0d0400] to-[#1f0800] px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]"
      id="contact"
    >
      {/* Scanner line */}
      <motion.div
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      {/* Tech grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(254,74,0,0.4) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(254,74,0,0.4) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "50px 50px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(254,74,0,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Main glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Floating particles */}
      <motion.div
        className="pointer-events-none absolute left-[15%] top-[25%] h-1 w-1 rounded-full bg-accent/60"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[20%] top-[30%] h-1.5 w-1.5 rounded-full bg-accent/40"
        animate={{ y: [0, -15, 0], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="pointer-events-none absolute left-[30%] bottom-[25%] h-1 w-1 rounded-full bg-accent/50"
        animate={{ y: [0, -25, 0], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="pointer-events-none absolute right-[35%] bottom-[35%] h-0.5 w-0.5 rounded-full bg-white/60"
        animate={{ y: [0, -18, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Corner accents */}
      <div className="pointer-events-none absolute left-6 top-6 h-10 w-10 border-l-2 border-t-2 border-accent/20 rounded-tl-lg" />
      <div className="pointer-events-none absolute right-6 top-6 h-10 w-10 border-r-2 border-t-2 border-accent/20 rounded-tr-lg" />
      <div className="pointer-events-none absolute bottom-6 left-6 h-10 w-10 border-b-2 border-l-2 border-accent/20 rounded-bl-lg" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 border-b-2 border-r-2 border-accent/20 rounded-br-lg" />

      <AnimateIn type="fade-up" className="relative z-10 mx-auto flex max-w-[768px] flex-col items-center gap-9 text-center">
        <div className="flex flex-col items-center gap-4">
          <motion.h2
            className="font-montserrat text-[clamp(2rem,8vw,4rem)] font-extrabold leading-[1.2] tracking-[-0.6px] text-white sm:text-[clamp(2.5rem,4.4vw,4rem)] sm:tracking-[-1.2px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-accentDark via-accent to-accentSoft bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(254,74,0,0.5)]">
              Powerful Together
            </span>
          </motion.h2>
          <motion.p
            className="font-inter text-lg leading-7 text-white/80"
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
