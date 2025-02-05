"use client"

import { Trophy, Palette, Disc, Car } from "lucide-react"
import { motion } from "framer-motion"

const prizes = [
  {
    icon: Trophy,
    category: "BEST OF SHOW",
    prize: "1,000€",
    description: "Glavna nagrada za najbolji automobil na događaju",
  },
  {
    icon: Palette,
    category: "BEST COLOR",
    prize: "1,000€",
    description: "500€ za prvo, 300€ za drugo, 200€ za treće mesto",
  },
  {
    icon: Disc,
    category: "BEST WHEELS",
    prize: "1,000€",
    description: "500€ za prvo, 300€ za drugo, 200€ za treće mesto",
  },
  {
    icon: Car,
    category: "IZLOŽBA",
    prize: "Bez takmičenja",
    description: "Mogućnost izložbe svog automobila bez učešća u takmičenju",
  },
]

export default function Prizes() {
  return (
    <section className="py-20 px-4" id="nagrade">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-400">
          Nagrade
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism rounded-lg p-6 text-center group hover:bg-purple-900/20 transition-colors"
            >
              <div className="mb-4 flex justify-center">
                <prize.icon className="w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">{prize.category}</h3>
              <p className="text-2xl font-bold text-purple-400 mb-2">{prize.prize}</p>
              <p className="text-gray-400">{prize.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl mb-4">10€ ULAZ + 10€ PRIJAVA ZA TAKMIČENJE U NOVČANIM KATEGORIJAMA</p>
          <p className="text-xl font-bold">PRIJAVE NA VIBER BROJ: 069/102-523</p>
        </div>
      </div>
    </section>
  )
}

