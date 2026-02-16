"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addLead } from "@/lib/leads"
import { BUSINESS_INFO } from "@/lib/waterproofing-data"

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
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

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setFormData({
      fullName: "",
      phoneNumber: "",
      city: "",
      serviceType: "",
      message: "",
    })
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="WhatsApp Enquiry"
      >
        <svg viewBox="0 0 24 24" className="h-9 w-9 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-700 rounded-full animate-ping" />
      </button>

      {/* Enquiry Form Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[420px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-800">Get Free Waterproofing Quote</DialogTitle>
            <DialogDescription>
              Fill the form & our expert will call you within 30 minutes
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="floatName">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="floatName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatPhone">
                Mobile Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="floatPhone"
                type="tel"
                placeholder="e.g., 98765 43210"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatCity">
                City / Area <span className="text-destructive">*</span>
              </Label>
              <select
                id="floatCity"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full rounded-md border border-input px-3 py-2 text-sm bg-background"
              >
                <option value="">Select City</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Surat">Surat</option>
                <option value="Anand">Anand</option>
                <option value="Nadiad">Nadiad</option>
                <option value="Bharuch">Bharuch</option>
                <option value="Gandhinagar">Gandhinagar</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatService">
                Service Needed <span className="text-destructive">*</span>
              </Label>
              <select
                id="floatService"
                required
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full rounded-md border border-input px-3 py-2 text-sm bg-background"
              >
                <option value="">Select Service</option>
                <option value="Terrace Waterproofing">Terrace Waterproofing</option>
                <option value="Roof Waterproofing">Roof Waterproofing</option>
                <option value="Basement Waterproofing">Basement Waterproofing</option>
                <option value="Bathroom Waterproofing">Bathroom Waterproofing</option>
                <option value="Wall Waterproofing">Wall Waterproofing</option>
                <option value="Dampness Treatment">Dampness Treatment</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatMessage">
                Message <span className="text-muted-foreground text-xs">(optional)</span>
              </Label>
              <textarea
                id="floatMessage"
                placeholder="Describe your waterproofing problem..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-md border border-input px-3 py-2 text-sm min-h-[60px] bg-background"
                rows={2}
              />
            </div>

            <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-base h-11">
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Get Quote on WhatsApp
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Free inspection. No obligation. 10-year warranty on all work.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
