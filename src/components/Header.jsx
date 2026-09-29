import { useState } from "react"
import Relogio from "./Relogio"

export default function Header() {
  const [mostrarRelogio, setMostrarRelogio] = useState(true)

  return (
    <header className="bg-violet-700 text-white shadow-lg">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h1 className="text-3xl font-bold tracking-wide">🎮 GameDex</h1>
        <p className="text-violet-200">O catálogo com os melhores jogos</p>
      </div>

      <div className="flex items-center gap-3">
          {mostrarRelogio && <Relogio />}
          <button
            onClick={() => setMostrarRelogio(!mostrarRelogio)}
            className="rounded-lg border border-violet-400 px-3 py-1 text-xs transition-colors hover:bg-violet-600"
          >
            {mostrarRelogio ? "Esconder relógio" : "Mostrar relógio"}
          </button>
        </div>
    </header>
  )
}