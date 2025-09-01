import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agenda - Lemai Soluções",
  description: "Sistema de Agendamentos Inteligente da Lemai",
}

export default function AgendaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
