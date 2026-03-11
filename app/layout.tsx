import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "#1 Waterproofing in Vadodara 2026 | ₹25/sqft | 10-Year Warranty | India Waterproofing",
    template: "%s | India Waterproofing",
  },
  description:
    "Vadodara's most trusted waterproofing company ✅ Terrace, roof, basement, bathroom waterproofing ✅ ₹25-80/sqft ✅ 10-year warranty ✅ Free inspection ✅ 500+ projects ✅ 35+ cities. Call +91 94274 56951",
  keywords:
    "waterproofing services Vadodara, terrace waterproofing Vadodara, roof waterproofing Vadodara, basement waterproofing, bathroom waterproofing, wall waterproofing, waterproofing contractor Vadodara, waterproofing Ahmedabad, waterproofing Surat, waterproofing Anand, waterproofing Bharuch, waterproofing Gujarat, leakage solution Vadodara, dampness treatment, seepage treatment, Dr Fixit waterproofing, best waterproofing company Gujarat, waterproofing near me, waterproofing cost Vadodara, waterproofing price per sq ft",
  authors: [{ name: "India Waterproofing" }],
  creator: "India Waterproofing",
  publisher: "India Waterproofing",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://waterproofingvadodara.com"),
  alternates: {
    canonical: "https://waterproofingvadodara.com",
  },
  openGraph: {
    title: "#1 Waterproofing in Vadodara & Gujarat | ₹25/sqft | 10-Year Warranty",
    description:
      "Trusted by 500+ clients ✅ Terrace, roof, basement, bathroom waterproofing ✅ Serving Vadodara, Ahmedabad, Surat & 35+ cities ✅ Free inspection. Call now!",
    url: "https://waterproofingvadodara.com",
    siteName: "India Waterproofing",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://waterproofingvadodara.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "India Waterproofing - #1 Waterproofing Company in Vadodara & Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Waterproofing in Vadodara | ₹25/sqft | 10-Year Warranty",
    description: "500+ projects done ✅ Terrace, roof, basement waterproofing ✅ Free inspection ✅ 35+ cities in Gujarat. Call +91 94274 56951",
    images: ["https://waterproofingvadodara.com/og-image.jpg"],
    creator: "@indiawaterproofing",
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml", sizes: "180x180" },
    ],
    shortcut: "/icon.svg",
  },
  verification: {
    google: "googlec1b155cb6acd07f9",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // === WebSite Schema — enables Google Sitelinks ===
      {
        "@type": "WebSite",
        "@id": "https://waterproofingvadodara.com/#website",
        name: "India Waterproofing",
        alternateName: "Waterproofing Vadodara",
        url: "https://waterproofingvadodara.com",
        description: "Professional waterproofing services in Vadodara and 35+ cities across Gujarat. Terrace, roof, basement, bathroom waterproofing with 10-year warranty.",
        publisher: {
          "@id": "https://waterproofingvadodara.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://waterproofingvadodara.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        inLanguage: "en-IN",
      },
      // === Organization / LocalBusiness Schema ===
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": "https://waterproofingvadodara.com/#organization",
        name: "India Waterproofing",
        image: "https://waterproofingvadodara.com/logo.svg",
        logo: {
          "@type": "ImageObject",
          url: "https://waterproofingvadodara.com/logo.svg",
          width: 320,
          height: 80,
        },
        description: "Vadodara's #1 waterproofing company. Professional terrace, roof, basement, bathroom waterproofing with 10-year warranty. Serving 35+ cities in Gujarat. 500+ projects completed.",
        url: "https://waterproofingvadodara.com",
        telephone: "+919427456951",
        email: "info@waterproofingvadodara.com",
        foundingDate: "2010",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 10,
          maxValue: 50,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Vadodara",
          addressLocality: "Vadodara",
          addressRegion: "Gujarat",
          postalCode: "390001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.3072,
          longitude: 73.1812,
        },
        sameAs: [
          "https://www.facebook.com/indiawaterproofing",
          "https://www.instagram.com/indiawaterproofing",
        ],
        priceRange: "₹25-₹80 per sq ft",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Bank Transfer, Credit Card",
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
            description: "Emergency only",
          },
        ],
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 22.3072,
            longitude: 73.1812,
          },
          geoRadius: "200000",
        },
        areaServed: [
          { "@type": "City", name: "Vadodara" },
          { "@type": "City", name: "Ahmedabad" },
          { "@type": "City", name: "Surat" },
          { "@type": "City", name: "Anand" },
          { "@type": "City", name: "Nadiad" },
          { "@type": "City", name: "Bharuch" },
          { "@type": "City", name: "Gandhinagar" },
          { "@type": "City", name: "Godhra" },
          { "@type": "State", name: "Gujarat" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "527",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: "Rajesh Patel" },
            reviewBody: "Best waterproofing service in Vadodara. They fixed my terrace leakage permanently. 10-year warranty and excellent work quality.",
            datePublished: "2025-08-15",
          },
          {
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: "Priya Sharma" },
            reviewBody: "Professional basement waterproofing done for our commercial building. Great materials, on-time completion, and reasonable pricing.",
            datePublished: "2025-10-22",
          },
        ],
      },
      // === Service Schema with OfferCatalog ===
      {
        "@type": "Service",
        "@id": "https://waterproofingvadodara.com/#service-waterproofing",
        name: "Waterproofing Services",
        description: "Complete waterproofing solutions including terrace, roof, basement, bathroom, wall waterproofing with up to 10-year warranty. Serving Vadodara and nearby cities within 200 km.",
        provider: {
          "@id": "https://waterproofingvadodara.com/#organization",
        },
        areaServed: {
          "@type": "State",
          name: "Gujarat",
          containedInPlace: { "@type": "Country", name: "India" },
        },
        serviceType: "Waterproofing",
        termsOfService: "https://waterproofingvadodara.com/terms",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "25",
          highPrice: "80",
          priceCurrency: "INR",
          unitText: "per sq ft",
          offerCount: "8",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Waterproofing Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Terrace Waterproofing", url: "https://waterproofingvadodara.com/terrace-waterproofing-vadodara" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Waterproofing", url: "https://waterproofingvadodara.com/roof-waterproofing-vadodara" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Basement Waterproofing", url: "https://waterproofingvadodara.com/basement-waterproofing-vadodara" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Waterproofing", url: "https://waterproofingvadodara.com/bathroom-waterproofing-vadodara" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wall Waterproofing", url: "https://waterproofingvadodara.com/wall-waterproofing-vadodara" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Injection Grouting", url: "https://waterproofingvadodara.com/injection-grouting-vadodara" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dampness Treatment", url: "https://waterproofingvadodara.com/dampness-treatment-vadodara" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seepage Treatment", url: "https://waterproofingvadodara.com/seepage-treatment-vadodara" } },
          ],
        },
      },
      // === BreadcrumbList for Homepage ===
      {
        "@type": "BreadcrumbList",
        "@id": "https://waterproofingvadodara.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://waterproofingvadodara.com",
          },
        ],
      },
      // === WebPage for Homepage ===
      {
        "@type": "WebPage",
        "@id": "https://waterproofingvadodara.com/#webpage",
        url: "https://waterproofingvadodara.com",
        name: "#1 Waterproofing in Vadodara 2026 | ₹25/sqft | 10-Year Warranty",
        isPartOf: { "@id": "https://waterproofingvadodara.com/#website" },
        about: { "@id": "https://waterproofingvadodara.com/#organization" },
        breadcrumb: { "@id": "https://waterproofingvadodara.com/#breadcrumb" },
        inLanguage: "en-IN",
        datePublished: "2025-01-01",
        dateModified: "2026-02-16",
        description: "Vadodara's most trusted waterproofing company. Terrace, roof, basement, bathroom waterproofing. ₹25-80/sqft. 10-year warranty. 500+ projects. Free inspection.",
      },
    ],
  }

  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8PNVZFSSVZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8PNVZFSSVZ');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
