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
      <TrustSection />
      <FeaturesSection />
      <TeamSection />
      <CapabilitiesSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
