"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, CheckCircle, Zap } from "lucide-react"
import { addLead } from "@/lib/leads"
import { BUSINESS_INFO } from "@/lib/waterproofing-data"

interface HeroFormProps {
  serviceType?: string
  headline?: string
  subheading?: string
}

export function HeroForm({
  serviceType = "Waterproofing Service",
  headline = "Get Your Free Inspection & Quote",
  subheading = "Just fill the quick form — expert response in 30 minutes!"
}: HeroFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    city: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    addLead({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      city: formData.city,
      serviceType: serviceType,
      message: formData.message,
    })

    const message = `*WATERPROOFING ENQUIRY*

Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
City: ${formData.city}
Service: ${serviceType}
Message: ${formData.message || "N/A"}

Sent via India Waterproofing Website`.trim()

    const whatsappURL = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
    setSubmitted(true)

    setTimeout(() => {
      setFormData({ fullName: "", phoneNumber: "", city: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border-2 border-green-500">
        {submitted ? (
          <div className="text-center py-6">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">Thank You! 🎉</h3>
            <p className="text-sm text-gray-600">Your enquiry has been sent. We'll call you within <strong>30 minutes</strong>.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 rounded-full px-3 py-1 mb-2">
                <Zap className="w-3 h-3" />
                <span className="text-xs font-bold">⚡ 30-Minute Response</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{headline}</h3>
              <p className="text-xs text-gray-600 mt-1">{subheading}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5">
              <Input
                placeholder="Your Name *"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="border-gray-300 text-gray-900 h-9 text-sm"
              />
              <Input
                placeholder="Phone Number *"
                type="tel"
                required
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="border-gray-300 text-gray-900 h-9 text-sm"
              />
              <select
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white text-gray-900 h-9"
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
              <textarea
                placeholder="Describe your problem (optional)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm min-h-[60px] bg-white text-gray-900 placeholder:text-gray-400 text-xs"
                rows={2}
              />
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm py-2.5 shadow-lg">
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Free Quote on WhatsApp
              </Button>
              <p className="text-xs text-center text-gray-500">
                Or call: <a href={`tel:${BUSINESS_INFO.displayPhone}`} className="text-green-700 font-bold hover:underline">{BUSINESS_INFO.displayPhone}</a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
