"use client"

import { useState } from "react"
import { GALLERY_IMAGES } from "@/lib/waterproofing-data"

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider mb-2 text-sm">Our Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Waterproofing Project Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            See our completed waterproofing projects across Vadodara, Ahmedabad, Surat, and other cities in Gujarat.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-semibold text-sm">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-cyan-300"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <img
                src={GALLERY_IMAGES[selectedImage].src}
                alt={GALLERY_IMAGES[selectedImage].alt}
                className="w-full rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg font-semibold">
                {GALLERY_IMAGES[selectedImage].caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
