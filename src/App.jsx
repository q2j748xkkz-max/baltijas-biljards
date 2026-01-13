function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* ===== HERO / MOBILE FIRST ===== */}
      <section className="px-4 pt-6 pb-10 text-center">
        <div
          className="mx-auto max-w-md rounded-3xl border-2 border-yellow-400
                     black-900 p-6
                     shadow-[0_0_45px_rgba(212,175,55,0.7)]"
        >

          {/* LOGO */}
          <img
            src="/logo-biljards.png"
            alt="Baltijas Biljards Nr. 1."
            className="mx-auto w-40 md:w-56
                       drop-shadow-[0_0_20px_rgba(212,175,55,1)]"
          />

          {/* TITLE */}
          <h1 className="mt-4 text-xl md:text-2xl font-semibold">
            Profesionālais biljarda klubs Rīgā
          </h1>

          <p className="mt-2 text-sm md:text-base text-zinc-200">
            Turnīri • Čempionāti • Biljarda skola • Bārs
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex flex-col gap-4">

            <a
              href="tel:+37129237723"
              className="rounded-xl border-2 border-yellow-400
                         bg-black py-3 text-center font-semibold text-yellow-400
                         shadow-[0_0_20px_rgba(212,175,55,0.9)]
                         hover:shadow-[0_0_30px_rgba(212,175,55,1)]
                         transition"
            >
              📞 Zvanīt
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border-2 border-yellow-400
                         bg-black py-3 text-center font-semibold text-yellow-400
                         shadow-[0_0_15px_rgba(212,175,55,0.7)]
                         hover:shadow-[0_0_25px_rgba(212,175,55,1)]
                         transition"
            >
              📍 Karte
            </a>

          </div>
        </div>
      </section>

      {/* ===== MENU ===== */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-md space-y-5">

          {/* GALDOUTS LOGO */}
          <img
            src="/logo-galdouts.png"
            alt="GaldOUTs"
            className="mx-auto my-6 w-32
                       drop-shadow-[0_0_15px_rgba(212,175,55,0.9)]"
          />

          <MenuCard title="🍲 Zupas">
            <MenuItem name="Dienas zupa" />
            <MenuItem name="Soļanka" />
          </MenuCard>

          <MenuCard title="🥩 Otrie ēdieni">
            <MenuItem name="Steiks ar kartupeļiem" />
            <MenuItem name="Cūkgaļas karbonāde" />
            <MenuItem name="Vistas fileja" />
          </MenuCard>

          <MenuCard title="🍺 Dzērieni">
            <MenuItem name="Alus" />
            <MenuItem name="Viskijs" />
            <MenuItem name="Kokteiļi" />
            <MenuItem name="Bezalkoholiskie dzērieni" />
          </MenuCard>

        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="px-4 pb-10 text-center text-sm text-zinc-400">
        <p>© 2026 SIA Baltijas Biljards Nr. 1. Reģ. 40203644880 Kalnciema iela 170A., Rīga</p>
        <p className="mt-1">+37129237723</p>
      </footer>

    </div>
  )
}

/* ===== COMPONENTS ===== */

function MenuCard({ title, children }) {
  return (
    <div
      className="rounded-2xl bg-zinc-900 p-4
                 shadow-[0_0_20px_rgba(0,0,0,0.6)]"
    >
      <h3 className="mb-3 text-lg font-bold text-yellow-400">
        {title}
      </h3>
      <div className="space-y-2 text-sm">
        {children}
      </div>
    </div>
  )
}

function MenuItem({ name }) {
  return (
    <div className="flex justify-between items-center
                    border-b border-dotted border-zinc-600 pb-1">
      <span>{name}</span>
      <span className="text-yellow-400 font-medium">€</span>
    </div>
  )
}

export default App