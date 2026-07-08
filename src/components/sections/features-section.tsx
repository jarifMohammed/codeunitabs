"use client";

import { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";

import { features, serviceTags, supportItems, workflowSteps } from "@/constants/content";
import type { FeatureCard } from "@/types/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/utils/cn";

function WorkflowVisual() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let start: number | null = null;
    const duration = 6000;

    function animate(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const currentProgress = ((elapsed % duration) / duration) * (workflowSteps.length - 0.5);
      setProgress(currentProgress);
      animationFrame = requestAnimationFrame(animate);
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="flex h-40 items-center justify-between gap-2 px-0 sm:px-2">
      {workflowSteps.map(({ label, icon: Icon }, index) => {
        const active = progress >= index;
        const lineProgress = Math.max(0, Math.min(1, progress - index));
        return (
          <div className="contents" key={label}>
            <motion.div
              className="flex flex-col items-center gap-2 group"
              animate={{ scale: active ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={cn(
                  "grid size-12 place-items-center rounded-full border transition-all duration-300",
                  active
                    ? "border-accent/40 bg-accent text-white shadow-[0_0_16px_rgba(254,74,0,0.4)]"
                    : "border-white/10 bg-white/[0.05] text-textMuted",
                )}
              >
                <Icon aria-hidden="true" className="size-5 transition-all duration-300" />
              </div>
              <span className={cn("text-center font-inter text-[11px] leading-4 sm:text-xs transition-colors duration-300", active ? "text-white" : "text-textMuted")}>
                {label}
              </span>
            </motion.div>
            {index < workflowSteps.length - 1 ? (
              <div className="relative mx-2 h-0.5 flex-1 bg-white/10 overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-accent/30 shadow-[0_0_8px_rgba(254,74,0,0.5)]"
                  style={{ transform: `translateX(${-100 + lineProgress * 100}%)` }}
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function ChartVisual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let start: number | null = null;
    const duration = 12000;

    function animate(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const cycle = Math.floor(elapsed / duration) % 3;
      setActiveIndex(cycle);

      const currentCycleElapsed = elapsed % duration;
      const growDuration = duration * 0.80;
      const currentProgress = Math.min(currentCycleElapsed / growDuration, 1);
      setProgress(currentProgress);

      animationFrame = requestAnimationFrame(animate);
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const stats = [
    { label: "Higher Conversion", metric: "Conversions", value: "+148%" },
    { label: "Better Engagement", metric: "Engagement", value: "+210%" },
    { label: "Measurable Growth", metric: "Growth", value: "+340%" },
  ];

  const graphPaths = [
    "M0 76 C80 62 80 52 160 42 C240 48 240 47 320 30 C410 34 430 32 520 20 C620 23 620 24 700 10 C760 6 790 4 816 0",
    "M0 60 C80 80 80 40 160 50 C240 60 240 20 320 30 C410 40 430 15 520 25 C620 35 620 10 700 15 C760 20 790 5 816 10",
    "M0 80 C80 80 80 75 160 70 C240 65 240 55 320 50 C410 45 430 30 520 25 C620 20 620 15 700 5 C760 0 790 0 816 0",
  ];

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="relative h-[150px] rounded-xl border border-white/[0.06] bg-black/40 p-[17px]">
        <div className="flex justify-between font-inter text-xs leading-4">
          <motion.span
            className="text-textMuted"
            key={activeIndex}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {stats[activeIndex].metric}
          </motion.span>
          <motion.span
            className="text-accentDark"
            key={`value-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {stats[activeIndex].value}
          </motion.span>
        </div>
        <svg aria-hidden="true" className="mt-3 h-[88px] w-full" viewBox="0 0 816 88">
          <defs>
            <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#FE4A00" stopOpacity="0.6" />
              <stop offset="1" stopColor="#FE4A00" stopOpacity="0" />
            </linearGradient>
            <clipPath id="grow-clip">
              <rect x="0" y="0" height="100%" width={`${progress * 100}%`} />
            </clipPath>
          </defs>
          <g clipPath="url(#grow-clip)">
            <path
              d={`${graphPaths[activeIndex]} L816 88 L0 88 Z`}
              fill="url(#chart-fill)"
            />
            <path
              d={graphPaths[activeIndex]}
              fill="none"
              stroke="#FE4A00"
              strokeLinecap="round"
              strokeWidth="4"
            />
          </g>
        </svg>
      </div>
      <div className="flex flex-wrap gap-2">
        {stats.map(({ label }, index) => {
          const active = index === activeIndex;
          return (
            <motion.span
              className={cn(
                "rounded-full border px-[13px] pb-[5.5px] pt-[4.5px] font-inter text-xs leading-4",
                "cursor-default",
                active
                  ? "border-accent/40 bg-accent/20 text-accent shadow-[0_0_12px_rgba(254,74,0,0.25)]"
                  : "border-white/10 bg-[#27272a]/50 text-[#fafafa] hover:border-white/20",
              )}
              key={label}
              animate={active ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {label}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}

function OrbitVisual() {
  const positions = [
    "left-[13%] top-[8%]",
    "right-[4%] top-[22%]",
    "bottom-[18%] right-[8%]",
    "bottom-[8%] left-[12%]",
    "left-[4%] top-[44%]",
  ];

  return (
    <div className="relative h-[200px] w-full overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 size-[174px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 size-[116px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {serviceTags.map(({ label, icon: Icon }, index) => (
        <motion.div
          key={label}
          className={cn(
            "absolute inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-[#140a05]/95 px-[11px] py-[5px] font-inter text-xs leading-4 text-[#fafafa] shadow-[0_2px_12px_rgba(0,0,0,0.6)] cursor-default",
            positions[index],
          )}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ borderColor: "rgba(254,74,0,0.6)", backgroundColor: "rgba(254,74,0,0.1)", y: -2 }}
        >
          <Icon aria-hidden="true" className="size-3 text-accent" />
          {label}
        </motion.div>
      ))}
    </div>
  );
}

function FeatureVisual({ variant }: Pick<FeatureCard, "variant">) {
  if (variant === "chart") {
    return <ChartVisual />;
  }

  if (variant === "orbit") {
    return <OrbitVisual />;
  }

  if (variant === "support") {
    return (
      <div className="flex flex-col gap-2">
        {supportItems.map((item, i) => {
          const Icon = item.icon || Zap;
          return (
            <motion.div
              className="flex items-center gap-3 rounded-xl border border-accent/20 bg-black/50 p-[13px] backdrop-blur transition-all duration-300 hover:border-accent/40 hover:bg-black/70"
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <div className="grid size-8 place-items-center rounded-lg bg-accent/15 text-accent transition-all duration-300 hover:bg-accent/25">
                <Icon aria-hidden="true" className="size-4" />
              </div>
              <div className="flex-1">
                <p className="font-inter text-sm leading-[1.2] text-[#fafafa]">{item.title}</p>
                <p className="font-inter text-xs leading-[1.2] text-textMuted">{item.description}</p>
              </div>
              <motion.span
                className="size-2 rounded-full bg-accent shadow-[0_0_8px_#fe4a00]"
                animate={{ opacity: [1, 0.4, 1], scale: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              />
            </motion.div>
          );
        })}
      </div>
    );
  }

  return <WorkflowVisual />;
}

function AnimatedFeatureCard({ feature, className, delay = 0 }: { feature: FeatureCard; className?: string; delay?: number }) {
  const Icon = feature.icon;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-xl border border-accent/25 bg-card/60 p-5 shadow-card backdrop-blur-[10px] sm:p-[25px]",
        "hover:border-accent/50 hover:shadow-[0_8px_40px_rgba(254,74,0,0.12)]",
        className,
      )}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      <div className="absolute right-[-50px] top-[-50px] size-[200px] rounded-full bg-accent/20 blur-[15px] transition-all duration-500 group-hover:bg-accent/30" />
      <div className="relative flex h-full flex-col gap-4">
        <header className="grid grid-cols-[460px] grid-rows-[36px_20px] gap-y-2 max-lg:grid-cols-1 max-lg:grid-rows-none">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-lg border border-accent/30 bg-accent/15 text-accent shadow-accent transition-all duration-300 hover:bg-accent/25 hover:scale-110">
              <Icon aria-hidden="true" className="size-4" />
            </div>
            <h3 className="font-inter text-lg leading-7 text-[#fafafa] sm:text-xl">{feature.title}</h3>
          </div>
          <p className="font-inter text-sm leading-5 text-textMuted">{feature.description}</p>
        </header>
        <div className="relative flex-1">
          <FeatureVisual variant={feature.variant} />
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-bg px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]" id="case-studies">
      <div className="mx-auto max-w-design">
        <motion.div
          ref={ref}
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            description="Everything you need to launch a world-class product, from first sketch to scale."
            tag="Why choose us"
            title="Built for teams that ship fast"
          />
        </motion.div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 xl:flex-row">
            <AnimatedFeatureCard className="min-h-[300px] sm:min-h-[330px] xl:basis-[58%] 2xl:basis-auto 2xl:w-[900px]" delay={0} feature={features[0]} />
            <AnimatedFeatureCard className="min-h-[300px] sm:min-h-[330px] xl:flex-1" delay={120} feature={features[1]} />
          </div>
          <div className="flex flex-col gap-6 xl:flex-row">
            <AnimatedFeatureCard className="min-h-[300px] sm:min-h-[329px] xl:basis-[38%] 2xl:basis-auto 2xl:w-[593px]" delay={60} feature={features[2]} />
            <AnimatedFeatureCard className="min-h-[300px] sm:min-h-[329px] xl:flex-1" delay={180} feature={features[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
