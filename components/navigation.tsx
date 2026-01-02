"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center pt-2">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">Essence Space</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm text-foreground hover:text-primary transition-colors font-mono"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-foreground hover:text-primary transition-colors font-mono"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm text-foreground hover:text-primary transition-colors font-mono"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-foreground hover:text-primary transition-colors font-mono"
            >
              Contact
            </button>
            <Button className="bg-primary hover:bg-accent text-white font-semibold text-sm px-4 py-2 h-auto">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 bg-card border-t border-border">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-sm text-foreground hover:text-primary transition-colors font-mono py-2 px-3"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm text-foreground hover:text-primary transition-colors font-mono py-2 px-3"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-sm text-foreground hover:text-primary transition-colors font-mono py-2 px-3"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm text-foreground hover:text-primary transition-colors font-mono py-2 px-3"
              >
                Contact
              </button>
              <Button className="bg-primary hover:bg-accent text-white font-semibold w-full text-sm py-2 h-auto">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
