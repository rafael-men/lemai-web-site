import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CRM - Lemai Soluções",
  description: "Sistema de Gestão de Relacionamento com Cliente da Lemai",
}

export default function CRMLayout({
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
