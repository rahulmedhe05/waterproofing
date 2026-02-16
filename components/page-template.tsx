"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Phone, Droplets, Star, Clock, CheckCircle2, ChevronDown, ChevronUp, MapPin, MessageCircle } from "lucide-react"
import { BUSINESS_INFO, WATERPROOFING_SERVICES, GALLERY_IMAGES } from "@/lib/waterproofing-data"
import type { PageData } from "@/lib/page-data"
import Link from "next/link"

// ===================================================
// HERO WITH FORM
// ===================================================
function PageHero({ data }: { data: PageData }) {
  const [formData, setFormData] = useState({
    fullName: "", phoneNumber: "", city: "", serviceType: "", message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `*WATERPROOFING ENQUIRY*

Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
City: ${formData.city || data.cityName || ""}
Service: ${formData.serviceType}
Page: ${data.title}
Message: ${formData.message || "N/A"}

Sent via ${BUSINESS_INFO.domain}`.trim()
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden pt-16 sm:pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 C30 10 20 25 20 32 C20 38 24 43 30 43 C36 43 40 38 40 32 C40 25 30 10 30 10Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }} />
      <div className="relative z-10 container mx-auto px-3 sm:px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-5 gap-6 md:gap-10 items-start">
          <div className="md:col-span-3 text-white space-y-5 order-2 md:order-1">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/70">
              {data.breadcrumb.map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span>/</span>}
                  {i < data.breadcrumb.length - 1 ? (
                    <Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link>
                  ) : (
                    <span className="text-cyan-300">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
            <div className="inline-flex items-center gap-2 bg-cyan-500 text-white rounded-full px-4 py-2 font-bold animate-pulse">
              <Droplets className="w-5 h-5" />
              <span className="text-sm">{data.heroBadge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
              {data.heroHeading}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
              {data.heroSubheading}
            </p>
            <div className="grid grid-cols-2 gap-3 max-w-lg">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <Shield className="w-6 h-6 text-cyan-300 mb-1" />
                <p className="font-bold text-sm">10-Year Warranty</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <CheckCircle2 className="w-6 h-6 text-green-400 mb-1" />
                <p className="font-bold text-sm">500+ Projects</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <Star className="w-6 h-6 text-yellow-400 mb-1" />
                <p className="font-bold text-sm">4.9★ Rating</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <Clock className="w-6 h-6 text-orange-400 mb-1" />
                <p className="font-bold text-sm">Same Day Visit</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg px-8"
                onClick={() => window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}`, "_blank")}>
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 shadow-lg"
                onClick={() => window.open(`tel:${BUSINESS_INFO.displayPhone}`, "_self")}>
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Get Free Quote</h2>
                <p className="text-sm text-gray-600">Free inspection & same-day response</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input placeholder="Your Name *" required value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="border-gray-300 text-gray-900" />
                <Input placeholder="Phone Number *" type="tel" required value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} className="border-gray-300 text-gray-900" />
                <select required value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white text-gray-900">
                  <option value="">Select City *</option>
                  <option value="Vadodara">Vadodara</option><option value="Ahmedabad">Ahmedabad</option>
                  <option value="Surat">Surat</option><option value="Anand">Anand</option>
                  <option value="Nadiad">Nadiad</option><option value="Bharuch">Bharuch</option>
                  <option value="Gandhinagar">Gandhinagar</option><option value="Other">Other</option>
                </select>
                <select required value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white text-gray-900">
                  <option value="">Service Needed *</option>
                  <option value="Terrace Waterproofing">Terrace Waterproofing</option>
                  <option value="Roof Waterproofing">Roof Waterproofing</option>
                  <option value="Basement Waterproofing">Basement Waterproofing</option>
                  <option value="Bathroom Waterproofing">Bathroom Waterproofing</option>
                  <option value="Wall Waterproofing">Wall Waterproofing</option>
                  <option value="Injection Grouting">Injection Grouting</option>
                  <option value="Dampness Treatment">Dampness Treatment</option>
                  <option value="Other">Other</option>
                </select>
                <textarea placeholder="Describe your problem (optional)" value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm min-h-[60px] bg-white text-gray-900 placeholder:text-gray-400" rows={2} />
                <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold text-lg py-5">
                  Get Free Quote on WhatsApp
                </Button>
                <p className="text-xs text-center text-gray-500">
                  Or call: <a href={`tel:${BUSINESS_INFO.displayPhone}`} className="text-blue-700 font-bold">{BUSINESS_INFO.displayPhone}</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===================================================
// INTRO SECTION
// ===================================================
function IntroSection({ data }: { data: PageData }) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">{data.introTitle}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">{data.introText}</p>
          {data.detailSections.map((section, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===================================================
// SERVICES GRID
// ===================================================
function ServicesGrid({ location }: { location?: string }) {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Waterproofing Services{location ? ` in ${location}` : ""}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Complete waterproofing solutions for every need</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {WATERPROOFING_SERVICES.map((svc, i) => (
            <div key={i} className="bg-white rounded-xl p-5 hover:shadow-lg transition-all border border-blue-100 group hover:-translate-y-1">
              <div className="text-3xl mb-3">{svc.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-800 text-sm sm:text-base">{svc.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===================================================
// BENEFITS
// ===================================================
function BenefitsSection({ benefits, location }: { benefits: string[]; location?: string }) {
  return (
    <section className="py-12 md:py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Why Choose {BUSINESS_INFO.name}{location ? ` in ${location}` : ""}?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/10 rounded-xl p-4 border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5" />
              <span className="text-white/90 text-sm">{b}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12 max-w-3xl mx-auto">
          <div><p className="text-3xl font-bold text-cyan-300">500+</p><p className="text-sm text-white/70">Projects</p></div>
          <div><p className="text-3xl font-bold text-cyan-300">10yr</p><p className="text-sm text-white/70">Warranty</p></div>
          <div><p className="text-3xl font-bold text-cyan-300">35+</p><p className="text-sm text-white/70">Cities</p></div>
          <div><p className="text-3xl font-bold text-cyan-300">4.9★</p><p className="text-sm text-white/70">Rating</p></div>
        </div>
      </div>
    </section>
  )
}

// ===================================================
// GALLERY
// ===================================================
function GallerySection() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">Our Waterproofing Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="relative group rounded-xl overflow-hidden shadow-md">
              <div className="aspect-[4/3]">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-2 left-2 text-white text-xs font-semibold">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===================================================
// FAQ
// ===================================================
function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-bold text-gray-900 pr-4 text-sm sm:text-base">{faq.question}</span>
                {open === i ? <ChevronUp className="w-5 h-5 text-cyan-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
              </button>
              {open === i && (
                <div className="px-5 pb-5 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-3 text-sm sm:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===================================================
// NEARBY AREAS / INTERNAL LINKS
// ===================================================
function NearbyLinksSection({ data }: { data: PageData }) {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
          {data.type === "area" ? "Waterproofing in Other Vadodara Areas" : data.type === "city" ? `Areas We Serve in ${data.cityName}` : "Waterproofing Service Areas"}
        </h2>
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {data.nearbyAreas.map((area, i) => {
            const slug = `waterproofing-in-${area.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`
            return (
              <Link key={i} href={`/${slug}`} className="px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-xs sm:text-sm font-medium transition-colors">
                <MapPin className="w-3 h-3 inline mr-1" />Waterproofing in {area}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ===================================================
// CTA SECTION
// ===================================================
function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-cyan-600 to-blue-800 text-white">
      <div className="container mx-auto px-3 sm:px-4 text-center">
        <Droplets className="w-10 h-10 mx-auto mb-3 text-cyan-200" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Stop Water Leakage Today!</h2>
        <p className="text-lg text-white/90 max-w-xl mx-auto mb-6">
          Get a <strong>free inspection</strong> and professional waterproofing quote. Call now!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 font-bold text-lg px-8"
            onClick={() => window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}`, "_blank")}>
            <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Quote
          </Button>
          <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 font-bold text-lg px-8"
            onClick={() => window.open(`tel:${BUSINESS_INFO.displayPhone}`, "_self")}>
            <Phone className="w-5 h-5 mr-2" /> {BUSINESS_INFO.displayPhone}
          </Button>
        </div>
      </div>
    </section>
  )
}

// ===================================================
// MAIN PAGE TEMPLATE
// ===================================================
export function PageTemplate({ data }: { data: PageData }) {
  return (
    <>
      <PageHero data={data} />
      <IntroSection data={data} />
      <ServicesGrid location={data.cityName || data.areaName} />
      <BenefitsSection benefits={data.benefits} location={data.cityName || data.areaName} />
      <GallerySection />
      <FAQSection faqs={data.faqs} />
      <NearbyLinksSection data={data} />
      <CTASection />
    </>
  )
}
