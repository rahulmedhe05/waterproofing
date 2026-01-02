import { Crown, Users, Award, Heart } from "lucide-react"

const features = [
  {
    icon: Crown,
    title: "20+ Years Experience",
    description: "Two decades of creating stunning interior spaces with innovative design solutions",
  },
  {
    icon: Users,
    title: "500+ Projects Completed",
    description: "Trusted by hundreds of satisfied clients for residential, office, and commercial interiors",
  },
  {
    icon: Award,
    title: "Award-Winning Designers",
    description: "Creative professionals specializing in modern, traditional, and fusion interior design",
  },
  {
    icon: Heart,
    title: "Quality & Attention to Detail",
    description: "Meticulous planning, premium materials, and perfect execution for every project",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Vadodara's Premier Interior Design Studio
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "Essence Space is Vadodara's leading interior design studio, transforming spaces into beautiful, functional, and inspiring environments. With over 20 years of expertise in residential, commercial, and office interior design, we combine artistic vision with practical design solutions to create interiors that perfectly reflect your style and personality."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 text-center hover:shadow-xl transition-shadow border border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional About Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/3d model.png"
              alt="Our Craftsmanship"
              className="rounded-lg w-full object-cover aspect-square"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Why Choose Essence Space?</h3>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "Essence Space stands as Vadodara's most trusted interior design studio, completing 500+ projects with precision and elegance. Our expert team combines contemporary design principles with personalized styling to ensure every space reflects your unique personality and lifestyle perfectly."
              }
            </p>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "With over 20 years of heritage in interior design, we've perfected the art of creating stunning spaces for homes, offices, and commercial projects. From modern minimalist designs to luxury contemporary interiors, Essence Space delivers premium quality, perfect execution, and exceptional service across Vadodara."
              }
            </p>
            <ul className="space-y-3">
              {[
                "Complete space planning and consultation",
                "3D visualization and design mockups",
                "Custom furniture and interior solutions",
                "Residential, office & commercial design",
                "Professional project management",
                "Premium material selection and sourcing",
                "On-site installation and supervision",
                "Post-project maintenance consultation",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
