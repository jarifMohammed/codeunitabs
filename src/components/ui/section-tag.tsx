import type { IconComponent } from "@/types/content";

type SectionTagProps = {
  label: string;
  icon: IconComponent;
};

export function SectionTag({ label, icon: Icon }: SectionTagProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-glass-gradient px-3 py-2.5 text-white sm:px-4 sm:py-3">
      <Icon aria-hidden="true" className="size-4 text-accent sm:size-5" strokeWidth={2} />
      <span className="font-inter text-sm leading-[1.2] sm:text-base">{label}</span>
    </div>
  );
}
