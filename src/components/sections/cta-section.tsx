import { ActionButton } from "@/components/ui/action-button";

export function CtaSection() {
  return (
    <section className="bg-title-gradient px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]" id="contact">
      <div className="mx-auto flex max-w-[768px] flex-col items-center gap-9 text-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-montserrat text-[clamp(2rem,8vw,4rem)] font-extrabold leading-[1.2] tracking-[-0.6px] text-bg sm:text-[clamp(2.5rem,4.4vw,4rem)] sm:tracking-[-1.2px]">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-accentDark to-accentSoft bg-clip-text text-transparent">
              Powerful Together
            </span>
          </h2>
          <p className="font-inter text-lg leading-7 text-bg">
            From idea to launch, we&apos;ll craft an experience your users will remember.
          </p>
        </div>
        <ActionButton actionName="bookDemo" size="lg">
          Start a Project
        </ActionButton>
      </div>
    </section>
  );
}
