"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, CheckCircle2, Phone, Droplets, Star, Clock } from "lucide-react"
import { addLead } from "@/lib/leads"
import { BUSINESS_INFO } from "@/lib/waterproofing-data"

export function WaterproofingHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    city: "",
    serviceType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    addLead({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      city: formData.city,
      serviceType: formData.serviceType,
      message: formData.message,
    })

    const message = `*WATERPROOFING ENQUIRY*

Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
City: ${formData.city}
Service: ${formData.serviceType}
Message: ${formData.message || "N/A"}

Sent via India Waterproofing Website`.trim()

    const whatsappURL = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden pt-16 sm:pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* Water drop pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 C30 10 20 25 20 32 C20 38 24 43 30 43 C36 43 40 38 40 32 C40 25 30 10 30 10Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 container mx-auto px-3 sm:px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-5 gap-6 md:gap-10 items-start">

          {/* Left Side - Main Content */}
          <div className="md:col-span-3 text-white space-y-5 order-2 md:order-1">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500 text-white rounded-full px-4 py-2 font-bold animate-pulse">
              <Droplets className="w-5 h-5" />
              <span className="text-sm">🛡️ 10-YEAR WARRANTY | FREE INSPECTION</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Professional
              <span className="text-cyan-300"> Waterproofing Services</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl">in Vadodara & Nearby Cities</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Stop leakage permanently! Terrace, roof, basement, bathroom waterproofing.
              <span className="font-bold"> Serving 35+ cities within 200 km of Vadodara.</span>
              <span className="bg-cyan-500 px-2 py-1 rounded font-bold ml-1">Free Site Inspection!</span>
            </p>

            {/* USP Cards */}
            <div className="grid grid-cols-2 gap-3 max-w-lg">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <Shield className="w-6 h-6 text-cyan-300 mb-1" />
                <p className="font-bold text-sm">10-Year Warranty</p>
                <p className="text-xs text-white/70">Guaranteed protection</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <CheckCircle2 className="w-6 h-6 text-green-400 mb-1" />
                <p className="font-bold text-sm">500+ Projects</p>
                <p className="text-xs text-white/70">Successfully completed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <Star className="w-6 h-6 text-yellow-400 mb-1" />
                <p className="font-bold text-sm">4.9★ Rating</p>
                <p className="text-xs text-white/70">120+ Happy clients</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <Clock className="w-6 h-6 text-orange-400 mb-1" />
                <p className="font-bold text-sm">Same Day Visit</p>
                <p className="text-xs text-white/70">Quick response time</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg px-8"
                onClick={() => {
                  const el = document.getElementById("contact")
                  el?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get Free Inspection
              </Button>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 shadow-lg"
                onClick={() => window.open(`tel:${BUSINESS_INFO.displayPhone}`, "_self")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Right Side - Quick Inquiry Form */}
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Get Free Quote</h2>
                <p className="text-sm text-gray-600">Fill the form & we&apos;ll call you back</p>
                <div className="mt-2 inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 rounded-full px-3 py-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold">⚡ Get Response in 30 Minutes!</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  placeholder="Your Name *"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="border-gray-300 text-gray-900"
                />
                <Input
                  placeholder="Phone Number *"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="border-gray-300 text-gray-900"
                />
                <select
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white text-gray-900"
                >
                  <option value="">Select City *</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Surat">Surat</option>
                  <option value="Anand">Anand</option>
                  <option value="Nadiad">Nadiad</option>
                  <option value="Bharuch">Bharuch</option>
                  <option value="Gandhinagar">Gandhinagar</option>
                  <option value="Godhra">Godhra</option>
                  <option value="Other">Other City</option>
                </select>
                <select
                  required
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white text-gray-900"
                >
                  <option value="">Type of Waterproofing *</option>
                  <option value="Terrace Waterproofing">Terrace Waterproofing</option>
                  <option value="Roof Waterproofing">Roof Waterproofing</option>
                  <option value="Basement Waterproofing">Basement Waterproofing</option>
                  <option value="Bathroom Waterproofing">Bathroom Waterproofing</option>
                  <option value="Wall Waterproofing">Wall Waterproofing</option>
                  <option value="Tank/Pool Waterproofing">Tank/Pool Waterproofing</option>
                  <option value="Injection Grouting">Injection Grouting</option>
                  <option value="Dampness Treatment">Dampness Treatment</option>
                  <option value="Other">Other</option>
                </select>
                <textarea
                  placeholder="Describe your problem (optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm min-h-[70px] bg-white text-gray-900 placeholder:text-gray-400"
                  rows={3}
                />
                <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold text-lg py-5">
                  Get Free Quote on WhatsApp
                </Button>
                <p className="text-xs text-center text-gray-500">
                  Or call us directly: <a href={`tel:${BUSINESS_INFO.displayPhone}`} className="text-blue-700 font-bold">{BUSINESS_INFO.displayPhone}</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
