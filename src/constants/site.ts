import type { MetadataRoute } from "next";

export const siteConfig = {
  name: "CodeUnitLabs",
  title: "CodeUnitLabs | Data-Driven SaaS Product Design",
  description:
    "CodeUnitLabs builds data-driven SaaS analytics platforms, product interfaces, and scalable digital systems for modern teams.",
  url: "https://codeunitlabs.com",
  ogImage: "/images/project-dashboard.png",
  twitterHandle: "@codeunitlabs",
};

export const robotsConfig: MetadataRoute.Robots = {
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: `${siteConfig.url}/sitemap.xml`,
};
