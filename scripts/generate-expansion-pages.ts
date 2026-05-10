import * as fs from "fs"
import * as path from "path"
import { getAllExpansionPages } from "@/lib/page-data-expansion"

const appDir = path.join(process.cwd(), "app")

function generatePageTemplate(slug: string): string {
  return `import { Metadata } from "next"
import { getPageBySlug } from "@/lib/page-data-expansion"
import { PageTemplate } from "@/components/page-template"
import { AutoInternalLinks } from "@/components/internal-links"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { BUSINESS_INFO } from "@/lib/waterproofing-data"

export const revalidate = 3600

const SLUG = "${slug}"

export function generateMetadata(): Metadata {
  const page = getPageBySlug(SLUG)
  if (!page) return { title: "Page Not Found" }

  const pageUrl = \`\${BUSINESS_INFO.domain}/\${page.slug}\`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords.join(", "),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: pageUrl,
      siteName: BUSINESS_INFO.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: \`\${BUSINESS_INFO.domain}/og-image.jpg\`,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [\`\${BUSINESS_INFO.domain}/og-image.jpg\`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default function Page() {
  const page = getPageBySlug(SLUG)
  if (!page) return null

  const pageUrl = \`\${BUSINESS_INFO.domain}/\${page.slug}\`

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: page.breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href === "/" ? BUSINESS_INFO.domain : \`\${BUSINESS_INFO.domain}\${item.href}\`,
    })),
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": \`\${pageUrl}#service\`,
    name: page.title,
    description: page.metaDescription,
    url: pageUrl,
    provider: {
      "@type": "LocalBusiness",
      "@id": \`\${BUSINESS_INFO.domain}/#organization\`,
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.displayPhone,
      url: BUSINESS_INFO.domain,
      image: \`\${BUSINESS_INFO.domain}/logo.svg\`,
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: page.cityName || "Vadodara",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "State",
      name: "Gujarat",
      containedInPlace: { "@type": "Country", name: "India" },
    },
  }

  return (
    <>
      <Navigation />
      <PageTemplate data={page} />
      <AutoInternalLinks currentSlug={page.slug} currentPage={page} />
      <Footer />
      <WhatsAppFloat />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  )
}
`
}

async function generatePages() {
  const pages = getAllExpansionPages()
  let created = 0
  let skipped = 0

  console.log(`📄 Generating pages for ${pages.length} expansion pages...`)

  for (const page of pages) {
    const pageDir = path.join(appDir, page.slug)
    const pagePath = path.join(pageDir, "page.tsx")

    // Skip if page already exists
    if (fs.existsSync(pagePath)) {
      skipped++
      continue
    }

    // Create directory
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true })
    }

    // Write page.tsx
    const template = generatePageTemplate(page.slug)
    fs.writeFileSync(pagePath, template)
    created++

    if (created % 10 === 0) {
      console.log(`✅ Created ${created} pages...`)
    }
  }

  console.log(`\n✨ Generation complete!`)
  console.log(`📝 Created: ${created} new pages`)
  console.log(`⏭️  Skipped: ${skipped} existing pages`)
  console.log(`📊 Total: ${pages.length} pages`)
}

generatePages().catch(console.error)
