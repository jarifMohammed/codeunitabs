"use client";

import { ActionButton } from "@/components/ui/action-button";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/utils/cn";

export function CtaSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      className="bg-title-gradient px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]"
      id="contact"
    >
      <div
        ref={ref}
        className={cn(
          "mx-auto flex max-w-[768px] flex-col items-center gap-9 text-center",
          "transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}
      >
        <div className="flex flex-col items-center gap-4">
          <h2
            className={cn(
              "font-montserrat text-[clamp(2rem,8vw,4rem)] font-extrabold leading-[1.2] tracking-[-0.6px] text-bg sm:text-[clamp(2.5rem,4.4vw,4rem)] sm:tracking-[-1.2px]",
              "transition-all duration-700 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
            style={{ transitionDelay: inView ? "80ms" : "0ms" }}
          >
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-accentDark to-accentSoft bg-clip-text text-transparent">
              Powerful Together
            </span>
          </h2>
          <p
            className={cn(
              "font-inter text-lg leading-7 text-bg",
              "transition-all duration-700 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: inView ? "200ms" : "0ms" }}
          >
            From idea to launch, we&apos;ll craft an experience your users will remember.
          </p>
        </div>
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90",
          )}
          style={{ transitionDelay: inView ? "340ms" : "0ms" }}
        >
          <ActionButton actionName="bookDemo" size="lg">
            Start a Project
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
