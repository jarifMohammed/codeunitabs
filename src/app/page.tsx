import { SectionDivider } from "@/components/ui/section-divider";
import {
  CapabilitiesSection,
  CtaSection,
  FaqSection,
  FeaturesSection,
  HeroSection,
  TeamSection,
  TestimonialsSection,
  TechnologiesSection,
  TrustSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SectionDivider variant="glow" />
      <TrustSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider variant="glow" />
      <TeamSection />
      <SectionDivider />
      <CapabilitiesSection />
      <SectionDivider variant="glow" />
      <TechnologiesSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider variant="glow" />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
