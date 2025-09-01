"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Users, Building, Phone, Mail, ArrowRight } from "lucide-react"

export default function CRMAdvancedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#034fff] to-[#027cfe]">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/images/logo-lemai.png" alt="Lemai CRM" className="h-10 w-auto filter brightness-0 invert" />
              <span className="text-white text-xl font-bold">CRM</span>
            </div>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#034fff] bg-transparent"
            >
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center text-white mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">CRM</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">Sistema de Gestão de Relacionamento com Cliente</p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Gerencie seus leads, clientes e oportunidades de forma inteligente com nossa plataforma integrada aos
            Agentes de IA.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <CardTitle className="text-white">Gestão de Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 text-sm text-center">Organize e qualifique seus leads automaticamente</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Building className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <CardTitle className="text-white">Empresas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 text-sm text-center">Cadastro completo de empresas e contatos</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <CardTitle className="text-white">Comunicação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 text-sm text-center">Histórico completo de interações</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <CardTitle className="text-white">Automação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 text-sm text-center">Integração com Agentes de IA</p>
            </CardContent>
          </Card>
        </div>

        {/* Access Form */}
        <Card className="max-w-md mx-auto bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-[#034fff] text-center">Acesso ao CRM</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="seu@email.com" />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full bg-[#034fff] hover:bg-[#027cfe]">
              Entrar no CRM
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="text-center">
              <Button variant="link" className="text-[#034fff]">
                Esqueci minha senha
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/20 py-8">
        <div className="container mx-auto px-4 text-center text-white">
          <p>&copy; 2024 Lemai CRM. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
