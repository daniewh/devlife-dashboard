const coresPlataforma = {
  PC: "border-sky-400",
  PlayStation: "border-blue-500",
  Xbox: "border-green-500",
  Nintendo: "border-red-500",
}

export default function Card({ titulo, descricao, genero, plataforma, nota, lancamento }) {
  return (
    <article
      className={`rounded-lg border-l-4 bg-slate-800 p-5 shadow-lg ${coresPlataforma[plataforma]}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase text-violet-300">
            {genero} • {lancamento}
        </span>
        <span className="rounded bg-violet-600 px-2 py-1 text-sm font-bold text-white">
          ⭐ {nota}
        </span>
      </div>
      <h2 className="mt-2 text-xl font-bold text-white">{titulo}</h2>
      <p className="mt-2 text-slate-300">{descricao}</p>
      <p className="mt-3 text-sm text-slate-400">Plataforma: {plataforma}</p>
    </article>
  )
}