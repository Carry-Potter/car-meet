

export default function Contact() {
  
  return (
    <section className="py-20 px-4" id="kontakt">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-400">
          Kontakt & Lokacija
        </h2>

        <div className="grid place-items-center">
          <div className="space-y-12 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Kontakt Informacije</h3>
              <div className="space-y-2 text-gray-300">
                <p>Email: lobanjica@gmail.com</p>
                <p>Telefon: 069/102-52</p>
                
                <p>Viber: 069/102-523</p>
                <p>Lokacija: HDL Sutorina, Herceg Novi </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Pratite Nas</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  Instagram
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  Facebook
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}