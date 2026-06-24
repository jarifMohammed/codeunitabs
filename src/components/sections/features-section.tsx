import { Zap } from "lucide-react";

import { features, serviceTags, supportItems, workflowSteps } from "@/constants/content";
import type { FeatureCard } from "@/types/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/utils/cn";

function FeatureVisual({ variant }: Pick<FeatureCard, "variant">) {
  if (variant === "chart") {
    return (
      <div className="flex h-full flex-col gap-6">
        <div className="relative h-[150px] rounded-xl border border-white/[0.06] bg-black/40 p-[17px]">
          <div className="flex justify-between font-inter text-xs leading-4">
            <span className="text-textMuted">Conversions</span>
            <span className="text-accentDark">+148%</span>
          </div>
          <svg aria-hidden="true" className="mt-3 h-[88px] w-full" viewBox="0 0 816 88">
            <defs>
              <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#FE4A00" stopOpacity="0.6" />
                <stop offset="1" stopColor="#FE4A00" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 76 C80 62 80 52 160 42 C240 48 240 47 320 30 C410 34 430 32 520 20 C620 23 620 24 700 10 C760 6 790 4 816 0 L816 88 L0 88 Z"
              fill="url(#chart-fill)"
            />
            <path
              d="M0 76 C80 62 80 52 160 42 C240 48 240 47 320 30 C410 34 430 32 520 20 C620 23 620 24 700 10 C760 6 790 4 816 0"
              fill="none"
              stroke="#FE4A00"
              strokeLinecap="round"
              strokeWidth="4"
            />
          </svg>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Higher Conversion", "Better Engagement", "Measurable Growth"].map((label, index) => (
            <span
              className={cn(
                "rounded-full border px-[13px] pb-[5.5px] pt-[4.5px] font-inter text-xs leading-4",
                index === 0
                  ? "border-accent/30 bg-accent/10 text-accent"
                  : "border-white/10 bg-[#27272a]/50 text-[#fafafa]",
              )}
              key={label}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "orbit") {
    return (
      <div className="relative grid h-[200px] place-items-center">
        <div className="absolute size-[180px] rounded-full border border-dashed border-accent/20" />
        <div className="absolute size-[120px] rounded-full border border-dashed border-accent/15" />
        {serviceTags.map(({ label, icon: Icon }, index) => (
          <div
            className={cn(
              "absolute inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-[#140a05]/90 px-[11px] py-[5px] font-inter text-xs leading-4 text-[#fafafa]",
              [
                "left-[13%] top-[5%]",
                "right-[5%] top-[26%]",
                "bottom-[20%] right-[6%]",
                "bottom-[10%] left-[14%]",
                "left-[5%] top-[40%]",
              ][index],
            )}
            key={label}
          >
            <Icon aria-hidden="true" className="size-3 text-accent" />
            {label}
          </div>
        ))}
        <div className="grid size-14 place-items-center rounded-full bg-accent text-white shadow-glow">
          <Zap aria-hidden="true" className="size-6" />
        </div>
      </div>
    );
  }

  if (variant === "support") {
    return (
      <div className="flex flex-col gap-2">
        {supportItems.map((item) => (
          <div
            className="flex items-center gap-3 rounded-xl border border-accent/20 bg-black/50 p-[13px] backdrop-blur"
            key={item.title}
          >
            <div className="grid size-8 place-items-center rounded-lg bg-accent/15 text-accent">
              <Zap aria-hidden="true" className="size-4" />
            </div>
            <div className="flex-1">
              <p className="font-inter text-sm leading-[1.2] text-[#fafafa]">{item.title}</p>
              <p className="font-inter text-xs leading-[1.2] text-textMuted">{item.description}</p>
            </div>
            <span className="size-2 rounded-full bg-accent shadow-[0_0_8px_#fe4a00]" />
          </div>
        ))}
      </div>
    );
  }

  return (
      <div className="flex h-40 items-center justify-between gap-2 px-0 sm:px-2">
      {workflowSteps.map(({ label, icon: Icon }, index) => {
        const active = index < 2;
        return (
          <div className="contents" key={label}>
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "grid size-12 place-items-center rounded-full border",
                  active
                    ? "border-accent/40 bg-accent text-white shadow-[0_0_16px_rgba(254,74,0,0.4)]"
                    : "border-white/10 bg-white/[0.05] text-textMuted",
                )}
              >
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <span className={cn("text-center font-inter text-[11px] leading-4 sm:text-xs", active ? "text-white" : "text-textMuted")}>
                {label}
              </span>
            </div>
            {index < workflowSteps.length - 1 ? (
              <div
                className={cn(
                  "mx-2 h-0.5 flex-1",
                  index === 0
                    ? "bg-gradient-to-r from-accent to-accent/60 shadow-[0_0_8px_rgba(254,74,0,0.5)]"
                    : index === 1
                      ? "bg-gradient-to-r from-accent/60 to-accent/30"
                      : "bg-white/10",
                )}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function FeatureCard({ feature, className }: { feature: FeatureCard; className?: string }) {
  const Icon = feature.icon;

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-xl border border-accent/25 bg-card/60 p-5 shadow-card backdrop-blur-[10px] sm:p-[25px]",
        className,
      )}
    >
      <div className="absolute right-[-50px] top-[-50px] size-[200px] rounded-full bg-accent/20 blur-[15px]" />
      <div className="relative flex h-full flex-col gap-4">
        <header className="grid grid-cols-[460px] grid-rows-[36px_20px] gap-y-2 max-lg:grid-cols-1 max-lg:grid-rows-none">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-lg border border-accent/30 bg-accent/15 text-accent shadow-accent">
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
    </article>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-bg px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]" id="case-studies">
      <div className="mx-auto max-w-design">
        <SectionHeading
          className="mb-10 md:mb-16"
          description="Everything you need to launch a world-class product, from first sketch to scale."
          icon={Zap}
          tag="Why choose us"
          title="Built for teams that ship fast"
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 xl:flex-row">
            <FeatureCard className="min-h-[300px] sm:min-h-[330px] xl:basis-[58%] 2xl:basis-auto 2xl:w-[900px]" feature={features[0]} />
            <FeatureCard className="min-h-[300px] sm:min-h-[330px] xl:flex-1" feature={features[1]} />
          </div>
          <div className="flex flex-col gap-6 xl:flex-row">
            <FeatureCard className="min-h-[300px] sm:min-h-[329px] xl:basis-[38%] 2xl:basis-auto 2xl:w-[593px]" feature={features[2]} />
            <FeatureCard className="min-h-[300px] sm:min-h-[329px] xl:flex-1" feature={features[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
