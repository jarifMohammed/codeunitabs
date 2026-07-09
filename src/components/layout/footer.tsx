import { navigationItems } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { Logo } from "@/components/shared/logo";

export function Footer() {
  return (
    <footer className="relative border-t border-borderStrong/80 bg-gradient-to-b from-bg to-[#0d0400] px-4 py-12 sm:px-8 lg:px-12 xl:px-16 2xl:px-[120px] min-[1800px]:px-[200px]">
      {/* Tech grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(254,74,0,0.2) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(254,74,0,0.2) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "40px 40px",
        }}
      />
      {/* Top glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="relative mx-auto flex max-w-design flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-md font-inter text-sm leading-6 text-textSoft">{siteConfig.description}</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 font-space text-sm text-navMuted">
          {navigationItems.map((item) => (
            <a
              className="relative transition-colors duration-300 hover:text-white group"
              href={item.href}
              key={item.label}
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
