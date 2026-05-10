import { Metadata } from "next"
import { getPageBySlug } from "@/lib/page-data-expansion"
import { PageTemplate } from "@/components/page-template"
import { AutoInternalLinks } from "@/components/internal-links"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { BUSINESS_INFO } from "@/lib/waterproofing-data"

export const revalidate = 3600

const SLUG = "kitchen-water-damage-under-sink-waterproofing"

export function generateMetadata(): Metadata {
  const page = getPageBySlug(SLUG)
  if (!page) return { title: "Page Not Found" }

  const pageUrl = `${BUSINESS_INFO.domain}/${page.slug}`

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
          url: `${BUSINESS_INFO.domain}/og-image.jpg`,
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
      images: [`${BUSINESS_INFO.domain}/og-image.jpg`],
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

  const pageUrl = `${BUSINESS_INFO.domain}/${page.slug}`

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: page.breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href === "/" ? BUSINESS_INFO.domain : `${BUSINESS_INFO.domain}${item.href}`,
    })),
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: page.title,
    description: page.metaDescription,
    url: pageUrl,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS_INFO.domain}/#organization`,
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.displayPhone,
      url: BUSINESS_INFO.domain,
      image: `${BUSINESS_INFO.domain}/logo.svg`,
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
      <AutoInternalLinks currentSlug={page.slug} />
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
