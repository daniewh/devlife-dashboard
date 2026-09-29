import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"

const jogos = [
  { id: 1, titulo: "The Legend of Zelda: Breath of the Wild", descricao: "Exploração livre em um vasto mundo aberto.", genero: "Aventura", plataforma: "Nintendo", nota: 9.7, lancamento: 2017 },
  { id: 2, titulo: "God of War", descricao: "Kratos e Atreus em uma jornada pela mitologia nórdica.", genero: "Ação", plataforma: "PlayStation", nota: 9.5, lancamento: 2018 },
  { id: 3, titulo: "Halo Infinite", descricao: "O Master Chief volta em uma campanha épica.", genero: "FPS", plataforma: "Xbox", nota: 8.6, lancamento: 2021 },
  { id: 4, titulo: "Hades", descricao: "Roguelike frenético pelo submundo grego.", genero: "Roguelike", plataforma: "PC", nota: 9.3, lancamento: 2020 },
]

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jogos.map((jogo) => (
            <Card
              key={jogo.id}
              titulo={jogo.titulo}
              descricao={jogo.descricao}
              genero={jogo.genero}
              plataforma={jogo.plataforma}
              nota={jogo.nota}
              lancamento={jogo.lancamento}
            />
          ))}
        </div>
      </main>
      <Footer nome="GameDex" ano={2026} />
    </div>
  )
}