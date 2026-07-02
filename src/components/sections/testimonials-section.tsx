"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/ui/animate-in";
import { Zap } from "lucide-react";

import { imageAssets } from "@/constants/assets";
import { testimonials } from "@/constants/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/utils/cn";

export function TestimonialsSection() {
  // Duplicate for infinite scroll illusion
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-bg py-20 md:py-24 xl:py-[120px]" id="insights">
      <AnimateIn type="fade-up" className="mb-10 md:mb-16">
        <SectionHeading
          description="Real experiences from businesses and startups we've helped through modern digital solutions."
          icon={Zap}
          tag="TESTIMONIALS"
          title="What Our Clients Say"
        />
      </AnimateIn>

      {/* Marquee container */}
      <AnimateIn type="fade-up" delay={120} className="relative">
        {/* Left/right edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

        <div
          className="flex w-max gap-5 sm:gap-8 animate-marquee hover:[animation-play-state:paused]"
          aria-hidden="false"
        >
          {allTestimonials.map((testimonial, index) => (
            <article
              className={cn(
                "relative flex w-[474.4px] max-w-[calc(100vw-2rem)] flex-col gap-5 overflow-hidden rounded-xl border border-white/[0.06] bg-sectionCard/40 p-5 backdrop-blur-xl sm:gap-6 sm:p-[33px]",
                "transition-all duration-300 ease-out",
                "hover:border-white/[0.12] hover:bg-sectionCard/60 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
              )}
              key={`${testimonial.name}-${index}`}
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
                <Image
                  alt={`${testimonial.name} portrait`}
                  className="size-12 rounded-full border border-white/[0.06] object-cover transition-transform duration-300 hover:scale-110"
                  height={48}
                  src={imageAssets.clientAvatar}
                  width={48}
                />
                <div>
                  <h3 className="font-montserrat text-lg font-semibold leading-[1.2] text-white">
                    {testimonial.name}
                  </h3>
                  <p className="font-inter text-base leading-[1.2] text-textSoft">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative h-44 overflow-hidden rounded-xl border border-white/[0.03] sm:h-[216px]">
                  <Image
                    alt={`${testimonial.projectLabel} project preview`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    fill
                    sizes="408px"
                    src={imageAssets.projectDashboard}
                  />
                  <span className="absolute bottom-3.5 left-4 rounded-sm bg-sectionCard px-2 py-1 font-montserrat text-xs font-semibold uppercase leading-[1.2] text-white">
                    {testimonial.projectLabel}
                  </span>
                </div>
                <p className="font-inter text-sm leading-[1.2] tracking-[0.3px] text-textSoft">
                  {testimonial.projectName}
                </p>
              </div>
            </article>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
