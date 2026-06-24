import { Zap } from "lucide-react";

import { technologyLogos } from "@/constants/content";
import { SectionTag } from "@/components/ui/section-tag";

export function TechnologiesSection() {
  return (
    <section className="bg-bg px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]">
      <div className="mx-auto flex max-w-design flex-col gap-10 md:gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionTag icon={Zap} label="MODERN FOUNDATIONS" />
          <div className="flex flex-col gap-3">
            <h2 className="bg-title-gradient bg-clip-text font-montserrat text-[clamp(2rem,8vw,4rem)] font-bold uppercase leading-[1.2] text-transparent sm:text-[clamp(2.5rem,4.4vw,4rem)]">
              Built on resilient technologies.
            </h2>
            <p className="font-space text-base leading-[1.45] text-white/60 sm:text-xl md:text-2xl md:leading-[1.2]">
              We believe collaboration drives success. That&apos;s why we partner with top industry
              leaders to bring you a best-in-class analytics platform.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 border border-borderStrong sm:grid-cols-3 lg:grid-cols-5">
          {technologyLogos.map((logo) => (
            <div
              className="grid h-28 place-items-center border border-borderStrong bg-card/30 font-space text-lg font-bold text-textSoft sm:h-32 sm:text-xl lg:h-40 lg:text-2xl"
              key={logo}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
