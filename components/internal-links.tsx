import Link from "next/link"
import { SEO_CONFIG } from "@/lib/seo-config"
import { getAllPages, KEYWORD_SERVICES, NEARBY_CITIES } from "@/lib/page-data"
import type { PageData } from "@/lib/page-data"

// ===================================================
// TYPES
// ===================================================

interface InternalLink {
  href: string
  label: string
}

// Top services and cities for global linking
const TOP_SERVICES = KEYWORD_SERVICES.slice(0, 8)
const TOP_CITIES = NEARBY_CITIES.slice(0, 6)

// ===================================================
// SMART RELATED PAGE RESOLVER
// ===================================================

function getRelatedPages(currentSlug: string, currentPage: PageData): PageData[] {
  const allPages = getAllPages()
  const related: PageData[] = []
  const seen = new Set<string>([currentSlug])

  // 1. If service page → find same service in other cities
  if (currentPage.serviceName) {
    const serviceSlugBase = currentPage.serviceName.toLowerCase().replace(/\s+/g, "-")
    const sameSvc = allPages.filter(
      (p) => !seen.has(p.slug) && p.serviceName === currentPage.serviceName && p.slug !== currentSlug
    )
    for (const p of sameSvc.slice(0, 3)) { related.push(p); seen.add(p.slug) }
  }

  // 2. If city/area page → find services targeting that city
  if (currentPage.cityName) {
    const citySlug = currentPage.cityName.toLowerCase().replace(/\s+/g, "-")
    const cityServices = allPages.filter(
      (p) => !seen.has(p.slug) && p.slug.includes(citySlug) && p.type !== currentPage.type
    )
    for (const p of cityServices.slice(0, 3)) { related.push(p); seen.add(p.slug) }
  }

  // 3. Same type pages (nearby areas, other cities, similar services)
  const sameType = allPages.filter(
    (p) => !seen.has(p.slug) && p.type === currentPage.type
  )
  const needed = 8 - related.length
  for (const p of sameType.slice(0, needed)) { related.push(p); seen.add(p.slug) }

  return related.slice(0, 8)
}

// ===================================================
// AUTOMATIC INTERNAL LINKING (placed on every service page)
// Links to: related services, same niche, homepage, top services
// ===================================================

export function AutoInternalLinks({
  currentSlug,
  currentPage,
}: {
  currentSlug: string
  currentPage: PageData
}) {
  const relatedPages = getRelatedPages(currentSlug, currentPage)

  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Related Services */}
        {relatedPages.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Related Waterproofing Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {relatedPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-100 transition-colors group"
                >
                  <h3 className="font-semibold text-blue-900 text-sm group-hover:text-blue-700 line-clamp-2">
                    {page.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {page.metaDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Top Services */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Our Top Waterproofing Services
          </h2>
          <div className="flex flex-wrap gap-2">
            {TOP_SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                href={`/${svc.slug}-vadodara`}
                className="inline-flex items-center gap-1 px-3 py-2 bg-cyan-50 hover:bg-cyan-100 text-cyan-800 rounded-full text-xs sm:text-sm font-medium transition-colors border border-cyan-200"
              >
                <span>{svc.icon}</span>
                <span>{svc.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* City Pages */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Waterproofing in Other Cities
          </h2>
          <div className="flex flex-wrap gap-2">
            {TOP_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/waterproofing-in-${city.slug}`}
                className="inline-flex items-center gap-1 px-3 py-2 bg-green-50 hover:bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium transition-colors border border-green-200"
              >
                📍 {city.name}
              </Link>
            ))}
            <Link
              href="/waterproofing-in-vadodara"
              className="inline-flex items-center gap-1 px-3 py-2 bg-orange-50 hover:bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-bold transition-colors border border-orange-200"
            >
              🏠 Vadodara (Main)
            </Link>
          </div>
        </div>

        {/* Homepage Link */}
        <div className="text-center pt-4 border-t border-gray-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold text-sm"
          >
            ← Back to India Waterproofing Homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

// ===================================================
// SIMPLE RELATED SERVICES LIST (for footer/sidebar use)
// ===================================================

export function RelatedServices({ links }: { links: InternalLink[] }) {
  if (!links || links.length === 0) return null

  return (
    <section className="py-8 border-t border-gray-200 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Related {SEO_CONFIG.niche} in {SEO_CONFIG.location}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-blue-600 hover:text-blue-800 hover:underline text-sm p-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  )
}

export function FooterSEOLinks({ links }: { links: InternalLink[] }) {
  if (!links || links.length === 0) return null

  return (
    <div className="py-6 border-t border-gray-700">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">
        Popular Services
      </h3>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function BreadcrumbNav({
  items,
}: {
  items: { label: string; href?: string }[]
}) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-blue-600">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
