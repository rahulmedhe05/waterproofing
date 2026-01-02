"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What services does Essence Space offer?",
    answer:
      "Essence Space provides comprehensive interior design services including residential interior design, office design, commercial interiors, space planning, 3D visualization, furniture design, and complete project management for homes, offices, and commercial spaces in Vadodara.",
  },
  {
    question: "How much does interior design cost in Vadodara?",
    answer:
      "Our pricing is transparent and tailored to your needs. We offer packages starting from ₹99,999 for single room makeovers to custom quotes for luxury commercial projects. All packages include professional consultation and 3D visualization.",
  },
  {
    question: "Do you provide 3D visualization before execution?",
    answer:
      "Yes! We provide advanced 3D visualization and walk-through for all our premium and commercial packages. This helps you see the design before any execution begins, ensuring complete satisfaction.",
  },
  {
    question: "What is your project timeline?",
    answer:
      "Project timelines vary based on project size and complexity. Our basic makeover takes 3 weeks, premium home design takes 6-8 weeks, and commercial projects have customized timelines. We ensure quality without rushing.",
  },
  {
    question: "Do you handle installation and project management?",
    answer:
      "Absolutely! We provide complete project management, installation supervision, and on-site support. Our team ensures every detail is executed to perfection according to the approved design.",
  },
  {
    question: "Are you available for interior design in all areas of Vadodara?",
    answer:
      "Yes, we serve all premium areas of Vadodara including Alkapuri, Thaltej, Gotri, Makarpura, Akota, Sama, Vasna, Manjalpur, and surrounding localities. We also offer services across Gujarat.",
  },
  {
    question: "Can you design both modern and traditional interiors?",
    answer:
      "Yes, our award-winning designers specialize in multiple styles including modern, minimalist, traditional, luxury, and fusion designs. We customize every design to match your lifestyle and preferences.",
  },
  {
    question: "How do I get started with Essence Space?",
    answer:
      "Getting started is easy! Contact us via WhatsApp, phone, or fill our online form. We'll schedule a free consultation to understand your vision, space, and budget, then propose the best design solution for you.",
  },
]

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions About Interior Design
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            Find answers to common questions about our interior design services in Vadodara
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-background">
                  <p className="text-muted-foreground leading-relaxed font-mono">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Schema.org FAQ Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
