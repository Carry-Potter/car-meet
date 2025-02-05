import Hero from "@/components/hero"
import Schedule from "@/components/schedule"
import Prizes from "@/components/prizes"
import Registration from "@/components/registration"
import Sponsors from "@/components/sponsors"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Map from "@/components/Map"
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Hero />
     
      <Schedule />
      <Prizes />
      <Registration />
      <Sponsors />
      <Gallery />
      <Contact /> <Map />
    </main>
  )
}
