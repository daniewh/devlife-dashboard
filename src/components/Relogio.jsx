import { useState, useEffect } from "react"

export default function Relogio() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    console.log("⏰ Relogio MONTADO — intervalo ligado")

    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString())
    }, 1000)

    // Roda quando o componente sai da tela
    return () => {
      console.log("💀 Relogio DESMONTADO — intervalo desligado")
      clearInterval(intervalo)
    }
  }, [])

  return (
    <span className="rounded-lg bg-violet-900 px-3 py-1 font-mono text-sm text-violet-200">
      {hora}
    </span>
  )
}