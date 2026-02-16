"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, MessageCircle, MapPin, Clock, Shield, CheckCircle, Zap, Star, Users } from "lucide-react"
import { addLead } from "@/lib/leads"
import { BUSINESS_INFO } from "@/lib/waterproofing-data"

export function WaterproofingContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    city: "",
    serviceType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

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
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-green-500 text-white rounded-full px-4 py-2 font-bold mb-4 animate-pulse">
              <Zap className="w-4 h-4" />
              <span className="text-sm">⚡ GET RESPONSE IN 30 MINUTES!</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Book Your <span className="text-cyan-300">Free Inspection</span> Now
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Just fill the quick form — our expert will call you within 30 minutes with a free quote!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-start">
            {/* Contact Form - Same style as Hero */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You! 🎉</h3>
                    <p className="text-gray-600">Your enquiry has been sent. We&apos;ll call you within <strong>30 minutes</strong>.</p>
                    <Button
                      className="mt-4 bg-blue-800 hover:bg-blue-900"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Get Free Quote</h3>
                      <p className="text-sm text-gray-600">Fill the form & we&apos;ll call you back</p>
                      <div className="mt-2 inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 rounded-full px-3 py-1">
                        <Zap className="w-3.5 h-3.5" />
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
                      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-5 shadow-lg">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Get Free Quote on WhatsApp
                      </Button>
                      <p className="text-xs text-center text-gray-500">
                        Or call us directly: <a href={`tel:${BUSINESS_INFO.displayPhone}`} className="text-blue-700 font-bold">{BUSINESS_INFO.displayPhone}</a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Right Side - Trust & Contact Info */}
            <div className="md:col-span-3 space-y-6">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <Users className="w-8 h-8 text-cyan-300 mx-auto mb-2" />
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-xs text-white/70">Projects Done</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">4.9★</p>
                  <p className="text-xs text-white/70">Customer Rating</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">10 Yr</p>
                  <p className="text-xs text-white/70">Warranty</p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Why Choose India Waterproofing?</h3>
                <ul className="space-y-3">
                  {[
                    "✅ Free site inspection & consultation",
                    "✅ 10-year warranty on all work",
                    "✅ Premium brands: Dr Fixit, Fosroc, Sika",
                    "✅ Same-day response & quick turnaround",
                    "✅ No hidden charges — transparent pricing",
                    "✅ Expert team with 15+ years experience",
                    "✅ Serving 35+ cities across Gujarat",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Details */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-white/70">Call / WhatsApp</p>
                      <a href={`tel:${BUSINESS_INFO.displayPhone}`} className="font-bold text-sm">{BUSINESS_INFO.displayPhone}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-white/70">Head Office</p>
                      <p className="font-semibold text-sm">Vadodara, Gujarat</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-white/70">Working Hours</p>
                      <p className="font-semibold text-sm">Mon - Sat: 8 AM - 7 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-white/70">Service Area</p>
                      <p className="font-semibold text-sm">200 km around Vadodara</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Call CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-6 shadow-lg"
                  onClick={() => window.open(`tel:${BUSINESS_INFO.displayPhone}`, "_self")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button
                  size="lg"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-6 shadow-lg"
                  onClick={() => window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent("Hi, I need waterproofing service. Please share details.")}`, "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
