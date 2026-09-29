export default function Footer({ nome, ano }) {
  return (
    <footer className="mt-8 bg-slate-950 py-4 text-center text-sm text-slate-400">
      © {ano} {nome}. Feito com React e Tailwind.
    </footer>
  )
}