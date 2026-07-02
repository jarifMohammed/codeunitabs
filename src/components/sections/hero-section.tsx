import Image from "next/image";
import { Zap } from "lucide-react";

import { imageAssets } from "@/constants/assets";
import { ActionButton } from "@/components/ui/action-button";
import { SectionTag } from "@/components/ui/section-tag";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[680px] overflow-hidden bg-bg px-4 pb-0 pt-[140px] sm:min-h-[760px] sm:px-8 sm:pt-[170px] lg:px-12 xl:min-h-[828px] xl:px-16 xl:pt-[189px] 2xl:px-[68px] min-[1800px]:px-0"
      id="about"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          {/* Tag: fade in down */}
          <div className="animate-fade-in-down" style={{ animationDelay: "0.1s" }}>
            <SectionTag icon={Zap} label="About us" />
          </div>
          <div className="flex flex-col items-center gap-3">
            {/* Heading: fade in up with delay */}
            <h1
              className="max-w-[1400px] font-montserrat text-[clamp(2.45rem,11vw,4.5rem)] font-bold capitalize leading-[1.2] text-white sm:text-[clamp(3rem,6vw,4.5rem)] animate-fade-in-up"
              style={{ animationDelay: "0.25s" }}
            >
              Empowering Your Business With{" "}
              <span className="text-accent">Data-Driven Insights</span>
            </h1>
            {/* Sub: fade in up with longer delay */}
            <p
              className="max-w-[1050px] font-space text-base font-semibold leading-[1.35] text-white/60 sm:text-lg md:text-xl md:leading-[1.2] animate-fade-in-up"
              style={{ animationDelay: "0.42s" }}
            >
              Founded by data experts, we create cutting-edge SaaS analytics platforms tailored for
              businesses of all sizes.
            </p>
          </div>
        </div>
        {/* Buttons: scale in with delay */}
        <div
          className="flex flex-wrap items-center justify-center gap-[9px] pt-0 animate-scale-in"
          style={{ animationDelay: "0.6s" }}
        >
          <ActionButton actionName="downloadApp">Download app</ActionButton>
          <ActionButton actionName="bookDemo" variant="secondary">
            Talk to sales
          </ActionButton>
        </div>
      </div>

      {/* Horizon image: float animation */}
      <div className="absolute inset-x-0 bottom-[-48px] h-[280px] sm:bottom-[-64px] sm:h-[360px] animate-float-y">
        <Image
          alt=""
          className="h-full w-full object-cover object-top"
          fill
          priority
          sizes="100vw"
          src={imageAssets.heroHorizon}
        />
        <div className="absolute inset-x-0 bottom-0 h-[170px] bg-gradient-to-b from-transparent to-bg sm:h-[206px]" />
      </div>
    </section>
  );
}
