import type { MetadataRoute } from "next";

import { robotsConfig } from "@/constants/site";

export default function robots(): MetadataRoute.Robots {
  return robotsConfig;
}
