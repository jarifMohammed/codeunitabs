import type { IconComponent } from "@/types/content";

type SectionTagProps = {
  label: string;
  icon: IconComponent;
};

export function SectionTag({ label, icon: Icon }: SectionTagProps) {
  return (
    <div className="inline-flex items-center justify-center rounded-[6px] border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md shadow-[0_2px_12px_rgba(255,255,255,0.05)] sm:px-5 sm:py-2">
      <span className="text-xs font-bold uppercase tracking-widest text-white sm:text-sm">{label}</span>
    </div>
  );
}
