import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type ButtonAction =
  | "download-app"
  | "talk-to-sales"
  | "request-consultation"
  | "start-project"
  | "direct-mail";

export type StatItem = {
  value: string;
  suffix?: string;
  label: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: IconComponent;
  variant: "chart" | "orbit" | "support" | "workflow";
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  projectLabel: string;
  projectName: string;
};
