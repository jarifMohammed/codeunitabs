"use client";

import { useState } from "react";
import { MessageSquare, Plus, X, Zap } from "lucide-react";

import { faqs } from "@/constants/content";
import { ActionButton } from "@/components/ui/action-button";
import { AnimateIn } from "@/components/ui/animate-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/utils/cn";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-bg px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]">
      <div className="mx-auto max-w-design">
        <AnimateIn type="fade-up" className="mb-10 md:mb-16">
          <SectionHeading
            icon={Zap}
            tag="FAQ"
            title="Fequently asked questions"
          />
        </AnimateIn>
        <AnimateIn type="fade-up" delay={120} className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] 2xl:grid-cols-[minmax(0,1071px)_1fr]">
          <div className="flex flex-col gap-[15px]">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const Icon = isOpen ? X : Plus;

              return (
                <article
                  className={cn(
                    "rounded-[10px] border border-borderStrong bg-sectionCard p-5 sm:p-6",
                    "transition-all duration-400 ease-out",
                    isOpen
                      ? "min-h-36 sm:min-h-40 border-accent/30 shadow-[0_4px_20px_rgba(254,74,0,0.06)]"
                      : "min-h-[68px] sm:min-h-[74px] hover:border-white/20",
                  )}
                  key={faq.question}
                >
                  <button
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 text-left group"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className={cn(
                      "font-montserrat text-lg font-semibold capitalize leading-[1.2] transition-colors duration-300 md:text-2xl",
                      isOpen ? "text-white" : "text-white group-hover:text-white/90",
                    )}>
                      {faq.question}
                    </span>
                    <span className={cn(
                      "grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300",
                      isOpen
                        ? "border-accent/40 bg-accent/10 text-accent rotate-0"
                        : "border-white/10 text-white group-hover:border-white/20 group-hover:bg-white/[0.03]",
                    )}>
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                  </button>
                  {/* Smooth height transition via max-height */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500 ease-out",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    {faq.answer ? (
                      <p className="mt-[23px] font-manrope text-base font-medium leading-[1.2] tracking-[-0.32px] text-textSoft">
                        {faq.answer}
                      </p>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>

          <aside
            className={cn(
              "relative flex min-h-[390px] flex-col items-center justify-between overflow-hidden rounded-[10px] border border-borderStrong bg-sectionCard px-5 pb-6 pt-12 text-center sm:min-h-[512px] sm:px-8 sm:pb-8 sm:pt-[72px]",
              "transition-all duration-700 ease-out",
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(254,74,0,0.16),transparent_42%)]" />
            <MessageSquare aria-hidden="true" className="relative size-[67px] fill-white text-white animate-float-y" />
            <div className="relative flex w-full flex-col items-center gap-10 sm:gap-16">
              <div className="flex max-w-[316px] flex-col items-center gap-3">
                <h3 className="font-montserrat text-[22px] font-bold leading-[1.2] tracking-[-1px] text-white">
                  Do you have more questions?
                </h3>
                <p className="font-inter text-base leading-[1.2] text-textSoft">
                  End-to-end payments and financial management in a single solution. Meet the right
                  platform to help realize.
                </p>
              </div>
              <ActionButton actionName="directMail" className="w-full" size="lg">
                Shoot a Direct Mail
              </ActionButton>
            </div>
          </aside>
        </AnimateIn>
      </div>
    </section>
  );
}
