import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "GoPlnr | First Get Ranked on Google, Then Pay - Zero Upfront Fees",
  description:
    "First get ranked on Google's first page, then pay us. Just ₹1,000 refundable deposit. Pay ₹24,000 only after ranking. No upfront fees. 30-day guarantee. Local SEO for all businesses.",
  keywords:
    "local SEO services, SEO services India, Google ranking, Google Maps ranking, local business SEO, digital marketing, website SEO optimization, local search optimization, SEO company, best SEO services, goplnr",
  authors: [{ name: "GoPlnr" }],
  creator: "GoPlnr",
  publisher: "GoPlnr",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://goplnr.com"),
  alternates: {
    canonical: "https://goplnr.com",
  },
  openGraph: {
    title: "GoPlnr | First Get Ranked on Google, Then Pay",
    description:
      "First get ranked, then pay. Just ₹1,000 deposit. Pay ₹24,000 only after ranking. Zero upfront fees. 30-day guarantee.",
    url: "https://goplnr.com",
    siteName: "GoPlnr - Local SEO Services",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://goplnr.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GoPlnr - Rank Your Business on Google",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoPlnr | First Get Ranked, Then Pay",
    description: "First get ranked on Google, then pay. ₹1,000 deposit. Pay ₹24,000 only after ranking. Zero upfront fees!",
    images: ["https://goplnr.com/og-image.jpg"],
    creator: "@goplnr",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  verification: {
    google: "googlec1b155cb6acd07f9",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://localseoservices.com/#organization",
        name: "Local SEO Services",
        image: "https://localseoservices.com/logo.png",
        description: "Local SEO services for businesses. One-time investment, pay after ranking. Specializing in website SEO and local search optimization. 30-day ranking guarantee.",
        url: "https://localseoservices.com",
        telephone: "+916353583148",
        email: "hello@localseo.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.facebook.com/localseoservices",
          "https://www.instagram.com/localseoservices",
        ],
        priceRange: "₹₹",
        serviceArea: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "Service",
        "@id": "https://localseoservices.com/#service-localseo",
        name: "Local SEO Services",
        description: "Complete local SEO package including website SEO, local citations, backlink building, and Google Maps ranking. 30-day guarantee.",
        provider: {
          "@id": "https://localseoservices.com/#organization",
        },
        areaServed: "India",
        offers: {
          "@type": "Offer",
          price: "25000",
          priceCurrency: "INR",
          description: "One-time Local SEO package - Pay after ranking - 30 day guarantee",
        },
      },
      {
        "@type": "AggregateRating",
        "@id": "https://localseoservices.com/#rating",
        ratingValue: "4.9",
        ratingCount: "50",
        bestRating: "5",
        worstRating: "1",
      },
    ],
  }

  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
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
