import { useState, useEffect } from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import JogoForm from "./components/JogoForm"

const JOGOS_INICIAIS = [
  { id: 1, titulo: "The Legend of Zelda: Breath of the Wild", descricao: "Exploração livre em um vasto mundo aberto.", genero: "Aventura", plataforma: "Nintendo", nota: 9.7, ano: 2017, zerado: true },
  { id: 2, titulo: "God of War", descricao: "Kratos e Atreus em uma jornada pela mitologia nórdica.", genero: "Ação", plataforma: "PlayStation", nota: 9.5, ano: 2018, zerado: false },
  { id: 3, titulo: "Halo Infinite", descricao: "O Master Chief volta em uma campanha épica.", genero: "FPS", plataforma: "Xbox", nota: 8.6, ano: 2021, zerado: false },
  { id: 4, titulo: "Hades", descricao: "Roguelike frenético pelo submundo grego.", genero: "Roguelike", plataforma: "PC", nota: 9.3, ano: 2020, zerado: false },
]

const FILTROS = [
  { valor: "todos", rotulo: "Todos" },
  { valor: "pendentes", rotulo: "Não zerados" },
  { valor: "zerados", rotulo: "Zerados" },
]

export default function App() {
  const [jogos, setJogos] = useState(() => {
    const salvos = localStorage.getItem("gamedex-jogos")
    return salvos ? JSON.parse(salvos) : JOGOS_INICIAIS
  })
  const [filtro, setFiltro] = useState("todos")
  const [anuncio, setAnuncio] = useState("")

  useEffect(() => {
    localStorage.setItem("gamedex-jogos", JSON.stringify(jogos))
  }, [jogos])

  function adicionarJogo(novoJogo) {
    setJogos((atual) => [...atual, { ...novoJogo, id: Date.now(), zerado: false }])
    setAnuncio(`Jogo "${novoJogo.titulo}" adicionado.`)
  }

  function alternarZerado(id) {
    const jogo = jogos.find((j) => j.id === id)
    const status = jogo.zerado ? "não zerado" : "zerado"
    setJogos((atual) =>
      atual.map((j) => (j.id === id ? { ...j, zerado: !j.zerado } : j))
    )
    setAnuncio(`Jogo "${jogo.titulo}" marcado como ${status}.`)
  }

  function removerJogo(id) {
    const jogo = jogos.find((j) => j.id === id)
    setJogos((atual) => atual.filter((j) => j.id !== id))
    setAnuncio(`Jogo "${jogo.titulo}" removido.`)
  }

  const jogosFiltrados = jogos.filter((j) => {
    if (filtro === "pendentes") return !j.zerado
    if (filtro === "zerados") return j.zerado
    return true
  })

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Skip link: só aparece quando recebe foco via Tab */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>

      <Header />

      {/* Região anunciada pelo leitor de tela */}
      <div aria-live="polite" role="status" className="sr-only">
        {anuncio}
      </div>

      <main id="conteudo" className="mx-auto max-w-6xl px-4 py-8">
        <JogoForm onAdicionar={adicionarJogo} />

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-slate-200">
            Meus jogos ({jogosFiltrados.length})
          </h2>
          <div role="group" aria-label="Filtrar jogos" className="flex gap-2">
            {FILTROS.map((opcao) => (
              <button
                key={opcao.valor}
                onClick={() => setFiltro(opcao.valor)}
                aria-pressed={filtro === opcao.valor}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-violet-300 ${
                  filtro === opcao.valor
                    ? "bg-violet-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {opcao.rotulo}
              </button>
            ))}
          </div>
        </div>

        {jogosFiltrados.length === 0 && (
          <p className="text-slate-400">Nenhum jogo por aqui ainda.</p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jogosFiltrados.map((jogo) => (
            <Card
              key={jogo.id}
              titulo={jogo.titulo}
              descricao={jogo.descricao}
              genero={jogo.genero}
              plataforma={jogo.plataforma}
              nota={jogo.nota}
              ano={jogo.ano}
              zerado={jogo.zerado}
              onToggle={() => alternarZerado(jogo.id)}
              onRemover={() => removerJogo(jogo.id)}
            />
          ))}
        </div>
      </main>

      <Footer nome="GameDex" ano={2026} />
    </div>
  )
}