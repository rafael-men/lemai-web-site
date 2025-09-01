"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, Users, CheckCircle, ArrowRight, CalendarDays } from "lucide-react"

export default function AgendaAdvancedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#027cfe] to-[#034fff]">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/images/logo-lemai.png" alt="Lemai Agenda" className="h-10 w-auto filter brightness-0 invert" />
              <span className="text-white text-xl font-bold">Agenda</span>
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Agenda</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">Sistema de Agendamentos Inteligente</p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Automatize seus agendamentos com IA. Seus clientes podem agendar reuniões, consultas e demonstrações 24/7
            através dos nossos Agentes Inteligentes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <CardTitle className="text-white">Agendamento IA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 text-sm text-center">Agente de IA agenda automaticamente</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <CardTitle className="text-white">24/7 Disponível</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 text-sm text-center">Agendamentos a qualquer hora do dia</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <CardTitle className="text-white">Multi-usuário</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 text-sm text-center">Gerencie agenda de toda equipe</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <CardTitle className="text-white">Confirmação Auto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 text-sm text-center">Lembretes e confirmações automáticas</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Schedule */}
        <Card className="max-w-md mx-auto bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-[#034fff] text-center flex items-center justify-center">
              <CalendarDays className="mr-2 h-5 w-5" />
              Agendar Reunião
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" placeholder="Seu nome completo" />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="seu@email.com" />
            </div>
            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" placeholder="(11) 99999-9999" />
            </div>
            <div>
              <Label htmlFor="assunto">Assunto</Label>
              <Input id="assunto" placeholder="Demonstração dos Agentes de IA" />
            </div>
            <Button className="w-full bg-[#034fff] hover:bg-[#027cfe]">
              Agendar com IA
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="text-center">
              <Button variant="link" className="text-[#034fff]">
                Ver horários disponíveis
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Integration Info */}
        <div className="max-w-2xl mx-auto mt-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Integração Completa</h3>
          <p className="text-blue-100 mb-6">
            Nossa agenda se integra com Google Calendar, Outlook, WhatsApp e todos os nossos Agentes de IA para uma
            experiência perfeita.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm">Google Calendar</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm">Microsoft Outlook</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm">WhatsApp</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm">Agentes IA</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/20 py-8">
        <div className="container mx-auto px-4 text-center text-white">
          <p>&copy; 2024 Lemai Agenda. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
