# Configuração do Resend para Envio de Emails

## Passo 1: Criar conta no Resend

1. Acesse [resend.com](https://resend.com)
2. Crie uma conta gratuita
3. Confirme seu email

## Passo 2: Obter a API Key

1. No dashboard do Resend, vá em "API Keys"
2. Clique em "Create API Key"
3. Dê um nome (ex: "Lemai Website")
4. Copie a chave gerada (começa com `re_`)

## Passo 3: Configurar no Vercel

### Opção A - Via Dashboard do Vercel:
1. Acesse seu projeto no Vercel
2. Vá em "Settings" > "Environment Variables"
3. Adicione uma nova variável:
   - **Name:** `RESEND_API_KEY`
   - **Value:** sua chave do Resend (ex: `re_123abc...`)
4. Clique em "Save"

### Opção B - Via arquivo .env.local (desenvolvimento local):
1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione a linha:
   \`\`\`
   RESEND_API_KEY=re_sua_chave_aqui
   \`\`\`

## Passo 4: Instalar dependência

Execute no terminal:
\`\`\`bash
npm install resend
\`\`\`

## Passo 5: Configurar domínio (Opcional - para produção)

Para usar seu próprio domínio no "from" do email:

1. No Resend, vá em "Domains"
2. Adicione seu domínio
3. Configure os registros DNS conforme instruído
4. Após verificação, altere o "from" na API de:
   \`\`\`
   from: "Lemai Website <noreply@resend.dev>"
   \`\`\`
   para:
   \`\`\`
   from: "Lemai Website <noreply@seudominio.com>"
   \`\`\`

## Teste

Após configurar, teste o formulário no site. Você deve receber um email formatado no Gmail.

## Limites do Plano Gratuito

- 3.000 emails por mês
- 100 emails por dia
- Perfeito para sites corporativos

## Troubleshooting

- Se não receber emails, verifique a pasta de spam
- Verifique se a API Key está correta no Vercel
- Consulte os logs no dashboard do Vercel em caso de erro
