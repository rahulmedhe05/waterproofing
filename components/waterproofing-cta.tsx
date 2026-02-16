"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Droplets } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/waterproofing-data"

export function WaterproofingCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-600 to-blue-800 text-white">
      <div className="container mx-auto px-3 sm:px-4 text-center">
        <Droplets className="w-12 h-12 mx-auto mb-4 text-cyan-200" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Stop Water Leakage Today!
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Don&apos;t let water damage your property. Get a <strong>free inspection</strong> and professional waterproofing quote. Serving Vadodara & 35+ cities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-green-500 text-white hover:bg-green-600 font-bold text-lg px-10 py-6"
            onClick={() => {
              const el = document.getElementById("contact")
              el?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get Free Quote
          </Button>
          <Button
            size="lg"
            className="bg-orange-500 text-white hover:bg-orange-600 font-bold text-lg px-10 py-6"
            onClick={() => window.open(`tel:${BUSINESS_INFO.displayPhone}`, "_self")}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call: {BUSINESS_INFO.displayPhone}
          </Button>
        </div>
      </div>
    </section>
  )
}
