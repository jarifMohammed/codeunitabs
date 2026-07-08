"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/animate-in";

import { imageAssets } from "@/constants/assets";
import { testimonials } from "@/constants/content";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-bg py-20 md:py-24 xl:py-[120px]" id="insights">
      <AnimateIn type="fade-up" className="mb-10 md:mb-16">
        <SectionHeading
          description="Real experiences from businesses and startups we've helped through modern digital solutions."
          tag="TESTIMONIALS"
          title="What Our Clients Say"
        />
      </AnimateIn>

      <AnimateIn type="fade-up" delay={120} className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

        <motion.div
          className="flex w-max gap-5 sm:gap-8"
          aria-hidden="false"
          animate={isPaused ? undefined : { x: ["0%", "-50%"] }}
          initial={{ x: "0%" }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {allTestimonials.map((testimonial, index) => (
            <motion.article
              className="relative flex w-[474.4px] max-w-[calc(100vw-2rem)] flex-col gap-5 overflow-hidden rounded-xl border border-white/[0.06] bg-sectionCard/40 p-5 backdrop-blur-xl sm:gap-6 sm:p-[33px]"
              key={`${testimonial.name}-${index}`}
              whileHover={{
                y: -4,
                borderColor: "rgba(255,255,255,0.12)",
                backgroundColor: "rgba(20,10,6,0.6)",
                transition: { duration: 0.3 },
              }}
            >
              <span
                aria-hidden="true"
                className="absolute right-[-9px] top-[-17px] font-inter text-8xl leading-[96px] text-white/[0.05]"
              >
                &ldquo;
              </span>
              <p className="relative font-space text-base leading-[1.35] text-white sm:text-xl sm:leading-[1.2]">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <Image
                    alt={`${testimonial.name} portrait`}
                    className="size-12 rounded-full border border-white/[0.06] object-cover"
                    height={48}
                    src={imageAssets.clientAvatar}
                    width={48}
                  />
                </motion.div>
                <div>
                  <h3 className="font-montserrat text-lg font-semibold leading-[1.2] text-white">
                    {testimonial.name}
                  </h3>
                  <p className="font-inter text-base leading-[1.2] text-textSoft">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative h-44 overflow-hidden rounded-xl border border-white/[0.03] sm:h-[216px]">
                  <motion.div
                    className="h-full w-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      alt={`${testimonial.projectLabel} project preview`}
                      className="h-full w-full object-cover"
                      fill
                      sizes="408px"
                      src={imageAssets.projectDashboard}
                    />
                  </motion.div>
                  <span className="absolute bottom-3.5 left-4 rounded-sm bg-sectionCard px-2 py-1 font-montserrat text-xs font-semibold uppercase leading-[1.2] text-white">
                    {testimonial.projectLabel}
                  </span>
                </div>
                <p className="font-inter text-sm leading-[1.2] tracking-[0.3px] text-textSoft">
                  {testimonial.projectName}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimateIn>
    </section>
  );
}
