"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles, Crown, Star } from "lucide-react"

const packages = [
  {
    name: "Basic Interior Makeover",
    price: "Starting ₹99,999",
    icon: Star,
    popular: false,
    features: [
      "Complete space assessment & evaluation",
      "Color palette & layout suggestions",
      "2D design plan",
      "Furniture arrangement consultation",
      "Perfect for single room renovation",
      "3 weeks delivery timeline",
    ],
  },
  {
    name: "Premium Home Design",
    price: "Starting ₹3,99,999",
    icon: Sparkles,
    popular: true,
    features: [
      "Full home design consultation",
      "3D visualization of entire space",
      "Custom furniture design options",
      "Advanced lighting & ambiance planning",
      "Premium material selections included",
      "Project management & supervision",
      "Complete on-site installation support",
      "6-8 weeks professional execution",
    ],
  },
  {
    name: "Luxury Commercial Design",
    price: "Custom Quote",
    icon: Crown,
    popular: false,
    features: [
      "Full commercial space transformation",
      "Brand identity integration in design",
      "Advanced 3D visualization & walk-through",
      "Custom furniture & fixtures design",
      "Professional lighting & ambiance design",
      "Dedicated project manager assigned",
      "Complete installation & supervision",
      "Quality assurance & finishing touches",
      "Post-project maintenance consultation",
      "Customized timeline & execution",
    ],
  },
]

export function PackagesSection() {
  const handleWhatsAppInquiry = (packageName: string) => {
    const message = `Hello! I'm interested in the ${packageName} interior design package. Please provide more details.`
    const whatsappNumber = "919876543210"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <section id="packages" className="py-12 md:py-32 bg-card">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <p className="text-accent font-mono uppercase tracking-wider mb-2 md:mb-4 text-xs sm:text-sm">Interior Design Pricing</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Professional Interior Design Packages in Vadodara
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-mono">
            {"Transparent pricing with no hidden costs. Comprehensive design packages with flexible timelines and complete project management. Award-winning interior design service in Vadodara for homes, offices & commercial spaces"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-lg p-8 border-2 transition-all hover:shadow-2xl ${
                pkg.popular ? "border-accent shadow-xl scale-105" : "border-border hover:border-primary"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-1 rounded-full text-sm font-mono uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <pkg.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground font-mono">/event</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground font-mono text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  pkg.popular
                    ? "bg-accent hover:bg-secondary text-accent-foreground"
                    : "bg-primary hover:bg-accent text-primary-foreground"
                }`}
                size="lg"
                onClick={() => handleWhatsAppInquiry(pkg.name)}
              >
                Book {pkg.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">What's Included in All Packages</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Free consultation & site assessment",
                "Professional design recommendations",
                "3D visualization & mockups",
                "Material selection guidance",
                "Flexible project timelines",
                "Service across all Vadodara areas",
                "On-site supervision & support",
                "Quality assurance guarantee",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground font-mono">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground font-mono mb-4">
              {"Need a custom package? Contact us for personalized pricing"}
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
