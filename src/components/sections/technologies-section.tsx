"use client";

import { motion } from "framer-motion";

import { AnimateIn } from "@/components/ui/animate-in";
import { technologyLogos } from "@/constants/content";
import { SectionTag } from "@/components/ui/section-tag";

const techIcons: Record<string, React.ReactNode> = {
  Vercel: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-10">
      <path d="M12 2L1 21h22L12 2z" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-8 sm:size-10" strokeWidth="1.5">
      <circle cx="12" cy="12" r="2.5" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(120 12 12)" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" fill="none" className="size-8 sm:size-10">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.5 8v8M17 8l-5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 8v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Stripe: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-10">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.16.67 4.24 1.76l-1.41 1.41C13.15 7.94 12.12 7.5 11 7.5c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.12 0 2.15-.44 2.83-1.17l1.41 1.41A5.98 5.98 0 0111 17.5z" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" fill="none" className="size-8 sm:size-10">
      <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Linear: (
    <svg viewBox="0 0 24 24" fill="none" className="size-8 sm:size-10">
      <path d="M3 3h18v18H3V3z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 3l18 18M3 21L21 3" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-10">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Supabase: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-10">
      <path d="M11.9 1.9C10.9 2.9 9 5.4 8 7.4l1.5 1.5c.8-.8 2.1-2.1 3.5-3.5.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-1.4 1.4-2.7 2.7-3.5 3.5l1.5 1.5c2-1 4.5-2.9 5.5-3.9 3-3 3-7.8 0-10.8-3-3-7.8-3-10.8 0z" />
    </svg>
  ),
  Segment: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-10">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3" />
    </svg>
  ),
  Postgres: (
    <svg viewBox="0 0 24 24" fill="none" className="size-8 sm:size-10">
      <path d="M12 3c-1.5 0-3 1.5-3 3v12c0 1.5 1.5 3 3 3s3-1.5 3-3V6c0-1.5-1.5-3-3-3z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9h6M9 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function TechnologiesSection() {
  return (
    <section className="relative bg-bg px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]">
      {/* Tech grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(254,74,0,0.3) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(254,74,0,0.3) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "50px 50px",
        }}
      />
      <div className="mx-auto flex max-w-design flex-col gap-10 md:gap-16">
        <AnimateIn type="fade-up" className="flex flex-col items-center gap-6 text-center">
          <SectionTag label="MODERN FOUNDATIONS" />
          <div className="flex flex-col gap-3">
            <h2 className="bg-title-gradient bg-clip-text font-montserrat text-[clamp(2rem,8vw,4rem)] font-bold uppercase leading-[1.2] text-transparent sm:text-[clamp(2.5rem,4.4vw,4rem)]">
              Built on resilient technologies.
            </h2>
            <p className="font-space text-base leading-[1.45] text-white/60 sm:text-xl md:text-2xl md:leading-[1.2]">
              We believe collaboration drives success. That&apos;s why we partner with top industry
              leaders to bring you a best-in-class analytics platform.
            </p>
          </div>
        </AnimateIn>

        <motion.div
          className="grid grid-cols-2 border border-borderStrong sm:grid-cols-3 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {technologyLogos.map((logo) => (
            <motion.div
              className="group relative grid h-28 place-items-center border border-borderStrong bg-card/30 sm:h-32 lg:h-44"
              key={logo}
              variants={itemVariants}
              whileHover={{
                y: -4,
                backgroundColor: "rgba(20,10,5,0.8)",
                transition: { duration: 0.3 },
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-b from-accent/0 via-accent/5 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <motion.span
                className="relative z-10 flex flex-col items-center gap-2 text-textSoft transition-colors duration-300 group-hover:text-white"
                animate={{ filter: ["drop-shadow(0 0 0px rgba(254,74,0,0))", "drop-shadow(0 0 8px rgba(254,74,0,0.4))", "drop-shadow(0 0 0px rgba(254,74,0,0))"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: technologyLogos.indexOf(logo) * 0.2 }}
              >
                {techIcons[logo] || (
                  <span className="font-space text-lg font-bold sm:text-xl lg:text-2xl">{logo}</span>
                )}
                <span className="text-[10px] font-semibold uppercase tracking-widest text-textMuted sm:text-xs">
                  {logo}
                </span>
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
