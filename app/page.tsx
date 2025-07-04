"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  MessageCircle,
  Calendar,
  TrendingUp,
  Clock,
  Users,
  Zap,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Target,
  Headphones,
  ShoppingCart,
  Search,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function LemaiWebsite() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const dados = {
      nome: formData.get("nome") as string,
      empresa: formData.get("empresa") as string,
      email: formData.get("email") as string,
      telefone: formData.get("telefone") as string,
      mensagem: formData.get("mensagem") as string,
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      })

      const result = await response.json()

      if (response.ok) {
        // Sucesso
        setFormSubmitted(true)
        form.reset()

        // Esconder mensagem após 8 segundos
        setTimeout(() => {
          setFormSubmitted(false)
        }, 8000)
      } else {
        // Erro da API
        setSubmitError(result.error || "Erro ao enviar formulário")
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setSubmitError("Erro de conexão. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/images/logo-lemai.png" alt="Lemai" className="h-12 md:h-16 lg:h-20 w-auto" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-[#034fff] transition-colors">
                Início
              </Link>
              <Link href="#sobre" className="text-gray-700 hover:text-[#034fff] transition-colors">
                Sobre
              </Link>
              <Link href="#servicos" className="text-gray-700 hover:text-[#034fff] transition-colors">
                Serviços
              </Link>
              <Link href="#contato" className="text-gray-700 hover:text-[#034fff] transition-colors">
                Contato
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-[#034fff] to-[#027cfe] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Inteligência Artificial Autônoma</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transforme sua Empresa com <span className="text-white font-extrabold animate-pulse">Agentes de IA</span>{" "}
              Autônomos
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Automatize tarefas críticas e repetitivas com Agentes de IA que trabalham 24/7, integram com seus sistemas
              e aumentam sua taxa de conversão
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-white text-[#034fff] hover:bg-gray-100 text-lg px-8 py-4">
                <a href="https://wa.me/+557999426785" target="_blank" rel="noopener noreferrer">
                  Fale com a nossa IA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#034fff] text-lg px-8 py-4 bg-transparent"
              >
                <a href="https://wa.me/+5579996809911" target="_blank" rel="noopener noreferrer">
                  Fale com um Especialista
                </a>
              </Button>
            </div>

            {/* Canais de Atuação */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <MessageCircle className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm font-medium">WhatsApp</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Bot className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm font-medium">Website</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm font-medium">Instagram</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <ShoppingCart className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm font-medium">E-commerce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que escolher os Agentes Lemai?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa tecnologia de IA autônoma oferece resultados mensuráveis para seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-[#034fff] mx-auto mb-4" />
                <CardTitle className="text-[#034fff]">Atendimento 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Seus clientes são atendidos a qualquer hora, sem interrupções</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[#034fff] mx-auto mb-4" />
                <CardTitle className="text-[#034fff]">Maior Conversão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Aumento comprovado na taxa de conversão de leads em vendas</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-[#034fff] mx-auto mb-4" />
                <CardTitle className="text-[#034fff]">Resposta Instantânea</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Redução drástica no tempo de resposta ao cliente</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-[#034fff] mx-auto mb-4" />
                <CardTitle className="text-[#034fff]">Escalabilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Cresça sem aumentar proporcionalmente sua equipe</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre a Lemai</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos uma empresa visionária que antecipa o futuro da automação inteligente nas empresas. A Lemai
                desenvolve <strong>Agentes de Inteligência Artificial Autônomos</strong> personalizados, projetados para
                executar tarefas críticas e repetitivas em escala.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#034fff] mb-6">Nossa Visão de Futuro</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Acreditamos que a automação inteligente é o futuro do atendimento corporativo. Nossos Agentes de IA
                  não apenas respondem - eles antecipam, aprendem e evoluem com seu negócio.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#027cfe]" />
                    <span className="text-gray-700">Integração completa com seu ecossistema</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#027cfe]" />
                    <span className="text-gray-700">Comunicação personalizada com a linguagem da marca</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#027cfe]" />
                    <span className="text-gray-700">Atuação multicanal inteligente</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#034fff] to-[#027cfe] rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Áreas de Atuação</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Headphones className="h-5 w-5" />
                    <span className="text-sm">Atendimento</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5" />
                    <span className="text-sm">Qualificação</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span className="text-sm">Vendas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm">Agendamentos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Agentes de IA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada Agente é especializado para maximizar resultados em sua área específica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-[#034fff]">
              <CardHeader>
                <Headphones className="h-10 w-10 text-[#034fff] mb-3" />
                <CardTitle className="text-[#034fff]">Agente de Suporte</CardTitle>
                <CardDescription>Atendimento técnico especializado 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Resolução de problemas técnicos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Consulta em base de conhecimento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Escalação inteligente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-[#027cfe]">
              <CardHeader>
                <Target className="h-10 w-10 text-[#027cfe] mb-3" />
                <CardTitle className="text-[#027cfe]">Agente SDR</CardTitle>
                <CardDescription>Qualificação inteligente de leads</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Qualificação automática de prospects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Pontuação de leads</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Integração com CRM</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-[#034fff]">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-[#034fff] mb-3" />
                <CardTitle className="text-[#034fff]">Agente de Vendas</CardTitle>
                <CardDescription>Conversão otimizada de oportunidades</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Apresentação de produtos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Negociação automatizada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Follow-up inteligente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-[#027cfe]">
              <CardHeader>
                <Calendar className="h-10 w-10 text-[#027cfe] mb-3" />
                <CardTitle className="text-[#027cfe]">Agente Secretário</CardTitle>
                <CardDescription>Agendamentos automatizados inteligentes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Integração com Google Calendar</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Confirmação automática</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Lembretes personalizados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-[#034fff]">
              <CardHeader>
                <Search className="h-10 w-10 text-[#034fff] mb-3" />
                <CardTitle className="text-[#034fff]">Agente de Prospecção</CardTitle>
                <CardDescription>Busca ativa de oportunidades</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Identificação de prospects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Primeiro contato automatizado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Nutrição de relacionamento</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-[#027cfe]">
              <CardHeader>
                <ShoppingCart className="h-10 w-10 text-[#027cfe] mb-3" />
                <CardTitle className="text-[#027cfe]">Recuperador de Carrinho</CardTitle>
                <CardDescription>Especializado in e-commerce</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Detecção de abandono</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Ofertas personalizadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#027cfe]" />
                    <span>Recuperação inteligente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#034fff] to-[#027cfe] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Revolucionar seu Atendimento?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Vamos conversar sobre como nossos Agentes de IA podem transformar seus resultados e automatizar seus
            processos críticos
          </p>
          <Button asChild size="lg" className="bg-white text-[#034fff] hover:bg-gray-100 text-lg px-8 py-4">
            <a href="https://wa.me/+5579996809911" target="_blank" rel="noopener noreferrer">
              Vamos Conversar sobre sua Automação com IA?
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
              <p className="text-xl text-gray-600">
                Fale com nossos especialistas e descubra como a IA pode transformar seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-[#034fff] mb-6">Fale Conosco Agora</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#034fff] p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                      <p className="text-gray-600">Atendimento imediato via WhatsApp</p>
                      <Button asChild className="mt-2 bg-green-600 hover:bg-green-700">
                        <a href="https://wa.me/+5579996809911" target="_blank" rel="noopener noreferrer">
                          Iniciar Conversa
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-[#027cfe] p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">E-mail</h4>
                      <p className="text-gray-600">lemaisolucoes@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-[#034fff] p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefone</h4>
                      <p className="text-gray-600">(79) 99680-9911</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#034fff]">Solicite uma Demonstração</CardTitle>
                  <CardDescription>Preencha o formulário e entraremos em contato em até 2 horas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nome">Nome</Label>
                        <Input id="nome" name="nome" placeholder="Seu nome" required disabled={isSubmitting} />
                      </div>
                      <div>
                        <Label htmlFor="empresa">Empresa</Label>
                        <Input id="empresa" name="empresa" placeholder="Nome da empresa" disabled={isSubmitting} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" name="telefone" placeholder="(11) 99999-9999" disabled={isSubmitting} />
                    </div>
                    <div>
                      <Label htmlFor="mensagem">Como podemos ajudar?</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        placeholder="Conte-nos sobre seus desafios de atendimento e automação..."
                        rows={4}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#034fff] hover:bg-[#027cfe] text-lg py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    {/* Mensagem de Sucesso */}
                    {formSubmitted && (
                      <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center animate-fadeIn">
                        <div className="flex items-center justify-center mb-2">
                          <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                          <p className="font-semibold text-lg">Solicitação Enviada!</p>
                        </div>
                        <p className="text-green-600">Entraremos em contato o mais breve possível!</p>
                      </div>
                    )}

                    {/* Mensagem de Erro */}
                    {submitError && (
                      <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center animate-fadeIn">
                        <div className="flex items-center justify-center mb-2">
                          <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
                          <p className="font-semibold text-lg">Erro ao Enviar</p>
                        </div>
                        <p className="text-red-600">{submitError}</p>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/images/logo-lemai.png"
                  alt="Lemai"
                  className="h-14 md:h-16 lg:h-20 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 mb-4">Agentes de IA Autônomos que revolucionam o atendimento corporativo</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Agente de Suporte</li>
                <li>Agente SDR</li>
                <li>Agente de Vendas</li>
                <li>Agente Secretário</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre</li>
                <li>Contato</li>
                <li>Blog</li>
                <li>Casos de Sucesso</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>lemaisolucoes@gmail.com</li>
                <li>WhatsApp</li>
                <li>Demonstração Gratuita</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lemai. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
