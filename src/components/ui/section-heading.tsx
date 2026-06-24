import type { IconComponent } from "@/types/content";

import { SectionTag } from "./section-tag";

type SectionHeadingProps = {
  tag: string;
  icon: IconComponent;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ tag, icon, title, description, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="flex flex-col items-center gap-6 text-center">
        <SectionTag icon={icon} label={tag} />
        <div className="flex flex-col items-center gap-3">
          <h2 className="max-w-[1166px] bg-title-gradient bg-clip-text font-montserrat text-[clamp(2rem,8vw,4rem)] font-bold uppercase leading-[1.2] text-transparent sm:text-[clamp(2.4rem,4.4vw,4rem)]">
            {title}
          </h2>
          {description ? (
            <p className="max-w-[804px] font-inter text-base leading-7 text-textSoft sm:text-lg md:text-2xl md:leading-[1.2]">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
