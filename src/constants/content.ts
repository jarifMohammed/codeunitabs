import {
  BarChart3,
  Boxes,
  Circle,
  Code2,
  Component,
  Gem,
  Headphones,
  Infinity,
  Layers3,
  Orbit,
  PenTool,
  Rocket,
  Send,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

import type { FaqItem, FeatureCard, StatItem, Testimonial } from "@/types/content";

export const brandLogos = [
  { label: "Stellar", icon: Circle },
  { label: "Pyramid", icon: Component },
  { label: "Orbit", icon: Orbit },
  { label: "Block", icon: Boxes },
  { label: "Block", icon: Boxes },
  { label: "Block", icon: Boxes },
  { label: "Prism", icon: Gem },
  { label: "Flux", icon: Zap },
  { label: "Nucleus", icon: Infinity },
];

export const stats: StatItem[] = [
  { value: "99.99", suffix: "%", label: "Infrastructure Reliability" },
  { value: "5", suffix: "+", label: "Continents Served" },
  { value: "100", suffix: "%", label: "Senior Engineering Team" },
  { value: "50", suffix: "+", label: "Products Delivered" },
];

export const features: FeatureCard[] = [
  {
    title: "Result-Driven Design",
    description: "Designs engineered to convert, engage, and grow.",
    icon: TrendingUp,
    variant: "chart",
  },
  {
    title: "Full-Service Partner",
    description: "Everything your brand needs, under one roof.",
    icon: Layers3,
    variant: "orbit",
  },
  {
    title: "Long-Term Support",
    description: "We grow with you, every step of the way.",
    icon: Headphones,
    variant: "support",
  },
  {
    title: "Saves You Time",
    description: "Streamlined workflow from idea to launch.",
    icon: BarChart3,
    variant: "workflow",
  },
];

export const serviceTags = [
  { label: "UI/UX", icon: PenTool },
  { label: "Branding", icon: Sparkles },
  { label: "Development", icon: Code2 },
  { label: "Marketing", icon: Send },
  { label: "Support", icon: Headphones },
];

export const workflowSteps = [
  { label: "Plan", icon: PenTool },
  { label: "Design", icon: Component },
  { label: "Build", icon: Code2 },
  { label: "Launch", icon: Rocket },
];

export const supportItems = [
  { title: "Ongoing Support", description: "24/7 expert assistance" },
  { title: "Regular Updates", description: "Always up to date" },
  { title: "Scalable Solutions", description: "Built to grow with you" },
];

export const testimonials: Testimonial[] = [
  {
    quote: "The speed and quality of their UI design transformed our SaaS product in weeks.",
    name: "Marcus Thorne",
    role: "CEO, Flowbase",
    projectLabel: "SaaS Dashboard",
    projectName: "Full UI/UX Redesign & Design System",
  },
  {
    quote: "The innovative design concepts they provided helped us stand out in a crowded market.",
    name: "Jake Mendoza",
    role: "CTO, Innovatech",
    projectLabel: "Website Rebrand",
    projectName: "Complete Visual Overhaul & Branding Strategy",
  },
  {
    quote:
      "Our user engagement doubled after the redesign, showcasing their understanding of user needs.",
    name: "Emily Rios",
    role: "Product Manager, Techflow",
    projectLabel: "User Portal",
    projectName: "Interface Optimization & User Testing",
  },
  {
    quote: "The speed and quality of their UI design transformed our SaaS product in weeks.",
    name: "Marcus Thorne",
    role: "CEO, Flowbase",
    projectLabel: "SaaS Dashboard",
    projectName: "Full UI/UX Redesign & Design System",
  },
  {
    quote: "The speed and quality of their UI design transformed our SaaS product in weeks.",
    name: "Marcus Thorne",
    role: "CEO, Flowbase",
    projectLabel: "SaaS Dashboard",
    projectName: "Full UI/UX Redesign & Design System",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "The expense windows adapted sir. Wrong widen drawn.",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.",
  },
  { question: "Six curiosity day assurance bed necessary?", answer: "" },
  { question: "Produce say the ten moments parties?", answer: "" },
  { question: "Simple innate summer fat appear basket his desire joy?", answer: "" },
  { question: "Outward clothes promise at gravity do excited?", answer: "" },
];

export const capabilityItems = [
  "01 Branding",
  "02 UI/UX Design",
  "03 Web Development",
  "04 Software Solutions",
  "05 Mobile App Development",
  "06 Maintenance & Support",
  "07 Digital Marketing",
];

export const capabilityTags = [
  "Brand Identity",
  "Logo Design",
  "Brand Guidelines",
  "Social Media Branding",
];

export const technologyLogos = [
  "Vercel",
  "React",
  "Next.js",
  "Stripe",
  "Figma",
  "Linear",
  "AWS",
  "Supabase",
  "Segment",
  "Postgres",
];
