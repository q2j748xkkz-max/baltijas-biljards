function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="relative max-w-5xl w-full text-center rounded-[2.5rem]
                        border-4 border-yellow-400
                        shadow-[0_0_80px_rgba(212,175,55,0.9)]
                        p-10 md:p-16">

          <div className="absolute inset-0 rounded-[2.5rem] bg-green-900 opacity-95 -z-10"></div>

          {/* LOGO BILJARDS */}
          <img
            src="/logo-biljards.png"
            alt="Baltijas Biljards Nr. 1"
            className="mx-auto mb-8 max-w-[280px] md:max-w-[360px]
                       drop-shadow-[0_0_25px_rgba(212,175,55,1)]"
          />

          <p className="text-lg md:text-xl text-gray-200">
            Profesionāls biljarda klubs Rīgā
          </p>

          <p className="mt-2 text-gray-300">
            Turnīri · Čempionāti · Biljarda skola · Bārs GaldOUTs
          </p>
        </div>
      </section>

      {/* MENU */}
      <section className="py-24 px-4 flex justify-center">
        <div className="w-full max-w-3xl rounded-[2.5rem]
                        border-4 border-yellow-400
                        shadow-[0_0_70px_rgba(212,175,55,0.8)]
                        bg-green-900 px-8 md:px-14 py-14">

          {/* LOGO GALDOUTS */}
          <img
            src="/logo-galdouts.png"
            alt="GaldOUTs Bar"
            className="mx-auto mb-12 max-w-[220px]
                       drop-shadow-[0_0_25px_rgba(212,175,55,0.9)]"
          />

          <MenuBlock
            title="ZUPAS"
            items={[
              ["Dienas zupa", "€"],
              ["Soļanka", "€"],
            ]}
          />

          <MenuBlock
            title="OTRIE ĒDIENI"
            items={[
              ["Steiks ar kartupeļiem", "€"],
              ["Cūkgaļas karbonāde", "€"],
              ["Vistas fileja", "€"],
            ]}
          />

          <MenuBlock
            title="DZĒRIENI"
            items={[
              ["Alus", "€"],
              ["Viskijs", "€"],
              ["Kokteiļi", "€"],
              ["Bezalkoholiskie dzērieni", "€"],
            ]}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 text-center text-gray-400">
        <p className="text-lg">© 2026 Baltijas Biljards Nr. 1 · GaldOUTs</p>
        <p className="mt-2">Rīga · +371 29237723</p>
      </footer>

    </div>
  )
}

function MenuBlock({ title, items }) {
  return (
    <div className="mb-20">

      <h3 className="text-2xl md:text-3xl font-bold text-yellow-400
                     text-center mb-10
                     tracking-widest
                     drop-shadow-[0_0_12px_rgba(212,175,55,0.9)]">
        {title}
      </h3>

      <div className="space-y-5">
        {items.map(([name, price], i) => (
          <div
            key={i}
            className="flex justify-between items-center
                       text-lg md:text-xl
                       border-b border-dotted border-yellow-300/40
                       pb-3"
          >
            <span className="tracking-wide">{name}</span>
            <span className="text-yellow-300 font-semibold tracking-widest">
              {price}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App