"use client"

import { useState } from "react"

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "/1.png",
    title: "Modern Living Room Design",
  },
  {
    id: 2,
    type: "image",
    src: "/2.png",
    title: "Luxury Bedroom Suite",
  },
  {
    id: 3,
    type: "image",
    src: "/3.png",
    title: "Contemporary Kitchen Design",
  },
  {
    id: 4,
    type: "image",
    src: "/1.png",
    title: "Office Space Interiors",
  },
  {
    id: 5,
    type: "image",
    src: "/2.png",
    title: "Modern Minimalist Home",
  },
  {
    id: 6,
    type: "image",
    src: "/3.png",
    title: "Commercial Retail Space",
  },
  {
    id: 7,
    type: "image",
    src: "/1.png",
    title: "Elegant Dining Area",
  },
  {
    id: 8,
    type: "image",
    src: "/2.png",
    title: "Luxury Home Spa",
  },
]

export function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "image">("all")

  const filteredItems =
    selectedFilter === "all" ? galleryItems : galleryItems.filter((item) => item.type === selectedFilter)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Gallery of Excellence</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "Explore our stunning collection of wedding turbans and see the artistry that makes every groom look royal"
            }
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-6 py-2 rounded-full font-mono transition-all ${
              selectedFilter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary/20"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedFilter("image")}
            className={`px-6 py-2 rounded-full font-mono transition-all ${
              selectedFilter === "image"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary/20"
            }`}
          >
            Photos
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-primary-foreground font-bold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-mono mb-6 text-lg">
            {"Want to see more? Visit our social media for daily updates"}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
