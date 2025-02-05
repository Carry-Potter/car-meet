"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "../app/gallery/hero.jpg"
export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-02-23");
  
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
  
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-50"
          poster={Image.src}
        >
          <source src="/car-meet-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-red-900/50 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-400"
        >
          853 CAR MEET 2025
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-xl mb-2">U sklopu praznika Mimoze</p>
          <p className="text-xl mb-2">Pod pokroviteljstvom Opštine Herceg Novi</p>
          <p className="text-xl mb-2">Lokacija: HDL Sutorina (moguća promena lokacije)</p>
          <p className="text-xl mb-2">Datum: 23.02.2025</p>
          <p className="text-xl mb-4">Početak: 11:00h</p>
          <p className="text-2xl font-bold text-purple-400">3,000€ U NAGRADAMA</p>
        </motion.div>

        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
              <div className="text-sm text-gray-300">{unit}</div>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-neon-purple animate-pulse"
          onClick={() => {
            const registration = document.getElementById('registracija');
            registration?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Prijavi Se Sada
        </Button>
      </div>
    </section>
  )
}

