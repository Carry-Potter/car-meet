export default function Schedule() {
  const events = [
    {
      time: "11:00",
      name: "CAR MEET Takmičenje",
      description: "Pregled i ocenjivanje vozila",
    },
    {
      time: "12:00",
      name: "BENCHPRESS TAKMICENJE",
      description: "takmičenje u dizanju tegova",
    },
    {
      time: "14:00",
      name: "SIM RACING TAKMICENJE",
      description: "takmičenje u brzoj vožnji",
    },
    {
      time: "16:00",
      name: "JOS PAR IZNENADJENJA ZA POSJETIOCE",
      description: "JOS PAR IZNENADJENJA ZA POSJETIOCE",
    },
  ]

  return (
    <section className="py-20 px-4 bg-black/50" id="raspored">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-400">
          Raspored Događaja
        </h2>

        <div className="max-w-3xl mx-auto">
          {events.map((event, index) => (
            <div key={index} className="relative pl-8 pb-8 group">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-red-500 group-last:h-1/2" />
              <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-purple-500" />

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors">
                <div className="text-xl font-bold text-purple-400 mb-2">{event.time}</div>
                <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

