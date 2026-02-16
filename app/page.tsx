import { WaterproofingHero } from "@/components/waterproofing-hero"
import { ServicesSection } from "@/components/waterproofing-services"
import { ImageGallery } from "@/components/image-gallery"
import { VadodaraAreasSection } from "@/components/vadodara-areas-section"
import { ServiceAreasSection } from "@/components/service-areas-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WaterproofingFAQ } from "@/components/waterproofing-faq"
import { WaterproofingContactForm } from "@/components/waterproofing-contact-form"
import { WaterproofingCTA } from "@/components/waterproofing-cta"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <WaterproofingHero />
      <ServicesSection />
      <ImageGallery />
      <VadodaraAreasSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <WaterproofingCTA />
      <WaterproofingFAQ />
      <WaterproofingContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
