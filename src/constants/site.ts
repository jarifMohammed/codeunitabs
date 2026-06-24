import type { MetadataRoute } from "next";

export const siteConfig = {
  name: "Darken",
  title: "Darken | Data-Driven SaaS Product Design",
  description:
    "Darken builds data-driven SaaS analytics platforms, product interfaces, and scalable digital systems for modern teams.",
  url: "https://darken.example.com",
  ogImage: "/images/project-dashboard.png",
  twitterHandle: "@darken",
};

export const robotsConfig: MetadataRoute.Robots = {
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: `${siteConfig.url}/sitemap.xml`,
};
