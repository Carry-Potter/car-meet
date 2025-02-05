"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carMake: "",
    carModel: "",
    carYear: "",
    category: "",
    modifications: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="py-20 px-4" id="registracija">
      <div className="container max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-400">
          Registracija
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Ime i Prezime</Label>
              <Input
                id="name"
                placeholder="Unesite vaše ime"
                className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                placeholder="Vaš broj telefona"
                className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="carMake">Marka Automobila</Label>
              <Input
                id="carMake"
                placeholder="npr. BMW, Toyota"
                className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                onChange={(e) => setFormData({ ...formData, carMake: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="carModel">Model</Label>
              <Input
                id="carModel"
                placeholder="npr. M3, Supra"
                className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="carYear">Godište</Label>
              <Input
                id="carYear"
                placeholder="npr. 2020"
                className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                onChange={(e) => setFormData({ ...formData, carYear: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Kategorija</Label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full rounded-md border bg-gray-900/50 border-gray-800 focus:border-purple-500 px-3 py-2 text-sm"
              >
                <option value="">Izaberite kategoriju</option>
                <option value="best-of-show">BEST OF SHOW</option>
                <option value="best-color">BEST COLOR</option>
                <option value="best-wheels">BEST WHEELS</option>
                <option value="exhibition">IZLOŽBA (bez takmičenja)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="modifications">Modifikacije i Detalji</Label>
            <Textarea
              id="modifications"
              placeholder="Opišite modifikacije na vašem automobilu i dodajte sve važne informacije"
              className="bg-gray-900/50 border-gray-800 focus:border-purple-500 min-h-[100px]"
              onChange={(e) => setFormData({ ...formData, modifications: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="images">Slike Automobila</Label>
            <Input
              id="images"
              type="file"
              multiple
              accept="image/*"
              className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
              onChange={(e) => {
                // Handle file upload logic here
                console.log("Files selected:", e.target.files)
              }}
            />
            <p className="text-sm text-gray-400">Obavezno poslati detaljne slike automobila</p>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700"
          >
            Prijavi Se
          </Button>
        </form>
      </div>
      <div className="mt-8 text-center">
        <p className="text-xl font-bold mb-2">CENA UČEŠĆA</p>
        <p className="text-lg">10€ ULAZ + 10€ PRIJAVA ZA TAKMIČENJE U NOVČANIM KATEGORIJAMA</p>
        <p className="text-lg mt-4">Za dodatne informacije i prijave:</p>
        <p className="text-xl font-bold">VIBER: 069/102-523</p>
      </div>
    </section>
  )
}

