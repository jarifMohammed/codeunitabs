import { navigationItems } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { Logo } from "@/components/shared/logo";

export function Footer() {
  return (
    <footer className="border-t border-borderStrong bg-bg px-4 py-10 sm:px-8 lg:px-12 xl:px-16 2xl:px-[120px] min-[1800px]:px-[200px]">
      <div className="mx-auto flex max-w-design flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-md font-inter text-sm leading-6 text-textSoft">{siteConfig.description}</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 font-space text-sm text-navMuted">
          {navigationItems.map((item) => (
            <a className="transition hover:text-white" href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
