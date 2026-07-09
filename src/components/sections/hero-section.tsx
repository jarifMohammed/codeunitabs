"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { imageAssets } from "@/constants/assets";
import { ActionButton } from "@/components/ui/action-button";
import { AnimateIn } from "@/components/ui/animate-in";

export function HeroSection() {
  const { scrollY } = useScroll();
  const horizonY = useTransform(scrollY, [0, 800], [0, 120]);
  const horizonOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const bgScale = useTransform(scrollY, [0, 600], [1, 1.08]);

  return (
    <section
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-bg px-4 pb-24 pt-28 sm:px-8 lg:px-12 xl:px-16 2xl:px-[68px] min-[1800px]:px-0"
      id="about"
    >
      {/* Ambient gradient orbs */}
      <motion.div
        className="pointer-events-none absolute left-[5%] top-[15%] size-[500px] rounded-full bg-accent/5 blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[10%] top-[40%] size-[400px] rounded-full bg-accent/3 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 text-center" style={{ scale: bgScale }}>
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          <div className="flex flex-col items-center gap-3">
            <AnimateIn type="fade-up" delay={250} className="w-full">
              <h1 className="max-w-[1400px] font-montserrat text-[clamp(2.45rem,11vw,4.5rem)] font-bold capitalize leading-[1.2] text-white sm:text-[clamp(3rem,6vw,4.5rem)]">
                Empowering Your Business With{" "}
                <span className="text-accent">Data-Driven Insights</span>
              </h1>
            </AnimateIn>
            <AnimateIn type="fade-up" delay={420} className="w-full">
              <p className="max-w-[1050px] font-space text-base font-semibold leading-[1.35] text-white/60 sm:text-lg md:text-xl md:leading-[1.2]">
                We build the software your business runs on.
              </p>
            </AnimateIn>
          </div>
        </div>
        <AnimateIn type="scale-in" delay={600} className="flex flex-wrap items-center justify-center gap-[9px] pt-0">
          <ActionButton actionName="bookDemo" variant="secondary">
            Talk to sales
          </ActionButton>
        </AnimateIn>
      </motion.div>

      {/* Scroll hint */}
      <AnimateIn type="fade" delay={900} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">Scroll</span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.div
            className="h-1.5 w-1 rounded-full bg-accent"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </AnimateIn>

      {/* Horizon image with parallax */}
      <motion.div
        className="absolute inset-x-0 bottom-[-48px] h-[280px] sm:bottom-[-64px] sm:h-[360px]"
        style={{ y: horizonY, opacity: horizonOpacity }}
      >
        {/* Base horizon image */}
        <Image
          alt=""
          className="h-full w-full object-cover object-top"
          fill
          priority
          sizes="100vw"
          src={imageAssets.heroHorizon}
        />
        {/* Glowing horizon sweep - clipped to reveal left to right like sunrise */}
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{
            clipPath: [
              "inset(0 100% 0 0)",
              "inset(0 100% 0 0)",
              "inset(0 0% 0 0)",
              "inset(0 0% 0 0)",
              "inset(0 100% 0 0)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
            times: [0, 0.35, 0.7, 0.85, 1],
          }}
          style={{
            filter: "brightness(1.7) saturate(1.5) drop-shadow(0 0 12px rgba(254,74,0,0.7)) drop-shadow(0 0 50px rgba(255,134,46,0.4))",
          }}
        >
          <Image
            alt=""
            className="h-full w-full object-cover object-top"
            fill
            sizes="100vw"
            src={imageAssets.heroHorizon}
          />
        </motion.div>
        {/* Gradient fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[170px] bg-gradient-to-b from-transparent to-bg sm:h-[206px]" />
      </motion.div>
    </section>
  );
}
