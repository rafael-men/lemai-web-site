import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Inicializar Resend com a chave da API
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nome, empresa, email, telefone, mensagem } = body

    // Validação básica
    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Nome, email e mensagem são obrigatórios" }, { status: 400 })
    }

    // Verificar se a chave da API está configurada
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY não está configurada")
      return NextResponse.json({ error: "Configuração de email não encontrada" }, { status: 500 })
    }

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: "Lemai Website <noreply@resend.dev>", // Email padrão do Resend para testes
      to: ["lemaisolucoes@gmail.com"], // Seu email
      subject: "Nova Solicitação de Demonstração - Lemai",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #034fff; margin: 0; font-size: 28px;">Nova Solicitação de Demonstração</h1>
              <div style="width: 50px; height: 3px; background: linear-gradient(135deg, #034fff, #027cfe); margin: 15px auto;"></div>
            </div>
            
            <div style="background-color: #f8f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #034fff; margin-top: 0; font-size: 20px;">Dados do Cliente:</h2>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #333; display: inline-block; width: 100px;">Nome:</strong>
                <span style="color: #666;">${nome}</span>
              </div>
              
              ${
                empresa
                  ? `
                <div style="margin-bottom: 15px;">
                  <strong style="color: #333; display: inline-block; width: 100px;">Empresa:</strong>
                  <span style="color: #666;">${empresa}</span>
                </div>
              `
                  : ""
              }
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #333; display: inline-block; width: 100px;">E-mail:</strong>
                <span style="color: #666;">${email}</span>
              </div>
              
              ${
                telefone
                  ? `
                <div style="margin-bottom: 15px;">
                  <strong style="color: #333; display: inline-block; width: 100px;">Telefone:</strong>
                  <span style="color: #666;">${telefone}</span>
                </div>
              `
                  : ""
              }
            </div>
            
            <div style="background-color: #fff; border-left: 4px solid #027cfe; padding: 20px; margin-bottom: 20px;">
              <h3 style="color: #034fff; margin-top: 0; font-size: 18px;">Mensagem:</h3>
              <p style="color: #666; line-height: 1.6; margin: 0;">${mensagem.replace(/\n/g, "<br>")}</p>
            </div>
            
            <div style="text-align: center; padding: 20px; background-color: #f0f7ff; border-radius: 8px;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Data/Hora:</strong> ${new Date().toLocaleString("pt-BR", {
                  timeZone: "America/Sao_Paulo",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">
                Enviado através do site da Lemai
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <a href="https://wa.me/+55${telefone ? telefone.replace(/\D/g, "") : "5579996809911"}" 
                 style="background: linear-gradient(135deg, #034fff, #027cfe); color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                Responder via WhatsApp
              </a>
            </div>
          </div>
        </div>
      `,
      // Versão texto simples como fallback
      text: `
Nova Solicitação de Demonstração - Lemai

Nome: ${nome}
${empresa ? `Empresa: ${empresa}` : ""}
E-mail: ${email}
${telefone ? `Telefone: ${telefone}` : ""}

Mensagem:
${mensagem}

---
Data: ${new Date().toLocaleString("pt-BR")}
Enviado através do site da Lemai
      `.trim(),
    })

    if (error) {
      console.error("Erro do Resend:", error)
      return NextResponse.json({ error: "Erro ao enviar email" }, { status: 500 })
    }

    console.log("Email enviado com sucesso:", data)

    return NextResponse.json({
      success: true,
      message: "Solicitação enviada com sucesso! Entraremos em contato em breve.",
      emailId: data?.id,
    })
  } catch (error) {
    console.error("Erro interno:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
