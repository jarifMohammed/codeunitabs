"use client";

import Image from "next/image";
import { Heart, Target } from "lucide-react";
import { motion } from "framer-motion";

import { imageAssets } from "@/constants/assets";
import { SectionTag } from "@/components/ui/section-tag";
import { AnimateIn } from "@/components/ui/animate-in";
import { cn } from "@/utils/cn";

const valueCards = [
  {
    title: "Our Mission",
    description: "Make great design accessible to every startup.",
    icon: Target,
  },
  {
    title: "Our Values",
    description: "Craft, honesty, speed, and lifelong partnerships.",
    icon: Heart,
  },
];

export function TeamSection() {
  return (
    <section className="border-y border-borderStrong bg-bg px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]">
      <div className="mx-auto grid max-w-design gap-10 md:gap-[72px] xl:grid-cols-[1fr_1.1fr]">
        <AnimateIn type="slide-left" className="flex min-h-0 flex-col justify-center gap-6 xl:min-h-[463px]">
          <SectionTag label="Who we are" />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="bg-title-gradient bg-clip-text font-montserrat text-[clamp(2rem,8vw,2.8125rem)] font-bold uppercase leading-[1.2] text-transparent sm:text-[clamp(2.4rem,4vw,2.8125rem)]">
                The Team Behind The Work
              </h2>
              <p className="font-inter text-base leading-[1.45] text-textMuted sm:text-lg sm:leading-[1.2]">
                Founded in 2019, Nova is a remote-first product studio of 14 senior designers and
                engineers. We partner with founders to turn bold ideas into shipped products that
                customers actually love. Founded in 2019, Nova is a remote-first product studio of
                14 senior designers and engineers.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {valueCards.map(({ title, description, icon: Icon }) => (
                <motion.article
                  className={cn(
                    "relative overflow-hidden rounded-xl border border-white/10 bg-sectionCard p-[17px]",
                    "hover:border-accent/30 hover:shadow-[0_8px_24px_rgba(254,74,0,0.08)]",
                  )}
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, borderColor: "rgba(254,74,0,0.3)", transition: { duration: 0.3 } }}
                >
                  <div className="absolute right-[-101px] top-[-100px] size-[200px] rounded-full bg-accent/20 blur-[15px]" />
                  <Icon aria-hidden="true" className="mb-3 size-4 text-accent" />
                  <h3 className="relative font-montserrat text-base font-bold leading-[1.2] text-[#fafafa]">
                    {title}
                  </h3>
                  <p className="relative mt-2 font-inter text-base leading-[1.2] text-textMuted">
                    {description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn type="slide-right" delay={120} className="relative min-h-[340px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[420px] xl:min-h-[463px]">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              alt="Darken remote team collaborating around laptops"
              className="object-cover"
              fill
              sizes="(min-width: 1280px) 724px, 100vw"
              src={imageAssets.teamCollaboration}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/0 to-transparent" />
          <motion.div
            className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-4 sm:inset-x-6 sm:bottom-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="font-inter text-xs leading-4 text-textMuted">Based in</p>
              <p className="font-inter text-sm leading-5 text-[#fafafa]">Dhaka · Bangladesh · Remote</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#18181b]/80 px-[13px] py-[7px] backdrop-blur">
              <motion.span
                className="size-2 rounded-full bg-[#00bc7d]"
                animate={{ opacity: [1, 0.4, 1], scale: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="font-inter text-xs leading-4 text-[#fafafa]">Available for projects</span>
            </div>
          </motion.div>
        </AnimateIn>
      </div>
    </section>
  );
}
