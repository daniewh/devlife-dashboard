const coresPlataforma = {
  PC: "border-sky-400",
  PlayStation: "border-blue-500",
  Xbox: "border-green-500",
  Nintendo: "border-red-500",
}

export default function Card({
  titulo,
  descricao,
  genero,
  plataforma,
  nota,
  ano,
  zerado,
  onToggle,
  onRemover,
}) {
  return (
    <article
      className={`rounded-lg border-l-4 bg-slate-800 p-5 shadow-lg transition-opacity ${coresPlataforma[plataforma]} ${
        zerado ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase text-violet-300">
          {genero} • {ano}
        </span>
        <span className="rounded bg-violet-600 px-2 py-1 text-sm font-bold text-white">
          ⭐ {nota}
        </span>
      </div>

      <h2 className="mt-2 text-xl font-bold text-white">{titulo}</h2>
      <p className="mt-2 text-slate-300">{descricao}</p>
      <p className="mt-3 text-sm text-slate-400">Plataforma: {plataforma}</p>

      <div className="mt-4 flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
          <input
            type="checkbox"
            checked={zerado}
            onChange={onToggle}
            className="h-4 w-4 accent-violet-500"
          />
          Zerado
        </label>
        <button
          onClick={onRemover}
          className="text-xs font-semibold text-red-400 hover:text-red-300"
        >
          Remover
        </button>
      </div>
    </article>
  )
}