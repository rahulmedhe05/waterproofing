// ============================================================================
// Paginated Sitemap System — Auto-splits into 100-URL chunks
// Generates: /sitemap.xml (index) → /sitemap/0.xml, /sitemap/1.xml, ...
// ============================================================================

import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { SEO_CONFIG } from "@/lib/seo-config";

const URLS_PER_SITEMAP = SEO_CONFIG.maxUrlsPerSitemap; // 100

function getAllRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");
  if (!fs.existsSync(appDir)) return ["/"];

  const routes: string[] = ["/"];
  const ignoreDirs = new Set([
    "api",
    "_components",
    "_lib",
    "admin",
    "node_modules",
    "leads",
  ]);

  function scanDir(dir: string, basePath: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue;

      if (entry.isDirectory()) {
        if (ignoreDirs.has(entry.name)) continue;

        const dirPath = path.join(dir, entry.name);
        const routePath = `${basePath}/${entry.name}`;

        const hasPage =
          fs.existsSync(path.join(dirPath, "page.tsx")) ||
          fs.existsSync(path.join(dirPath, "page.js")) ||
          fs.existsSync(path.join(dirPath, "page.jsx")) ||
          fs.existsSync(path.join(dirPath, "page.mdx"));

        if (hasPage && !entry.name.startsWith("[")) {
          routes.push(routePath);
        }

        scanDir(dirPath, routePath);
      }
    }
  }

  scanDir(appDir, "");
  return [...new Set(routes)].sort();
}

function getRouteEntry(route: string, baseUrl: string, lastModified: Date) {
  let priority = 0.7;
  let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

  if (route === "/") {
    priority = 1.0;
    changeFrequency = "daily";
  } else if (route.includes("waterproofing-in-vadodara")) {
    priority = 0.95;
    changeFrequency = "daily";
  } else if (
    ["terrace", "roof", "basement", "bathroom"].some((s) =>
      route.includes(s)
    )
  ) {
    priority = 0.9;
    changeFrequency = "weekly";
  } else if (route.includes("waterproofing-in-")) {
    priority = 0.85;
    changeFrequency = "weekly";
  } else if (route.split("/").length <= 2) {
    priority = 0.8;
    changeFrequency = "weekly";
  }

  return {
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency,
    priority,
  };
}

// This tells Next.js to generate multiple sitemaps: /sitemap/0.xml, /sitemap/1.xml, ...
// Next.js auto-generates /sitemap.xml as a sitemap index pointing to all of them
export async function generateSitemaps() {
  const allRoutes = getAllRoutes();
  const totalSitemaps = Math.ceil(allRoutes.length / URLS_PER_SITEMAP);

  return Array.from({ length: totalSitemaps }, (_, i) => ({ id: i }));
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SEO_CONFIG.siteUrl;
  const allRoutes = getAllRoutes();
  const lastModified = new Date();

  const start = id * URLS_PER_SITEMAP;
  const end = start + URLS_PER_SITEMAP;
  const chunk = allRoutes.slice(start, end);

  return chunk.map((route) => getRouteEntry(route, baseUrl, lastModified));
}
