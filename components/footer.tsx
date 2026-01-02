"use client"

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-3 sm:px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-0">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-accent">Essence Space</h3>
            <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6">
              {
                "Vadodara's premier interior design studio. Transforming spaces into beautiful, functional environments since 2004."
              }
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Gallery", "Packages", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace(" ", "-"))
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80 font-mono">
              <li>Residential Interior Design</li>
              <li>Office & Commercial Design</li>
              <li>Space Planning & Layout</li>
              <li>3D Visualization</li>
              <li>Furniture & Material Selection</li>
              <li>Complete Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/80 font-mono">
                    Essence Space Office,
                    <br />
                    Vadodara, Gujarat – 390001, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@designstudio.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  info@designstudio.com
                </a>
              </div>

              {/* Removed timings section */}
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-4 text-center">Interior Design Services - All Areas of Vadodara</h4>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed">
            Covering residential and commercial projects across Vadodara's premium localities including Alkapuri, Thaltej, Gotri, Makarpura, Akota, Sama, Vasna, Manjalpur, Gamdevi, and surrounding areas
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3">
            ✓ Residential Interior Design | ✓ Office & Commercial Spaces | ✓ Complete Project Management
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 font-mono text-sm text-center md:text-left">
              © 2025 Essence Space. All rights reserved. | Jaipur's Premier Interior Design Studio
            </p>
            <div className="flex gap-6 text-sm font-mono">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        Interior design Jaipur, home design, office design, commercial interiors, space planning, interior decorator, home renovation, luxury interiors, modern design, interior styling, furniture design, kitchen design, bedroom design, living room design
      </div>
    </footer>
  )
}
