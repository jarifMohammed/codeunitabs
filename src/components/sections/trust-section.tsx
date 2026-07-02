"use client";

import { useInView } from "@/hooks/use-in-view";
import { brandLogos, stats } from "@/constants/content";
import { cn } from "@/utils/cn";

export function TrustSection() {
  const { ref: logosRef, inView: logosInView } = useInView<HTMLDivElement>();
  const { ref: statsRef, inView: statsInView } = useInView<HTMLDivElement>();

  return (
    <section className="bg-bg">
      <div className="flex flex-col gap-8 px-4 py-14 sm:px-8 sm:py-16 lg:px-12 xl:px-16 2xl:px-[120px] min-[1800px]:px-[200px]">
        <h2 className="bg-title-gradient bg-clip-text text-center font-space text-xl font-bold capitalize leading-[1.2] text-transparent sm:text-2xl">
          Trusted By Modern Businesses Worldwide
        </h2>
        <div
          ref={logosRef}
          className="mx-auto flex w-full max-w-design flex-wrap items-center justify-center gap-x-8 gap-y-5 opacity-50 sm:gap-x-14 xl:justify-between"
        >
          {brandLogos.map(({ label, icon: Icon }, index) => (
            <div
              className={cn(
                "flex items-center gap-2 text-[#fafafa] transition-all duration-700 ease-out",
                logosInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
              key={`${label}-${index}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
              <span className="font-inter text-base leading-7 sm:text-xl">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div ref={statsRef} className="border-y border-borderStrong px-4 py-10 sm:px-8 md:py-[49px] lg:px-12 xl:px-16 2xl:px-[120px] min-[1800px]:px-[200px]">
        <dl
          className="mx-auto grid max-w-design grid-cols-1 gap-y-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-y-0"
        >
          {stats.map((stat, index) => (
            <div
              className={cn(
                "flex flex-col items-center justify-center gap-4 text-center xl:border-l xl:border-white/10 xl:pl-[49px] first:xl:border-l-0 first:xl:pl-0",
                "transition-all duration-700 ease-out",
                statsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
              key={stat.label}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <dt className="order-2 font-inter text-base font-semibold uppercase leading-[1.2] tracking-[1px] text-textMuted">
                {stat.label}
              </dt>
              <dd className="order-1 font-space text-5xl font-bold leading-[1.2] tracking-[-1px] text-[#fafafa] sm:text-6xl sm:tracking-[-1.5px]">
                {stat.value}
                {stat.suffix ? <span className="text-accent">{stat.suffix}</span> : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
