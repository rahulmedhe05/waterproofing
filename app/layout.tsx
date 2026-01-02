import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Premium Interior Design Studio in Vadodara | DesignStudio - Transform Your Space",
  description:
    "DesignStudio - Award-winning interior design studio in Vadodara. Expert residential, commercial & office interior design. 20+ years experience, 500+ projects. Modern, luxury & minimalist designs. Free consultation & 3D visualization.",
  keywords:
    "interior design Vadodara, home interior design, office interior design, commercial interiors, space planning, interior decorator Vadodara, home renovation Vadodara, luxury interiors, modern design, interior styling, furniture design, kitchen design, bedroom interior, living room design, interior design services, best interior designer Vadodara",
  authors: [{ name: "DesignStudio Interior Design Vadodara" }],
  creator: "DesignStudio Interior Design",
  publisher: "DesignStudio Interior Design",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://designstudiovadodara.com"),
  alternates: {
    canonical: "https://designstudiovadodara.com",
  },
  openGraph: {
    title: "Premium Interior Design Studio in Vadodara | DesignStudio",
    description:
      "Transform your space with DesignStudio - Vadodara's premier interior design studio. Residential, commercial & office design with 20+ years expertise.",
    url: "https://designstudiovadodara.com",
    siteName: "DesignStudio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://designstudiovadodara.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DesignStudio - Premium Interior Design in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Interior Design in Vadodara | DesignStudio",
    description: "Expert interior design for homes, offices & commercial spaces. Transform your space today!",
    images: ["https://designstudiovadodara.com/og-image.jpg"],
    creator: "@designstudio",
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
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
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
        "@id": "https://designstudiovadodara.com/#organization",
        name: "DesignStudio",
        image: "https://designstudiovadodara.com/logo.png",
        description: "Premium Interior Design Studio in Vadodara - Expert residential, commercial & office interior design services",
        url: "https://designstudiovadodara.com",
        telephone: "+919876543210",
        email: "info@designstudio.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "DesignStudio Office",
          addressLocality: "Vadodara",
          addressRegion: "GJ",
          postalCode: "390001",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.facebook.com/designstudio",
          "https://www.instagram.com/designstudio",
          "https://www.youtube.com/designstudio",
        ],
        priceRange: "$$$",
        serviceArea: {
          "@type": "City",
          name: "Vadodara",
        },
        areaServed: ["Alkapuri", "Thaltej", "Gotri", "Makarpura", "Akota", "Sama", "Vasna", "Manjalpur"],
      },
      {
        "@type": "Organization",
        "@id": "https://designstudiovadodara.com/#organization",
        name: "DesignStudio",
        url: "https://designstudiovadodara.com",
        logo: "https://designstudiovadodara.com/logo.png",
        foundingDate: "2004",
        founders: [{ "@type": "Person", name: "Design Team" }],
        knowsAbout: [
          "Interior Design",
          "Home Design",
          "Office Interior Design",
          "Commercial Interior Design",
          "Space Planning",
          "Furniture Design",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://designstudiovadodara.com/#service-residential",
        name: "Residential Interior Design",
        description: "Professional residential interior design services including space planning, 3D visualization, and complete project management",
        provider: {
          "@id": "https://designstudiovadodara.com/#organization",
        },
        areaServed: "Vadodara",
        priceRange: "$$$",
      },
      {
        "@type": "Service",
        "@id": "https://designstudiovadodara.com/#service-commercial",
        name: "Commercial Interior Design",
        description: "Expert commercial and office interior design with brand integration and complete installation supervision",
        provider: {
          "@id": "https://designstudiovadodara.com/#organization",
        },
        areaServed: "Vadodara",
        priceRange: "$$$$",
      },
      {
        "@type": "AggregateRating",
        "@id": "https://designstudiovadodara.com/#rating",
        ratingValue: "4.8",
        ratingCount: "250",
        bestRating: "5",
        worstRating: "1",
      },
    ],
  }

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
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
