"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const sponsors = [
  { name: "Sponsor 1", logo: "/placeholder.svg" },
  { name: "Sponsor 2", logo: "/placeholder.svg" },
  { name: "Sponsor 3", logo: "/placeholder.svg" },
  { name: "Sponsor 4", logo: "/placeholder.svg" },
  { name: "Sponsor 5", logo: "/placeholder.svg" },
  { name: "Sponsor 6", logo: "/placeholder.svg" },
]

export default function Sponsors() {
  return (
    <section className="py-20 px-4 bg-black/50" id="sponzori">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-400">
          Sponzori
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism p-6 rounded-lg flex items-center justify-center"
            >
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

