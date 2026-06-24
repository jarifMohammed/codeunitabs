"use client";

import { useState } from "react";
import { MessageSquare, Plus, X, Zap } from "lucide-react";

import { faqs } from "@/constants/content";
import { ActionButton } from "@/components/ui/action-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/utils/cn";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-bg px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]">
      <div className="mx-auto max-w-design">
        <SectionHeading
          className="mb-10 md:mb-16"
          icon={Zap}
          tag="FAQ"
          title="Fequently asked questions"
        />
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] 2xl:grid-cols-[minmax(0,1071px)_1fr]">
          <div className="flex flex-col gap-[15px]">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const Icon = isOpen ? X : Plus;

              return (
                <article
                  className={cn(
                    "rounded-[10px] border border-borderStrong bg-sectionCard p-5 sm:p-6",
                    isOpen ? "min-h-36 sm:min-h-40" : "min-h-[68px] sm:min-h-[74px]",
                  )}
                  key={faq.question}
                >
                  <button
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className="font-montserrat text-lg font-semibold capitalize leading-[1.2] text-white md:text-2xl">
                      {faq.question}
                    </span>
                    <Icon aria-hidden="true" className="size-8 shrink-0 text-white" />
                  </button>
                  {isOpen && faq.answer ? (
                    <p className="mt-[23px] font-manrope text-base font-medium leading-[1.2] tracking-[-0.32px] text-textSoft">
                      {faq.answer}
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>
          <aside className="relative flex min-h-[390px] flex-col items-center justify-between overflow-hidden rounded-[10px] border border-borderStrong bg-sectionCard px-5 pb-6 pt-12 text-center sm:min-h-[512px] sm:px-8 sm:pb-8 sm:pt-[72px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(254,74,0,0.16),transparent_42%)]" />
            <MessageSquare aria-hidden="true" className="relative size-[67px] fill-white text-white" />
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
        </div>
      </div>
    </section>
  );
}
