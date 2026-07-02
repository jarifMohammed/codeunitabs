"use client";

import Image from "next/image";
import { useState } from "react";
import { Zap } from "lucide-react";

import { imageAssets } from "@/constants/assets";
import { ActionButton } from "@/components/ui/action-button";
import { SectionTag } from "@/components/ui/section-tag";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/utils/cn";

const capabilityPanels = [
  {
    label: "01 Branding",
    title: "Branding",
    description:
      "Crafting strong, memorable brand identities that connect with your audience and build long-term trust.",
    image: imageAssets.capabilitiesBranding,
    tags: ["Brand Identity", "Logo Design", "Brand Guidelines", "Social Media Branding"],
    imagePosition: "center",
  },
  {
    label: "02 UI/UX DESIGN",
    title: "UI/UX DESIGN",
    description:
      "Designing modern, user-friendly, and engaging digital experiences focused on usability and conversion.",
    image: imageAssets.capabilityUiux,
    tags: ["Website UI Design", "Mobile App UI Design", "Wireframing", "Prototyping"],
    imagePosition: "34% center",
  },
  {
    label: "03 Web Development",
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable websites tailored to your business goals and user experience.",
    image: imageAssets.capabilityWebDevelopment,
    tags: ["Landing Page", "Corporate Website", "E-commerce Website", "Custom Web Application"],
    imagePosition: "34% center",
  },
  {
    label: "04 Software Solutions",
    title: "Software Solutions",
    description:
      "Developing smart and scalable software systems to simplify operations and improve business efficiency.",
    image: imageAssets.capabilitySoftware,
    tags: ["ERP System", "CRM Software", "POS System", "Inventory Management"],
    imagePosition: "center",
  },
  {
    label: "05 Mobile App Development",
    title: "Mobile App Development",
    description:
      "Creating high-performance mobile applications with seamless user experiences across all devices.",
    image: imageAssets.capabilityMobile,
    tags: ["Android App", "iOS App", "Cross Platform App", "Progressive Web App (PWA)"],
    imagePosition: "center",
  },
  {
    label: "06 Maintenance & Support",
    title: "Maintenance & Support",
    description:
      "Providing reliable updates, security, and technical support to keep your systems running smoothly.",
    image: imageAssets.capabilityMaintenance,
    tags: ["Website Maintenance", "Bug Fixing", "Security Updates", "Technical Support"],
    imagePosition: "center",
  },
  {
    label: "07 Digital Marketing",
    title: "Digital Marketing",
    description:
      "Helping brands grow online through strategic marketing, audience targeting, and performance-driven campaigns.",
    image: imageAssets.capabilityMarketing,
    tags: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Strategy",
      "Performance Marketing",
    ],
    imagePosition: "center",
  },
];

