"use client"

import Link from "next/link"
import { MapPin } from "lucide-react"
import { VADODARA_AREAS } from "@/lib/page-data"

export function VadodaraAreasSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-10">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider mb-2 text-sm">Local Coverage</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Waterproofing in All Vadodara Areas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We serve every corner of Vadodara. Find expert waterproofing services in your locality — from Alkapuri to Panigate and beyond.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {VADODARA_AREAS.map((area) => {
            const slug = `waterproofing-in-${area.toLowerCase().replace(/\s+/g, "-")}`
            return (
              <Link
                key={area}
                href={`/${slug}`}
                className="flex items-center gap-2 bg-white border border-blue-100 rounded-lg px-3 py-3 hover:bg-blue-50 hover:border-cyan-300 hover:shadow-md transition-all duration-200 group"
              >
                <MapPin className="w-4 h-4 text-cyan-600 flex-shrink-0 group-hover:text-cyan-700" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-cyan-800 truncate">
                  {area}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Summary */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Serving <strong className="text-gray-900">{VADODARA_AREAS.length} areas</strong> across Vadodara with professional waterproofing solutions.
            <br className="hidden sm:block" />
            Call <a href="tel:+919427456951" className="text-cyan-600 font-semibold hover:underline">+91 94274 56951</a> for a free inspection at your location.
          </p>
        </div>
      </div>
    </section>
  )
}
