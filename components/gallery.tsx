"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(2)-XRF106biEQpuTAnSxl87WV6c7iZpLw.png",
    alt: "Car lineup",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BuQng9WOm3gq70FK6Wbx3xWly4jDq0.png",
    alt: "Modified RX-7",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(1)-HZ6Qavbj2nuS7DwTyDaEB88NerKmil.png",
    alt: "Custom GT-R",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-IFKdUq8r8KU0TSCSQpL0XjUOoAARm0.png",
    alt: "GT-R with red wheels",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GN4PDOfWoAACLcu.jpglarge-vLi4UlHwzlYspbJDBV0Re56QbHuDXs.png",
    alt: "Luxury car collection",
  },
]

export default function Gallery() {
  return (
    <section className="py-20 px-4" id="galerija">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-400">
          Galerija 
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-lg font-semibold">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <br/><br/><br/>
        <h3>
          Nakon car meeta ovde ćemo dodati galeriju slika vaših automobila kao i celokupnog događaja i omogućiti vam da ih preuzmete u najboljem kvalitetu!
        </h3>
      </div>
    </section>
  )
}

