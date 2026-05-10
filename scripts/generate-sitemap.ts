import * as fs from "fs"
import * as path from "path"
import { getAllExpansionPages } from "@/lib/page-data-expansion"
import { BUSINESS_INFO } from "@/lib/waterproofing-data"

interface SitemapEntry {
  url: string
  lastmod: string
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority: number
}

function generateSitemap(entries: SitemapEntry[]): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`
  return xml
}

function escapeXml(str: string): string {
  return str.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;"
      case ">":
        return "&gt;"
      case "&":
        return "&amp;"
      case "'":
        return "&apos;"
      case '"':
        return "&quot;"
      default:
        return c
    }
  })
}

async function generateSitemaps() {
  try {
    console.log("🗺️  Generating sitemaps for all pages...")

    const pages = getAllExpansionPages()
    const today = new Date().toISOString().split("T")[0]

    // Create entries for expansion pages
    const expansionEntries: SitemapEntry[] = pages.map((page, index) => ({
      url: `${BUSINESS_INFO.domain}/${page.slug}`,
      lastmod: today,
      changefreq: "weekly" as const,
      priority: 0.8 - (index / pages.length) * 0.2, // Slightly lower priority for newer pages
    }))

    // Add home page with highest priority
    const homeEntries: SitemapEntry[] = [
      {
        url: BUSINESS_INFO.domain,
        lastmod: today,
        changefreq: "daily",
        priority: 1.0,
      },
    ]

    // Additional important pages
    const importantPages: SitemapEntry[] = [
      {
        url: `${BUSINESS_INFO.domain}/contact`,
        lastmod: today,
        changefreq: "weekly",
        priority: 0.9,
      },
      {
        url: `${BUSINESS_INFO.domain}/about`,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        url: `${BUSINESS_INFO.domain}/services`,
        lastmod: today,
        changefreq: "weekly",
        priority: 0.9,
      },
    ]

    const allEntries = [...homeEntries, ...importantPages, ...expansionEntries]

    // Generate main sitemap
    const mainSitemap = generateSitemap(allEntries)

    // Write main sitemap
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml")
    fs.mkdirSync(path.dirname(sitemapPath), { recursive: true })
    fs.writeFileSync(sitemapPath, mainSitemap)

    // Generate sitemap index if we have many pages (>50k)
    if (allEntries.length > 50000) {
      console.log("📊 Generating sitemap index (total pages > 50,000)...")

      const sitemapIndexEntries = []
      const pageChunkSize = 50000

      for (let i = 0; i < allEntries.length; i += pageChunkSize) {
        const chunk = allEntries.slice(i, i + pageChunkSize)
        const sitemapNum = Math.floor(i / pageChunkSize) + 1
        const sitemapContent = generateSitemap(chunk)
        const sitemapFileName = `sitemap-${sitemapNum}.xml`
        const sitemapFilePath = path.join(process.cwd(), "public", sitemapFileName)
        fs.writeFileSync(sitemapFilePath, sitemapContent)

        sitemapIndexEntries.push({
          url: `${BUSINESS_INFO.domain}/${sitemapFileName}`,
          lastmod: today,
        })
      }

      // Create sitemap index
      const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapIndexEntries.map((entry) => `  <sitemap>\n    <loc>${escapeXml(entry.url)}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n  </sitemap>`).join("\n")}
</sitemapindex>`

      const sitemapIndexPath = path.join(process.cwd(), "public", "sitemap-index.xml")
      fs.writeFileSync(sitemapIndexPath, sitemapIndex)

      console.log(`✅ Generated sitemap index with ${sitemapIndexEntries.length} sitemap files`)
    }

    console.log(`\n✨ Sitemap generation complete!`)
    console.log(`   📄 Total URLs: ${allEntries.length}`)
    console.log(`   📁 Expansion Pages: ${expansionEntries.length}`)
    console.log(`   📍 Saved to: public/sitemap.xml`)
    console.log(`   🌐 Domain: ${BUSINESS_INFO.domain}`)

    return {
      totalUrls: allEntries.length,
      sitemapPath: sitemapPath,
    }
  } catch (error) {
    console.error("❌ Error generating sitemap:", error)
    process.exit(1)
  }
}

generateSitemaps()