export function CapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentKey, setContentKey] = useState(0);
  const activePanel = capabilityPanels[activeIndex];

  const { ref: headingRef, inView: headingInView } = useInView<HTMLDivElement>();
  const { ref: panelRef, inView: panelInView } = useInView<HTMLDivElement>();

  function handleSelect(index: number) {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setContentKey((k) => k + 1);
  }

  return (
    <section className="bg-bg px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]">
      <div className="mx-auto flex max-w-design flex-col gap-10 md:gap-16">
        <div
          ref={headingRef}
          className={cn(
            "flex flex-col gap-6",
            "transition-all duration-700 ease-out",
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <SectionTag icon={Zap} label="CAPABILITIES" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-[1160px] bg-title-gradient bg-clip-text font-montserrat text-[clamp(2rem,8vw,4rem)] font-bold uppercase leading-[1.2] text-transparent sm:text-[clamp(2.6rem,4.4vw,4rem)]">
              Crafting Powerful Solutions
            </h2>
            <ActionButton actionName="bookDemo">View More</ActionButton>
          </div>
        </div>

        <div
          ref={panelRef}
          className={cn(
            "grid overflow-hidden border border-white/[0.05] bg-card/60 xl:grid-cols-[500px_1fr]",
            "transition-all duration-700 ease-out",
            panelInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
          style={{ transitionDelay: panelInView ? "100ms" : "0ms" }}
        >
          <aside className="bg-[#050505] px-5 py-6 sm:px-8 sm:py-8 xl:pb-[83px]">
            <nav aria-label="Capabilities" className="flex flex-col gap-3 sm:gap-4">
              {capabilityPanels.map((item, index) => {
                const active = index === activeIndex;

                return (
                  <button
                    aria-pressed={active}
                    className={cn(
                      "group relative flex w-full items-center overflow-hidden border-b pb-[9px] pt-2 text-left font-space text-lg leading-[1.2] transition duration-500 sm:text-xl lg:text-2xl",
                      active
                        ? "border-accent font-bold text-accent"
                        : "border-white/[0.05] text-[#f5f5f5] hover:border-accent/40 hover:text-white",
                    )}
                    key={item.label}
                    onClick={() => handleSelect(index)}
                    onFocus={() => handleSelect(index)}
                    onMouseEnter={() => handleSelect(index)}
                    type="button"
                  >
                    <span
                      className={cn(
                        "absolute inset-y-2 left-0 w-1 rounded-full bg-accent transition duration-500",
                        active ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0",
                      )}
                    />
                    <span
                      className={cn(
                        "relative transition duration-500",
                        active ? "translate-x-4" : "group-hover:translate-x-2",
                      )}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          <article className="group relative flex min-h-[420px] items-end overflow-hidden sm:min-h-[500px] xl:min-h-[530px]">
            {capabilityPanels.map((panel, index) => (
              <Image
                alt={`${panel.title} capability preview`}
                className={cn(
                  "object-cover transition duration-700 ease-out",
                  index === activeIndex ? "scale-100 opacity-80" : "scale-105 opacity-0",
                )}
                fill
                key={panel.label}
                sizes="(min-width: 1280px) 1020px, 100vw"
                src={panel.image}
                style={{ objectPosition: panel.imagePosition }}
              />
            ))}
            <div className="absolute inset-0 bg-[#0b0b0b]/75 transition duration-700 group-hover:bg-[#0b0b0b]/70" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-60" />
            <div
              className="absolute bottom-0 left-0 h-1 bg-accent transition-all duration-700"
              style={{ width: `${((activeIndex + 1) / capabilityPanels.length) * 100}%` }}
            />

            <div
              key={contentKey}
              className="relative flex w-full flex-col gap-5 bg-gradient-to-b from-white/0 to-white/[0.01] p-5 backdrop-blur-[2px] sm:p-8 md:gap-[23px] md:p-12 animate-fade-in-up"
              style={{ animationDuration: "0.45s" }}
            >
              <div className="flex items-center justify-between gap-4 sm:gap-6">
                <h3 className="font-montserrat text-[clamp(2rem,9vw,3rem)] font-semibold leading-[1.2] text-[#f5f5f5] transition duration-500 sm:text-[clamp(2.4rem,4.2vw,3rem)]">
                  {activePanel.title}
                </h3>
                <span className="hidden font-montserrat text-7xl font-bold leading-none text-white/[0.06] md:block">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="max-w-[850px] font-inter text-base leading-[1.35] text-[#f5f5f5]/60 transition duration-500 sm:text-xl md:text-2xl md:leading-[1.25]">
                {activePanel.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2 sm:gap-4 md:pt-[17px]">
                {activePanel.tags.map((tag, tagIndex) => (
                  <span
                    className="translate-y-0 border border-white/10 bg-title-gradient px-3 py-2 font-montserrat text-xs font-semibold capitalize leading-[1.2] tracking-[1px] text-bg shadow-[0_10px_35px_rgba(0,0,0,0.18)] transition-all duration-500 hover:scale-105 sm:px-[17px] sm:py-[9px] sm:text-sm md:text-base"
                    key={tag}
                    style={{
                      transitionDelay: `${tagIndex * 45}ms`,
                      animationDelay: `${tagIndex * 50 + 100}ms`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
