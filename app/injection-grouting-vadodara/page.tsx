import { Metadata } from "next"
import { getPageBySlug } from "@/lib/page-data"
import { PageTemplate } from "@/components/page-template"
import { AutoInternalLinks } from "@/components/internal-links"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { BUSINESS_INFO } from "@/lib/waterproofing-data"

// ISR: Revalidate every hour for fresh content + fast SEO crawling
export const revalidate = 3600

const SLUG = "injection-grouting-vadodara"

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
      geo: {
        "@type": "GeoCoordinates",
        latitude: 22.3072,
        longitude: 73.1812,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "527",
        bestRating: "5",
        worstRating: "1",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "20:00",
        },
      ],
    },
    areaServed: {
      "@type": "City",
      name: page.cityName || "Vadodara",
    },
    ...(page.serviceName && { serviceType: page.serviceName }),
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "25",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "25",
        priceCurrency: "INR",
        unitText: "per sq ft",
      },
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Waterproofing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Terrace Waterproofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Waterproofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Basement Waterproofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Waterproofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wall Waterproofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Injection Grouting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dampness Treatment" } },
      ],
    },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    name: page.metaTitle,
    description: page.metaDescription,
    url: pageUrl,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${BUSINESS_INFO.domain}/#website`,
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.domain,
    },
    about: {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
    inLanguage: "en-IN",
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  }

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${BUSINESS_INFO.domain}/#organization`,
    name: BUSINESS_INFO.name,
    image: `${BUSINESS_INFO.domain}/logo.svg`,
    telephone: `+${BUSINESS_INFO.phone}`,
    email: BUSINESS_INFO.email,
    url: BUSINESS_INFO.domain,
    priceRange: "₹25-₹80 per sq ft",
    address: {
      "@type": "PostalAddress",
      addressLocality: page.cityName || "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.3072,
      longitude: 73.1812,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "527",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: page.cityName || "Vadodara",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Navigation />
      <PageTemplate data={page} />
      <AutoInternalLinks currentSlug={SLUG} currentPage={page} />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
