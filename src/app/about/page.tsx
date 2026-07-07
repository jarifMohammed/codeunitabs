import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Component,
  Eye,
  Infinity,
  PenTool,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

import { FaqSection, TestimonialsSection, TrustSection } from "@/components/sections";
import { ActionButton } from "@/components/ui/action-button";
import { SectionTag } from "@/components/ui/section-tag";
import { imageAssets } from "@/constants/assets";
import { capabilityItems, capabilityTags } from "@/constants/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded by data experts, Darken creates cutting-edge SaaS analytics platforms tailored for businesses of all sizes.",
  alternates: {
    canonical: "/about",
  },
};

const milestones = [
  {
    title: "The Foundation",
    description: "Born in a garage studio with a focus on pure design excellence.",
    icon: PenTool,
  },
  {
    title: "Scaling Impact",
    description: "Expanding our engineering capabilities to deliver end-to-end solutions.",
    icon: ShieldCheck,
  },
];

const values = [
  {
    title: "Our Mission",
    description:
      "To empower the next generation of founders by providing the strategic design and technical excellence required to dominate their markets.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To become the global gold standard for digital product development, where every interface we touch becomes a benchmark for the industry.",
    icon: Eye,
  },
];

const methodology = [
  {
    title: "PLANNING & STRATEGY",
    description:
      "Defining project scope, objectives, and feasibility to align engineering efforts with enterprise business goals.",
    icon: PenTool,
  },
  {
    title: "REQUIREMENTS ANALYSIS",
    description:
      "Detailed technical documentation and stakeholder alignment to ensure every functional requirement is",
    icon: BadgeCheck,
  },
  {
    title: "SYSTEM ARCHITECTURE",
    description:
      "Architecting high-level design specifications, database schemas, and infrastructure blueprints for scale.",
    icon: Boxes,
  },
  {
    title: "DEVELOPMENT",
    description:
      "Precision-engineered code implementation using modern technology stacks and clean code standards.",
    icon: Component,
  },
  {
    title: "TESTING & INTEGRATION",
    description:
      "Rigorous quality assurance, automated testing, and seamless integration into production environments.",
    icon: Sparkles,
  },
  {
    title: "MAINTENANCE & EVOLUTION",
    description:
      "Continuous monitoring, security updates, and performance optimization for long-term resilience.",
    icon: Infinity,
  },
];

const caseStudies = [
  { image: imageAssets.aboutCaseOne, category: "Branding", title: "Nova Identity" },
  { image: imageAssets.aboutCaseTwo, category: "Branding", title: "Nova Identity" },
  { image: imageAssets.aboutCaseThree, category: "Branding", title: "Nova Identity" },
  { image: imageAssets.aboutCaseFour, category: "Branding", title: "Nova Identity" },
];

function AboutHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-[120px] min-[1800px]:px-[200px]">
      <div className="absolute inset-x-0 top-0 h-[680px] sm:h-[760px] xl:h-[828px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(254,74,0,0.13),transparent_52%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_22%,transparent_72%,rgba(255,255,255,0.08))] opacity-60" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-design flex-col items-center gap-8 text-center sm:gap-12">
        <div className="flex max-w-[1400px] flex-col items-center gap-8 sm:gap-12">
          <SectionTag icon={Zap} label="About us" />
          <div className="flex flex-col gap-3">
            <h1 className="font-montserrat text-[clamp(2.45rem,11vw,4.5rem)] font-bold capitalize leading-[1.2] text-white sm:text-[clamp(3rem,7.5vw,4.5rem)]">
              Empowering Your Business <br className="hidden md:block" />
              with <span className="text-accent">Data-Driven Insights</span>
            </h1>
            <p className="mx-auto max-w-[1200px] font-montserrat text-base font-semibold leading-[1.35] text-white/60 sm:text-lg md:text-xl md:leading-[1.2]">
              We build the software your business runs on.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[9px]">
            <ActionButton actionName="bookDemo" variant="secondary">
              Talk to sales
            </ActionButton>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[230px] sm:h-[288px]">
        <Image
          alt=""
          className="h-full w-full object-cover object-top"
          fill
          priority
          sizes="100vw"
          src={imageAssets.heroHorizon}
        />
        <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-b from-transparent to-bg" />
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="border-t border-borderStrong bg-bg px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]">
      <div className="mx-auto grid max-w-design items-center gap-10 md:gap-[72px] xl:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionTag icon={Zap} label="OUR STORY" />
          <div className="flex flex-col gap-6">
            <h2 className="bg-title-gradient bg-clip-text font-montserrat text-[clamp(2rem,8vw,4.5rem)] font-bold leading-[1.2] text-transparent sm:text-[clamp(2.5rem,4.3vw,4.5rem)]">
              From Idea to Impact
            </h2>
            <p className="font-inter text-base leading-[1.5] text-textSoft sm:text-xl sm:leading-[1.4]">
              Founded on the principle that digital products should be as beautiful as they are
              functional, Lumina began as a small collective of designers and engineers driven by a
              shared obsession: the perfect user experience. Over the years, we&apos;ve evolved into
              a full-service agency, partnering with visionaries to build the future of SaaS,
              fintech, and AI-driven platforms. Our mission remains unchanged: to elevate the
              standard of digital interaction.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {milestones.map(({ title, description, icon: Icon }) => (
              <article
                className="relative overflow-hidden rounded-xl border border-accent/25 bg-card/60 p-[17px] shadow-card"
                key={title}
              >
                <div className="absolute -right-[100px] -top-[100px] size-[200px] rounded-full bg-accent/20 blur-[15px]" />
                <Icon aria-hidden="true" className="relative mb-3 size-4 text-accent" />
                <h3 className="relative font-inter text-base font-semibold leading-[1.2] text-[#fafafa]">
                  {title}
                </h3>
                <p className="relative mt-2 font-inter text-base leading-[1.2] text-textMuted">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <figure className="relative min-h-[340px] overflow-hidden rounded-[8px] border border-white/[0.03] sm:min-h-[420px] xl:min-h-[463px]">
          <Image
            alt="Darken team collaborating in Dhaka"
            className="object-cover"
            fill
            sizes="(min-width: 1280px) 724px, 100vw"
            src={imageAssets.aboutTeam}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090401] via-transparent to-transparent" />
          <figcaption className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-4 sm:inset-x-6 sm:bottom-6">
            <div>
              <p className="font-inter text-xs leading-4 text-textMuted">HQ</p>
              <p className="font-inter text-base leading-5 text-white">
                Dhaka &middot; Bangladesh &middot; Remote
              </p>
            </div>
            <span className="rounded-full border border-white/10 bg-[#090401]/35 px-4 py-2 font-inter text-xs leading-4 text-white backdrop-blur">
              Open positions
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section className="bg-bg px-4 pb-20 sm:px-8 md:pb-24 lg:px-12 xl:px-16 xl:pb-[100px] 2xl:px-[120px] min-[1800px]:px-[200px]">
      <div className="mx-auto grid max-w-design gap-6 md:gap-12 xl:grid-cols-2">
        {values.map(({ title, description, icon: Icon }) => (
          <article
            className="relative min-h-72 overflow-hidden rounded-xl border border-accent/25 bg-card/60 p-6 shadow-card sm:min-h-80 md:p-12"
            key={title}
          >
            <div className="absolute right-px top-px grid size-28 place-items-center rounded-bl-full bg-accent/10 text-accent sm:size-40">
              <Icon aria-hidden="true" className="size-16 opacity-80 sm:size-24" />
            </div>
            <div className="relative max-w-[638px]">
              <h2 className="font-montserrat text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.2] text-white sm:text-[clamp(2.4rem,4vw,3rem)]">
                {title}
              </h2>
              <p className="mt-6 font-inter text-lg leading-[1.35] text-textSoft sm:mt-8 md:text-2xl md:leading-[1.2]">{description}</p>
            </div>
            <div className="absolute bottom-8 left-6 h-1 w-20 bg-accent sm:bottom-12 sm:left-8 sm:w-24 md:left-12" />
          </article>
        ))}
      </div>
    </section>
  );
}

