"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

import { AnimateIn } from "@/components/ui/animate-in";
import { brandLogos, stats } from "@/constants/content";
import { cn } from "@/utils/cn";

function AnimatedCounter({ value, suffix }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const numericValue = parseFloat(value);
  const isDecimal = value.includes(".");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    isDecimal ? latest.toFixed(2) : Math.round(latest).toString(),
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, count, numericValue]);

  return (
    <span className="order-1 font-space text-5xl font-bold leading-[1.2] tracking-[-1px] text-[#fafafa] sm:text-6xl sm:tracking-[-1.5px]">
      <motion.span ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }}>
        <motion.span>{rounded}</motion.span>
      </motion.span>
      {suffix ? <span className="text-accent">{suffix}</span> : null}
    </span>
  );
}

export function TrustSection() {
  return (
    <section className="bg-bg">
      <div className="flex flex-col gap-8 px-4 py-14 sm:px-8 sm:py-16 lg:px-12 xl:px-16 2xl:px-[120px] min-[1800px]:px-[200px]">
        <AnimateIn type="fade-up" className="w-full">
          <h2 className="bg-title-gradient bg-clip-text text-center font-space text-xl font-bold capitalize leading-[1.2] text-transparent sm:text-2xl">
            Trusted By Modern Businesses Worldwide
          </h2>
        </AnimateIn>
        <AnimateIn type="fade-up" delay={120} className="mx-auto flex w-full max-w-design flex-wrap items-center justify-center gap-x-8 gap-y-5 opacity-50 sm:gap-x-14 xl:justify-between">
          {brandLogos.map(({ label, icon: Icon }, index) => (
            <motion.div
              className={cn(
                "flex items-center gap-2 text-[#fafafa] transition-all duration-700 ease-out",
                "opacity-100 translate-y-0",
              )}
              key={`${label}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, opacity: 0.8 }}
            >
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
              <span className="font-inter text-base leading-7 sm:text-xl">{label}</span>
            </motion.div>
          ))}
        </AnimateIn>
      </div>

      <AnimateIn type="fade-up" delay={200} className="border-y border-borderStrong px-4 py-10 sm:px-8 md:py-[49px] lg:px-12 xl:px-16 2xl:px-[120px] min-[1800px]:px-[200px]">
        <dl
          className="mx-auto grid max-w-design grid-cols-1 gap-y-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-y-0"
        >
          {stats.map((stat, index) => (
            <motion.div
              className={cn(
                "flex flex-col items-center justify-center gap-4 text-center xl:border-l xl:border-white/10 xl:pl-[49px] first:xl:border-l-0 first:xl:pl-0",
              )}
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <dt className="order-2 font-inter text-base font-semibold uppercase leading-[1.2] tracking-[1px] text-textMuted">
                {stat.label}
              </dt>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </motion.div>
          ))}
        </dl>
      </AnimateIn>
    </section>
  );
}
