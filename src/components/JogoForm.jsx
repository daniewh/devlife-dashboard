import { useState } from "react"

const campo =
  "w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"

export default function JogoForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [genero, setGenero] = useState("Ação")
  const [plataforma, setPlataforma] = useState("PC")
  const [nota, setNota] = useState("8")
  const [ano, setAno] = useState("2024")

  function aoEnviar(evento) {
    evento.preventDefault()
    if (titulo.trim() === "") return

    onAdicionar({
      titulo: titulo.trim(),
      descricao,
      genero,
      plataforma,
      nota: Number(nota),
      ano: Number(ano),
    })

    setTitulo("")
    setDescricao("")
  }

  return (
    <form
      onSubmit={aoEnviar}
      className="mb-8 flex flex-wrap items-end gap-3 rounded-xl bg-slate-800 p-5 shadow-lg"
    >
      <div className="min-w-[200px] flex-1">
        <label htmlFor="campo-titulo" className="mb-1 block text-sm font-semibold text-slate-300">Título</label>
        <input
          id="campo-titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Nome do jogo"
          className={campo}
        />
      </div>

      <div className="min-w-[200px] flex-1">
        <label htmlFor="campo-descricao" className="mb-1 block text-sm font-semibold text-slate-300">Descrição</label>
        <input
          id="campo-descricao"
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Resumo curto"
          className={campo}
        />
      </div>

      <div>
        <label htmlFor="campo-genero" className="mb-1 block text-sm font-semibold text-slate-300">Gênero</label>
        <select
          id="campo-genero"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          className={campo}
        >
          <option>Ação</option>
          <option>Aventura</option>
          <option>FPS</option>
          <option>RPG</option>
          <option>Roguelike</option>
          <option>Esporte</option>
        </select>
      </div>

      <div>
        <label htmlFor="campo-plataforma" className="mb-1 block text-sm font-semibold text-slate-300">Plataforma</label>
        <select
          id="campo-plataforma"
          value={plataforma}
          onChange={(e) => setPlataforma(e.target.value)}
          className={campo}
        >
          <option>PC</option>
          <option>PlayStation</option>
          <option>Xbox</option>
          <option>Nintendo</option>
        </select>
      </div>

      <div className="w-24">
        <label htmlFor="campo-nota" className="mb-1 block text-sm font-semibold text-slate-300">Nota</label>
        <input
          id="campo-nota"
          type="number" min="0" max="10" step="0.1"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          className={campo}
        />
      </div>

      <div className="w-28">
        <label htmlFor="campo-ano" className="mb-1 block text-sm font-semibold text-slate-300">Ano</label>
        <input
          id="campo-ano"
          type="number" min="1970" max="2100"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          className={campo}
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-violet-600 px-5 py-2 font-bold text-white transition-colors hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 focus:ring-offset-slate-800"
      >
        + Adicionar
      </button>
    </form>
  )
}