function CapabilitiesPanel() {
  return (
    <section className="bg-bg px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]">
      <div className="mx-auto flex max-w-design flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-6">
          <SectionTag icon={Zap} label="CAPABILITIES" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-[1160px] bg-title-gradient bg-clip-text font-montserrat text-[clamp(2rem,8vw,4rem)] font-bold uppercase leading-[1.2] text-transparent sm:text-[clamp(2.6rem,4.4vw,4rem)]">
              Crafting Powerful Solutions
            </h2>
          </div>
        </div>
        <div className="grid overflow-hidden border border-white/[0.05] bg-card/60 xl:grid-cols-[500px_1fr]">
          <aside className="bg-[#050505] px-5 py-6 sm:px-8 sm:py-8 xl:pb-[83px]">
            <nav aria-label="Capabilities" className="flex flex-col gap-3 sm:gap-4">
              {capabilityItems.map((item, index) => (
                <a
                  className={
                    index === 0
                      ? "border-b border-accent pb-[9px] pt-2 font-space text-lg font-bold leading-[1.2] text-accent sm:text-xl lg:text-2xl"
                      : "border-b border-white/[0.05] pb-[9px] pt-2 font-space text-lg leading-[1.2] text-[#f5f5f5] sm:text-xl lg:text-2xl"
                  }
                  href="#contact"
                  key={item}
                >
                  {item}
                </a>
              ))}
            </nav>
          </aside>
          <article className="relative flex min-h-[420px] items-end overflow-hidden sm:min-h-[500px] xl:min-h-[518px]">
            <Image
              alt="Branding system interface preview"
              className="object-cover opacity-80"
              fill
              sizes="(min-width: 1280px) 1020px, 100vw"
              src={imageAssets.aboutCapabilities}
            />
            <div className="absolute inset-0 bg-[#0b0b0b]/80" />
            <div className="relative flex w-full flex-col gap-5 bg-gradient-to-b from-white/0 to-white/[0.01] p-5 backdrop-blur-[2px] sm:p-8 md:gap-[23px] md:p-12">
              <h3 className="font-montserrat text-[clamp(2rem,9vw,3rem)] font-semibold leading-[1.2] text-[#f5f5f5] sm:text-5xl">
                Branding
              </h3>
              <p className="max-w-[850px] font-inter text-base leading-[1.35] text-[#f5f5f5]/60 sm:text-xl md:text-2xl md:leading-[1.2]">
                Crafting strong, memorable brand identities that connect with your audience and
                build long-term trust.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 sm:gap-4 sm:pt-4">
                {capabilityTags.map((tag) => (
                  <span
                    className="border border-white/10 bg-title-gradient px-3 py-2 font-montserrat text-xs font-semibold capitalize leading-[1.2] tracking-[1px] text-bg sm:px-[17px] sm:py-[9px] sm:text-sm md:text-base"
                    key={tag}
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

function MethodologySection() {
  return (
    <section className="bg-bg px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]">
      <div className="mx-auto flex max-w-design flex-col gap-10 md:gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionTag icon={Zap} label="OUR APPROACH" />
          <h2 className="bg-title-gradient bg-clip-text font-montserrat text-[clamp(2rem,8vw,4rem)] font-bold uppercase leading-[1.2] text-transparent sm:text-[clamp(2.6rem,4.4vw,4rem)]">
            OUR ENGINEERING METHODOLOGY.
          </h2>
        </div>
        <div className="grid overflow-hidden border border-borderStrong md:grid-cols-2 xl:grid-cols-3">
          {methodology.map(({ title, description, icon: Icon }, index) => (
            <article
              className="relative min-h-[240px] border border-borderStrong bg-bg p-6 sm:min-h-[268px] sm:p-8"
              key={title}
            >
              <div className="grid size-12 place-items-center border border-borderStrong text-accent">
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <span className="absolute right-6 top-5 font-montserrat text-4xl font-bold leading-[1.2] text-white/[0.05] sm:right-8 sm:top-6 sm:text-5xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-10 sm:mt-[60px]">
                <h3 className="font-montserrat text-xl font-semibold leading-[1.2] text-white sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-[18px] font-inter text-base leading-[1.5] text-textMuted">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section className="bg-bg px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]" id="case-studies">
      <div className="mx-auto flex max-w-design flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-6">
          <SectionTag icon={Zap} label="OUR WORK" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-[1160px] bg-title-gradient bg-clip-text font-montserrat text-[clamp(2rem,8vw,4rem)] font-bold capitalize leading-[1.2] text-transparent sm:text-[clamp(2.6rem,4.4vw,4rem)]">
              Recent case studies
            </h2>
          </div>
        </div>
        <div className="grid gap-12 xl:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              className="relative flex min-h-[340px] items-end overflow-hidden rounded-[8px] border border-[#2a2a2a] p-px sm:min-h-[430px] xl:min-h-[500px]"
              key={`${study.image}-${study.title}`}
            >
              <Image
                alt={`${study.title} case study`}
                className="object-cover"
                fill
                sizes="(min-width: 1280px) 736px, 100vw"
                src={study.image}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#78787800] to-[#121212]" />
              <div className="relative flex w-full items-end justify-between gap-4 p-5 sm:gap-5 sm:p-6">
                <div className="flex flex-col gap-2">
                  <p className="font-inter text-sm font-medium leading-[1.2] text-[#ff5a1f]">
                    {study.category}
                  </p>
                  <h3 className="font-inter text-xl font-bold leading-[1.2] text-white sm:text-2xl">
                    {study.title}
                  </h3>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-white sm:size-12">
                  <ArrowUpRight aria-hidden="true" className="size-5 sm:size-6" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section
      className="relative overflow-hidden bg-title-gradient px-4 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16 xl:py-[120px] 2xl:px-[120px] min-[1800px]:px-[200px]"
      id="contact"
    >
      <p
        aria-hidden="true"
        className="absolute left-1/2 top-8 hidden -translate-x-1/2 text-center font-montserrat text-[140px] font-extrabold leading-[1.2] tracking-[-1.2px] text-bg opacity-[0.03] xl:block"
      >
        Let&apos;s Build Something
        <br />
        Powerful Together
      </p>
      <div className="relative mx-auto flex max-w-[768px] flex-col items-center gap-9 text-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-montserrat text-[clamp(2rem,8vw,4rem)] font-extrabold leading-[1.2] tracking-[-0.6px] text-bg sm:text-[clamp(2.5rem,4.4vw,4rem)] sm:tracking-[-1.2px]">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-accentDark to-accentSoft bg-clip-text text-transparent">
              Powerful Together
            </span>
          </h2>
          <p className="font-inter text-base leading-7 text-bg sm:text-lg">
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

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <TrustSection />
      <StorySection />
      <MissionVisionSection />
      <CapabilitiesPanel />
      <MethodologySection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBand />
    </main>
  );
}
